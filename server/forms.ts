/**
 * Shared handler for website form submissions on Cloudflare Pages Functions.
 * Validates input, verifies Cloudflare Turnstile, filters obvious bots and sends the
 * submission to the Joyful Effort inbox through the Resend REST API.
 */

export interface Env {
    RESEND_API_KEY: string;
    TURNSTILE_SECRET_KEY: string;
    FORM_TO_EMAIL: string;
    FORM_FROM_EMAIL: string;
}

export interface FieldRule {
    name: string;
    label: string;
    required?: boolean;
    email?: boolean;
    maxLength?: number;
}

export interface FormConfig {
    fields: FieldRule[];
    subject: (values: Record<string, string>) => string;
    heading: string;
    replyToField: string;
    successPath: string;
    backPath: string;
}

type ErrorCode = 'required' | 'email' | 'too_long';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MINIMUM_FILL_MILLISECONDS = 2500;

function wantsJson(request: Request): boolean {
    return request.headers.get('Accept')?.includes('application/json') ?? false;
}

function json(body: unknown, status: number): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    });
}

function escapeHtml(value: string): string {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

/** Plain HTML fallback for browsers submitting without JavaScript. */
function htmlNotice(message: string, backPath: string, status: number): Response {
    const body = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Joyful Effort</title><style>body{font-family:system-ui,sans-serif;background:#FBF8F1;color:#14283F;max-width:40rem;margin:4rem auto;padding:0 1.25rem;line-height:1.55}a{color:#14283F}</style></head><body><p>${escapeHtml(message)}</p><p><a href="${escapeHtml(backPath)}">Go back</a></p></body></html>`;

    return new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

function respondSuccess(request: Request, config: FormConfig): Response {
    if (wantsJson(request)) {
        return json({ ok: true }, 200);
    }

    return Response.redirect(new URL(config.successPath, request.url).toString(), 303);
}

function respondFailure(request: Request, config: FormConfig, status: number): Response {
    if (wantsJson(request)) {
        return json({ ok: false }, status);
    }

    return htmlNotice(
        'Something went wrong and your message was not sent. Please try again, or email us at hello@joyfuleffort.com.',
        config.backPath,
        status,
    );
}

function validate(values: Record<string, string>, fields: FieldRule[]): Record<string, ErrorCode> {
    const errors: Record<string, ErrorCode> = {};

    for (const field of fields) {
        const value = values[field.name] ?? '';

        if (field.required && value === '') {
            errors[field.name] = 'required';
        } else if (value !== '' && field.email && !EMAIL_PATTERN.test(value)) {
            errors[field.name] = 'email';
        } else if (value.length > (field.maxLength ?? 5000)) {
            errors[field.name] = 'too_long';
        }
    }

    return errors;
}

async function verifyTurnstile(
    token: string,
    secret: string,
    remoteIp: string | null,
): Promise<boolean> {
    if (token === '') {
        return false;
    }

    const body = new FormData();
    body.append('secret', secret);
    body.append('response', token);

    if (remoteIp) {
        body.append('remoteip', remoteIp);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body,
    });

    if (!response.ok) {
        return false;
    }

    const result = (await response.json()) as { success?: boolean };

    return result.success === true;
}

function buildEmail(
    values: Record<string, string>,
    config: FormConfig,
): { text: string; html: string } {
    const rows = config.fields.map((field) => ({
        label: field.label,
        value: values[field.name] || '—',
    }));

    const text = [config.heading, '', ...rows.map((row) => `${row.label}\n${row.value}\n`)].join(
        '\n',
    );

    const html = `<div style="font-family:Arial,sans-serif;color:#14283F;line-height:1.5">
<h1 style="font-size:20px">${escapeHtml(config.heading)}</h1>
${rows
    .map(
        (row) =>
            `<p style="margin:16px 0 4px;font-weight:bold">${escapeHtml(row.label)}</p><p style="margin:0;white-space:pre-wrap">${escapeHtml(row.value)}</p>`,
    )
    .join('\n')}
</div>`;

    return { text, html };
}

export async function handleFormSubmission(
    request: Request,
    env: Env,
    config: FormConfig,
): Promise<Response> {
    let formData: FormData;

    try {
        formData = await request.formData();
    } catch {
        return respondFailure(request, config, 400);
    }

    const read = (name: string): string => {
        const value = formData.get(name);

        return typeof value === 'string' ? value.trim() : '';
    };

    // Bots fill the hidden honeypot or submit implausibly fast: accept silently, send nothing.
    const startedAt = Number(read('started_at'));
    const submittedTooFast = startedAt > 0 && Date.now() - startedAt < MINIMUM_FILL_MILLISECONDS;

    if (read('website') !== '' || submittedTooFast) {
        return respondSuccess(request, config);
    }

    const values = Object.fromEntries(config.fields.map((field) => [field.name, read(field.name)]));
    const errors = validate(values, config.fields);

    if (Object.keys(errors).length > 0) {
        if (wantsJson(request)) {
            return json({ ok: false, errors }, 422);
        }

        return htmlNotice('Please go back and complete the required fields.', config.backPath, 422);
    }

    const isHuman = await verifyTurnstile(
        read('cf-turnstile-response'),
        env.TURNSTILE_SECRET_KEY,
        request.headers.get('CF-Connecting-IP'),
    );

    if (!isHuman) {
        return respondFailure(request, config, 403);
    }

    const { text, html } = buildEmail(values, config);

    const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: env.FORM_FROM_EMAIL,
            to: [env.FORM_TO_EMAIL],
            reply_to: values[config.replyToField] || undefined,
            subject: config.subject(values),
            text,
            html,
        }),
    });

    if (!resendResponse.ok) {
        console.error(
            'Resend rejected the submission',
            resendResponse.status,
            await resendResponse.text(),
        );

        return respondFailure(request, config, 502);
    }

    return respondSuccess(request, config);
}
