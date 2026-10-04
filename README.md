# Joyful Effort website

Static marketing site for Joyful Effort, built with Astro + Tailwind CSS v4 and deployed on Cloudflare Pages. Forms are handled by Cloudflare Pages Functions and sent via Resend.

## Develop

```bash
pnpm install
pnpm dev            # Astro dev server (pages only, no form functions)
pnpm build
pnpm preview        # wrangler pages dev dist — serves pages + /api functions
```

For `pnpm preview`, copy `.dev.vars.example` to `.dev.vars`. The example uses Cloudflare's always-pass Turnstile test secret.

## Quality gates

```bash
pnpm check          # astro check + functions typecheck + Biome
pnpm copy:check     # after build: verifies the source copy documents appear verbatim
```

`copy:check` reads the copy documents from `../lotus/.serena/memories/docs/Knowledge/marketing/joyful-effort-website` by default; pass another path as an argument if needed.

## Where things live

- `src/content/*.ts` holds all page copy, transcribed verbatim from the copy documents. Copy changes happen here.
- `src/components/` holds the hand-drawn design system (HandFrame, HandRule, SplitHero, StoryRow, FeatureCard, Footer, …).
- `src/assets/logo/joyful-effort.svg` is the logo, traced from the original ink-on-paper artwork.
- `src/assets/illustrations/` holds the ten spot illustrations.
- `functions/api/*.ts` and `server/forms.ts` hold the form endpoints (validation, honeypot, Turnstile, Resend).

## Cloudflare Pages setup

1. Connect the repository. Build command: `pnpm build`. Output directory: `dist`.
2. Environment variables (Production and Preview):
   - `RESEND_API_KEY` (secret)
   - `TURNSTILE_SECRET_KEY` (secret)
   - `PUBLIC_TURNSTILE_SITE_KEY` (build-time, the Turnstile widget site key)
   - `FORM_TO_EMAIL` and `FORM_FROM_EMAIL` default in `wrangler.toml`; override if needed.
3. In Resend, verify the `joyfuleffort.com` sending domain (SPF/DKIM DNS records).
4. In Turnstile, create a widget for `joyfuleffort.com` (and the `*.pages.dev` preview host).
5. Optional: add a Cloudflare WAF rate-limiting rule for `/api/*`.
