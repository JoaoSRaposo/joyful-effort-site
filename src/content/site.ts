/**
 * Shared site copy: navigation, footer and link destinations.
 * Copy source: JE_Website_01_Homepage_Copy_v01 (navigation) and JE_Website_09_Footer_Copy_v01.
 */

export interface SiteLink {
    label: string;
    href: string;
}

export const contactEmail = 'hello@joyfuleffort.com';

export function mailto(subject: string): string {
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

/** Link destinations used across pages, so every label points to one place. */
export const routes = {
    home: '/',
    about: '/about',
    team: '/about#meet-the-team',
    projectLotus: '/project-lotus',
    fundingAndCosts: '/project-lotus#funding-and-costs',
    faq: '/project-lotus#faq',
    roadmap: '/roadmap',
    featureRequest: '/roadmap#feature-request',
    trustCentre: '/trust-centre',
    getInvolved: '/get-involved',
    enquire: '/enquire',
} as const;

export const primaryNavigation: SiteLink[] = [
    { label: 'About', href: routes.about },
    { label: 'Project Lotus', href: routes.projectLotus },
    { label: 'Trust Centre', href: routes.trustCentre },
    { label: 'Get Involved', href: routes.getInvolved },
];

export const primaryButton: SiteLink = { label: 'Enquire about Lotus', href: routes.enquire };

export const footer = {
    brandName: 'JOYFUL EFFORT',
    tagline: 'Technology in service of the Dharma.',
    introduction:
        'Our first project, Lotus, supports the work of Dharma centres and helps people discover teachings and communities.',
    groups: [
        {
            heading: 'Company',
            links: [
                { label: 'About Joyful Effort', href: routes.about },
                { label: 'Meet the team', href: routes.team },
                { label: 'Get involved', href: routes.getInvolved },
            ],
        },
        {
            heading: 'Project Lotus',
            links: [
                { label: 'Explore Lotus', href: routes.projectLotus },
                { label: 'Funding and costs', href: routes.fundingAndCosts },
                { label: 'Roadmap and feedback', href: routes.roadmap },
                { label: 'Frequently asked questions', href: routes.faq },
                { label: 'Enquire about Lotus', href: routes.enquire },
            ],
        },
        {
            heading: 'Trust and information',
            // Privacy notice and Terms and Conditions are added once the approved pages exist.
            links: [{ label: 'Trust Centre', href: routes.trustCentre }],
        },
    ] satisfies { heading: string; links: SiteLink[] }[],
    contact: {
        heading: 'Contact',
        text: 'Have a question about Joyful Effort or a possible collaboration? Get in touch.',
        email: contactEmail,
    },
    copyright: '© 2026 Joyful Effort, LLC. All rights reserved.',
    registration: 'Joyful Effort, LLC is registered in Virginia, United States.',
    entityNumber: 'Virginia entity number: 12027020',
};
