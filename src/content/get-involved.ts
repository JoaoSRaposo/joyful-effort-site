/**
 * Get involved copy — originally from JE_Website_06_Get_Involved_Copy_v01.
 */
import { mailto, routes } from './site';

export const getInvolved = {
    hero: {
        heading: 'Support the work behind Joyma',
        paragraphs: [
            'Joyful Effort is developing technology in service of the Dharma. Our first project, Joyma, brings together tools for center teams and a shared network for discovering teachings.',
            'There are several ways to help: supporting the work financially, sharing your center’s experience or contributing relevant skills.',
        ],
    },
    financial: {
        heading: 'Financial support',
        paragraphs: [
            'Private individuals currently fund the project. Their support is helping us build Joyma around the needs of Dharma centers and the communities they serve.',
            'If you would like to help fund this work, we would welcome a conversation about the project and what your support could make possible.',
        ],
        links: [
            {
                label: 'Discuss supporting the project',
                href: mailto('Supporting the project'),
            },
        ],
    },
    sustainable: {
        heading: 'A sustainable service for centers',
        paragraphs: [
            'We want Joyma to remain affordable for centers while supporting the work needed to maintain and improve it. Financial support and fair, sustainable pricing both belong in the conversation about its future.',
        ],
        links: [{ label: 'Read about funding and costs', href: routes.fundingAndCosts }],
    },
    participationLabel: 'Participation and collaboration',
    ways: [
        {
            heading: 'Bring your center’s perspective',
            paragraphs: [
                'The people running centers understand the details that software needs to get right. Tell us how your program works, where administration takes time and what would make the greatest difference to your team.',
                'If your center is interested in Joyma, use the inquiry form to begin a conversation.',
            ],
            link: { label: 'Inquire about Joyma', href: routes.centerInquiry },
            illustration: 'meditation',
        },
        {
            heading: 'Contribute your skills',
            paragraphs: [
                'If you have experience you think could help the project, tell us about it and how you would like to contribute.',
            ],
            link: { label: 'Offer your skills', href: mailto('Offer your skills') },
            illustration: 'volunteers',
        },
        {
            heading: 'Explore a collaboration',
            paragraphs: [
                'We welcome conversations with organizations that share an interest in helping Dharma centers and their communities. Tell us about your work and where you see a useful connection.',
            ],
            link: { label: 'Contact Joyful Effort', href: mailto('Contact Joyful Effort') },
            illustration: 'communications',
        },
        {
            heading: 'Share an idea for Joyma',
            paragraphs: [
                'If you have a suggestion for how Joyma could work better for a center, tell us about the need through our general inquiry form.',
            ],
            link: { label: 'Share an idea', href: routes.inquire },
            illustration: 'prayer-book',
        },
    ],
};
