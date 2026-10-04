/**
 * Enhances [data-ajax-form] forms: submits with fetch, maps server validation codes to
 * copy, and reveals the confirmation only after the server confirms a 2xx response.
 */

interface FormMessages {
    sending: string;
    error: string;
    invalid: string;
    required: string;
    emailInvalid: string;
}

interface FormResponse {
    ok: boolean;
    errors?: Record<string, 'required' | 'email' | 'too_long'>;
}

declare global {
    interface Window {
        turnstile?: { reset: (container?: string | HTMLElement) => void };
    }
}

function showFieldErrors(
    form: HTMLFormElement,
    errors: FormResponse['errors'],
    messages: FormMessages,
): void {
    for (const element of form.querySelectorAll<HTMLElement>('[data-error-for]')) {
        element.textContent = '';
        element.classList.add('hidden');
    }

    for (const control of form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input, textarea',
    )) {
        control.removeAttribute('aria-invalid');
    }

    let firstInvalid: HTMLElement | null = null;

    for (const [name, code] of Object.entries(errors ?? {})) {
        const control = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
            `[name="${name}"]`,
        );
        const message = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);

        if (control) {
            control.setAttribute('aria-invalid', 'true');
            firstInvalid ??= control;
        }

        if (message) {
            message.textContent = code === 'email' ? messages.emailInvalid : messages.required;
            message.classList.remove('hidden');
        }
    }

    firstInvalid?.focus();
}

function validateLocally(form: HTMLFormElement): FormResponse['errors'] {
    const errors: NonNullable<FormResponse['errors']> = {};

    for (const control of form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input[required], textarea[required]',
    )) {
        if (control.value.trim() === '') {
            errors[control.name] = 'required';
        } else if (control.type === 'email' && !control.checkValidity()) {
            errors[control.name] = 'email';
        }
    }

    return errors;
}

export function enhanceForms(): void {
    for (const form of document.querySelectorAll<HTMLFormElement>('[data-ajax-form]')) {
        if (form.dataset.enhanced === 'true') {
            continue;
        }

        form.dataset.enhanced = 'true';

        const root = form.closest<HTMLElement>('[data-ajax-form-root]');
        const success = root?.querySelector<HTMLElement>('[data-form-success]');
        const formError = form.querySelector<HTMLElement>('[data-form-error]');
        const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
        const startedAt = form.querySelector<HTMLInputElement>('[data-started-at]');
        const messages = JSON.parse(form.dataset.messages ?? '{}') as FormMessages;
        const submitLabel = submit?.textContent ?? '';

        if (startedAt) {
            startedAt.value = String(Date.now());
        }

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            formError?.classList.add('hidden');

            const localErrors = validateLocally(form);
            showFieldErrors(form, localErrors, messages);

            if (Object.keys(localErrors ?? {}).length > 0) {
                return;
            }

            if (submit) {
                submit.disabled = true;
                submit.textContent = messages.sending;
            }

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { Accept: 'application/json' },
                });

                const result = (await response.json().catch(() => ({ ok: false }))) as FormResponse;

                if (response.ok && result.ok) {
                    form.classList.add('hidden');
                    success?.classList.remove('hidden');
                    success?.focus();
                    return;
                }

                if (response.status === 422 && result.errors) {
                    showFieldErrors(form, result.errors, messages);
                    return;
                }

                throw new Error(`Form submission failed with status ${response.status}`);
            } catch {
                if (formError) {
                    formError.textContent = messages.error;
                    formError.classList.remove('hidden');
                }
            } finally {
                if (submit) {
                    submit.disabled = false;
                    submit.textContent = submitLabel;
                }

                window.turnstile?.reset(
                    form.querySelector<HTMLElement>('.cf-turnstile') ?? undefined,
                );
            }
        });
    }
}
