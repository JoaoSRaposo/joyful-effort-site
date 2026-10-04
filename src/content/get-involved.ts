/**
 * Get involved copy — verbatim from JE_Website_06_Get_Involved_Copy_v01.
 */
import { mailto, routes } from './site';

export const getInvolved = {
    hero: {
        heading: 'Support the work behind Lotus',
        paragraphs: [
            'Joyful Effort is developing technology in service of the Dharma. Our first project, Lotus, brings together tools for centre teams and a shared network for discovering teachings.',
            'There are several ways to help: supporting the work financially, sharing your centre’s experience or contributing relevant skills.',
        ],
    },
    financial: {
        heading: 'Financial support',
        paragraphs: [
            'Private individuals currently fund the project. Their support is helping us build Lotus around the needs of Dharma centres and the communities they serve.',
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
        heading: 'A sustainable service for centres',
        paragraphs: [
            'We want Lotus to remain affordable for centres while supporting the work needed to maintain and improve it. Financial support and fair, sustainable pricing both belong in the conversation about its future.',
        ],
        links: [{ label: 'Read about funding and costs', href: routes.fundingAndCosts }],
    },
    participationLabel: 'Participation and collaboration',
    ways: [
        {
            heading: 'Bring your centre’s perspective',
            paragraphs: [
                'The people running centres understand the details that software needs to get right. Tell us how your programme works, where administration takes time and what would make the greatest difference to your team.',
                'If your centre is interested in Lotus, use the enquiry form to begin a conversation.',
            ],
            link: { label: 'Enquire about Lotus', href: routes.enquire },
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
                'We welcome conversations with organisations that share an interest in helping Dharma centres and their communities. Tell us about your work and where you see a useful connection.',
            ],
            link: { label: 'Contact Joyful Effort', href: mailto('Contact Joyful Effort') },
            illustration: 'communications',
        },
        {
            heading: 'Share an idea for Lotus',
            paragraphs: [
                'If your suggestion is about how Lotus could work better for a centre, our feature-request form is the best place to describe the need.',
            ],
            link: { label: 'Share a feature request', href: routes.featureRequest },
            illustration: 'prayer-book',
        },
    ],
};
