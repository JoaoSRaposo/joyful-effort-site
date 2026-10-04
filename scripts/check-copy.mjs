/**
 * Verifies that the website copy in the source documents appears verbatim on the built pages.
 *
 * Usage: pnpm build && pnpm copy:check [path-to-copy-docs]
 *
 * Document headers, bracketed "input needed" notes, link/button labels and the Trust Centre
 * document (intentionally "Coming soon") are skipped. Every other heading and paragraph must
 * appear in the rendered text of its page.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const docsDirectory =
    process.argv[2] ?? '../lotus/.serena/memories/docs/Knowledge/marketing/joyful-effort-website';

const documents = {
    JE_Website_01_Homepage: ['index.html'],
    JE_Website_02_About: ['about.html'],
    JE_Website_02_Project_Lotus: ['project-lotus.html'],
    JE_Website_04_Roadmap_and_Feedback: ['roadmap.html'],
    JE_Website_06_Get_Involved: ['get-involved.html'],
    JE_Website_08_FAQ: ['project-lotus.html'],
    JE_Website_09_Footer: ['index.html'],
};

/** Source lines that are document scaffolding or superseded content, not website copy. */
const skippedLines = [
    /^Version \d/,
    /^Website copy/,
    /^For team feedback/,
    /^Please add comments/,
    /^Navigation:/,
    /^Primary button:/,
    /^Link( \/ button)?:/,
    /^The following notes guide implementation/,
    /^Suggested (label|labels|display)/,
    /^Use (Company|one consistent footer)/,
    /^(Joyful Effort (homepage copy|website footer)|About Joyful Effort|Project Lotus|Roadmap and feedback|Get involved|Lotus frequently asked questions)$/,
];

/** Footer doc sections after this heading are implementation notes. */
const footerNotesHeading = 'Placement and additional links';

/** Project Lotus short-FAQ entries replaced by the expanded FAQ document. */
const supersededHeadings = [
    'Is Lotus right for our centre?',
    'Can we start using Lotus now?',
    'Can we keep our current website and systems?',
    'How will our information be handled?',
    'What if we need something Lotus does not yet offer?',
];

/** Labels for document structure or confirmation states rather than page text. */
const nonPageText = [
    'Confirmation message',
    'Thank you for sharing your centre’s experience. Your request has been submitted.',
    'Brand introduction',
    'Company details',
];

/**
 * Deliberate omissions, reported but not failed: the footer document says to include these
 * links only once the approved pages exist.
 */
const knownOmissions = ['Trust Centre Privacy notice Terms and Conditions'];

function normalise(text) {
    return text
        .replace(/[*_]/g, '')
        .replace(/\s+([,.;:!?])/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
}

function htmlToText(html) {
    return normalise(
        html
            .replace(/<script[\s\S]*?<\/script>/g, ' ')
            .replace(/<style[\s\S]*?<\/style>/g, ' ')
            .replace(/<[^>]+>/g, ' ')
            .replaceAll('&amp;', '&')
            .replaceAll('&#39;', "'")
            .replaceAll('&quot;', '"')
            .replaceAll('&lt;', '<')
            .replaceAll('&gt;', '>'),
    );
}

function copyLines(markdown, isFooter) {
    const lines = [];
    let skippingSection = false;
    let inFooterNotes = false;

    for (const rawLine of markdown.split('\n')) {
        let line = normalise(rawLine.replace(/^#+\s*/, ''));

        if (line === '' || /^\[.*\]$/.test(line) || line.startsWith('[')) {
            continue;
        }

        line = line.replace(/\s*\[[^\]]*\]\s*$/, '').replace(/\s*Link \/ button:.*$/, '');

        if (isFooter && line === footerNotesHeading) {
            inFooterNotes = true;
        }

        if (inFooterNotes) {
            continue;
        }

        if (/^#/.test(rawLine.trim())) {
            skippingSection = supersededHeadings.includes(line);
        }

        if (skippingSection || skippedLines.some((pattern) => pattern.test(line))) {
            continue;
        }

        lines.push(line);
    }

    return lines;
}

if (!existsSync(docsDirectory)) {
    console.error(`Copy documents not found at ${docsDirectory}`);
    process.exit(1);
}

const files = readdirSync(docsDirectory);
let failures = 0;
let checked = 0;

for (const [prefix, pages] of Object.entries(documents)) {
    const file = files.find((name) => name.startsWith(prefix) && name.endsWith('.md'));

    if (!file) {
        console.error(`Missing source document for ${prefix}`);
        failures++;
        continue;
    }

    const pageText = pages
        .map((page) => htmlToText(readFileSync(join('dist', page), 'utf8')))
        .join(' ');
    const markdown = readFileSync(join(docsDirectory, file), 'utf8');

    for (const line of copyLines(markdown, prefix.endsWith('Footer'))) {
        if (nonPageText.includes(line)) {
            continue;
        }

        if (knownOmissions.includes(line)) {
            console.log(`• [${file}] Intentionally omitted until pages exist: ${line}`);
            continue;
        }

        checked++;

        // The footer brand name renders as the logo artwork; the footer contact group's email
        // and the copyright heading are rendered as separate elements.
        const candidates = [line, line.replace(/ hello@joyfuleffort\.com$/, '')];
        const groupedLinks = line.split(/(?<=[a-z]) (?=[A-Z])/);

        const found =
            candidates.some((candidate) => pageText.includes(candidate)) ||
            (groupedLinks.length > 1 && groupedLinks.every((part) => pageText.includes(part)));

        if (!found) {
            failures++;
            console.log(`✗ [${file}] ${line}`);
        }
    }
}

console.log(
    `\nChecked ${checked} lines of copy: ${failures === 0 ? 'all present' : `${failures} missing`}.`,
);
process.exit(failures === 0 ? 0 : 1);
