/**
 * Shared site copy: navigation, footer and link destinations.
 * Copy source: JE_Website_01_Homepage_Copy_v01 (navigation) and JE_Website_09_Footer_Copy_v01.
 */

export interface SiteLink {
    label: string;
    href: string;
    /** Sub-pages shown in a dropdown under this navigation item. */
    children?: SiteLink[];
}

export const contactEmail = 'hello@joyfuleffort.com';

/** Joyma's own website. */
export const joymaSite = 'https://joyma.co';

export function mailto(subject: string): string {
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

/** Link destinations used across pages, so every label points to one place. */
export const routes = {
    home: '/',
    about: '/about',
    team: '/about#meet-the-team',
    projectJoyma: '/project-joyma',
    fundingAndCosts: '/project-joyma#funding-and-costs',
    faq: '/project-joyma#faq',
    roadmap: '/roadmap',
    trustCenter: '/trust-center',
    getInvolved: '/get-involved',
    centerInquiry: '/get-involved/center-inquiry',
    inquire: '/inquire',
} as const;

export const primaryNavigation: SiteLink[] = [
    { label: 'About', href: routes.about },
    { label: 'Joyma', href: routes.projectJoyma },
    { label: 'Roadmap', href: routes.roadmap },
    { label: 'Trust Center', href: routes.trustCenter },
    {
        label: 'Get Involved',
        href: routes.getInvolved,
        // PROPOSED sub-menu labels — need Paul's sign-off.
        children: [
            { label: 'Ways to get involved', href: routes.getInvolved },
            { label: 'Center inquiry form', href: routes.centerInquiry },
            { label: 'General inquiry', href: routes.inquire },
        ],
    },
];

export const primaryButton: SiteLink = { label: 'Inquire about Joyma', href: routes.centerInquiry };

export const footer = {
    brandName: 'JOYFUL EFFORT',
    tagline: 'Technology in service of the Dharma.',
    introduction:
        'Our first project, Joyma, supports the work of Dharma centers and helps people discover teachings and communities.',
    groups: [
        {
            heading: 'Company',
            links: [
                { label: 'About Joyful Effort', href: routes.about },
                { label: 'Meet the team', href: routes.team },
                { label: 'Get involved', href: routes.getInvolved },
                { label: 'General inquiry', href: routes.inquire },
            ],
        },
        {
            heading: 'Joyma',
            links: [
                { label: 'Explore Joyma', href: routes.projectJoyma },
                { label: 'Funding and costs', href: routes.fundingAndCosts },
                { label: 'Roadmap and feedback', href: routes.roadmap },
                { label: 'Frequently asked questions', href: routes.faq },
                { label: 'Inquire about Joyma', href: routes.centerInquiry },
                { label: 'Visit joyma.co', href: joymaSite },
            ],
        },
        {
            heading: 'Trust and information',
            // Privacy notice and Terms and Conditions are added once the approved pages exist.
            links: [{ label: 'Trust Center', href: routes.trustCenter }],
        },
    ] satisfies { heading: string; links: SiteLink[] }[],
    contact: {
        heading: 'Contact',
        text: 'Have a question about Joyful Effort or a possible collaboration? Get in touch.',
        email: contactEmail,
    },
    copyright: '© 2026 Joyful Effort, LLC. All rights reserved.',
};
