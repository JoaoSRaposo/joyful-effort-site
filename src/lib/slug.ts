/** Builds a stable fragment id from a heading, e.g. "Meet the team" → "meet-the-team". */
export function slug(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[’'‘]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
