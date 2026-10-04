import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/illustrations/*.png', {
    eager: true,
});

export type IllustrationName =
    | 'laptop-admin'
    | 'event-planning'
    | 'prayer-book'
    | 'butter-lamp'
    | 'generosity'
    | 'volunteers'
    | 'teaching'
    | 'meditation'
    | 'communications'
    | 'hospitality';

/** Resolves an illustration by its name, ignoring the numeric file prefix. */
export function illustration(name: IllustrationName | (string & {})): ImageMetadata {
    const entry = Object.entries(files).find(([path]) => path.endsWith(`-${name}.png`));

    if (!entry) {
        throw new Error(`Unknown illustration: ${name}`);
    }

    return entry[1].default;
}
