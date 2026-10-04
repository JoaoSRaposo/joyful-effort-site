import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://joyfuleffort.com',
    output: 'static',
    trailingSlash: 'never',
    build: {
        format: 'file',
    },
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
        build: {
            // Keep scripts as external files so the Content-Security-Policy needs no inline allowance.
            assetsInlineLimit: 0,
        },
    },
});
