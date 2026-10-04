/**
 * Project Lotus page copy — verbatim from JE_Website_02_Project_Lotus_Copy_v01,
 * with the expanded FAQ from JE_Website_08_FAQ_Copy_v01 replacing the short
 * "Questions from centres" list (as the FAQ document instructs).
 */
import { routes } from './site';

export const projectLotus = {
    hero: {
        heading: 'Built around the work of Dharma centres',
        paragraphs: [
            'Lotus is our first project: a platform that brings centre administration together with a shared network for discovering teachings and events.',
            'We’re developing it with Dharma centres to make everyday administration easier, support continuity across teams and help more people find what centers offer.',
            'We’re currently working with our ‘Lotus Seed’ partners; centers who are helping us develop the project based on their communities needs. If you and your center are interested in becoming a Lotus development partner, we’d love to hear from you.',
        ],
        links: [
            { label: 'Enquire about Lotus', href: routes.enquire },
            { label: 'View the roadmap', href: routes.roadmap },
        ],
    },
    onePlatform: {
        heading: 'One platform for your programme',
        paragraphs: [
            'A centre’s activities rarely fit neatly into a standard booking system. A retreat may involve accommodation and meals. A programme may include memberships, donations and requests for prayers or pujas.',
            'Lotus is being developed around these connected needs, with an administration system designed to be straightforward for centre teams to use.',
        ],
        features: [
            {
                heading: 'Events and registrations',
                text: 'Bring the organisation of teachings, courses and retreats together with the way people register to attend.',
                illustration: 'event-planning',
            },
            {
                heading: 'Donations and memberships',
                text: 'Support the ways your community contributes to the centre, with tools for donations and memberships.',
                illustration: 'generosity',
            },
            {
                heading: 'Meals and accommodation',
                text: 'Include the practical arrangements that help people participate in retreats and residential programmes.',
                illustration: 'hospitality',
            },
            {
                heading: 'Prayer and puja requests',
                text: 'Make space for the requests that are part of the life of a Dharma centre.',
                illustration: 'prayer-book',
            },
        ],
    },
    discoveryLabel: 'Discovery and adoption',
    discovery: {
        heading: 'Help people discover your centre',
        paragraphs: [
            'Alongside the tools for centre teams, we’re building a shared discovery network. People will be able to explore and filter offerings across participating centres to find teachings, events and communities that support their practice.',
            'For your centre, this creates another route for people to discover your programme and take part.',
        ],
    },
    teamwork: {
        heading: 'Make teamwork easier',
        paragraphs: [
            'Centre teams change, and knowledge needs to carry across those changes. Lotus is being designed with an intuitive administration experience and easy access to data, helping staff and volunteers share the work.',
        ],
    },
    inPractice: {
        heading: 'See Lotus in practice',
        paragraphs: [
            'Take a look at how Lotus is being developed for centre teams and the people exploring their programmes.',
        ],
        comingSoon: 'Coming soon!',
    },
    gettingStarted: {
        heading: 'Getting started',
        paragraphs: [
            'Tell us about your centre, your programme and the systems you use. This gives us a starting point for discussing how Lotus can fit your needs.',
        ],
        links: [{ label: 'Enquire about Lotus', href: routes.enquire }],
    },
    costsLabel: 'Costs and centre questions',
    costs: {
        heading: 'Affordable for centres and sustainable for the future',
        paragraphs: [
            'Private individuals currently fund the development of Lotus. Our aim is fair, sustainable pricing that centres can afford and that supports the ongoing work of maintaining and improving the platform.',
            'We know choosing software is a long-term decision. Centres need to understand both the costs involved and how the service will be supported over time.',
        ],
    },
    faq: {
        heading: 'Questions from centres',
        intro: 'Find answers to common questions about Lotus, getting started and the ongoing support your centre may need.',
        groups: [
            {
                label: null,
                items: [
                    {
                        question: 'Who is Lotus for?',
                        answer: [
                            'Lotus is being developed for Dharma centres and related organisations that hold teachings, courses, retreats and communities together. It combines tools for centre teams with a shared network for discovering what centres offer.',
                        ],
                        links: [],
                    },
                    {
                        question: 'Can our centre start using it now?',
                        answer: [
                            'Project Lotus is currently in the build and development phase, we’re due to launch in (date) and the software will be ready to use from day one.',
                        ],
                        links: [{ label: 'Enquire about Lotus', href: routes.enquire }],
                    },
                    {
                        question: 'What does Lotus cost and what is included?',
                        answer: [
                            'Our aim is fair, sustainable pricing that centres can afford and that supports the work of maintaining and improving Lotus.',
                        ],
                        links: [],
                    },
                    {
                        question: 'How is Lotus funded and supported long term?',
                        answer: [
                            'Private individuals currently fund the project. Their support is helping us develop Lotus around the needs of Dharma centres. Long-term sustainability is part of our approach to pricing and ongoing development.',
                        ],
                        links: [{ label: 'Funding and costs', href: routes.fundingAndCosts }],
                    },
                    {
                        question: 'Can we keep our existing website and tools?',
                        answer: [
                            'Yes, we’re desigining Lotus to be a piece of software that can easily intergrate with your current website. As for your existing tools, Lotus is designed as an all-in-platform and should meet the needs of your current tech stack in one piece of software – anything we haven’t covered? Drop us a line, let us know and we can add features and ideas to our roadmap.',
                        ],
                        links: [],
                    },
                    {
                        question: 'How do we move our information across?',
                        answer: [
                            'Our data import service seamless allows for uploads of data. If you need to take things a bit slower and and prefer a stepby-step approach, we can provide support during your center on-boarding with Lotus.',
                        ],
                        links: [],
                    },
                ],
            },
            {
                label: 'Support donations and data',
                items: [
                    {
                        question: 'What training and ongoing support will we receive?',
                        answer: [
                            'We’re creating a full supported onboarding service for all centres that work with lotus, dedicated time, bespoke to your centres need and human focused. If you need us for bug fixes, feature suggestions, support or anything else, simply drop us and email – we’d love to hear from you.',
                        ],
                        links: [],
                    },
                    {
                        question: 'How are donations handled and who receives the money?',
                        answer: [
                            'Lotus is designed for centres offering teachings and events on a donation basis. Donations support the receiving centre or organisation. Full details can be found on the Joyful Effort Trust centre page.',
                        ],
                        links: [{ label: 'Donations and transparency', href: routes.trustCentre }],
                    },
                    {
                        question: 'Who controls our data and can we export it?',
                        answer: [
                            'Easy access to centre data is a core part of the design of Lotus. Data sovereignty and compliance is at the heart of our design, we know how much this means to centres and students alike – full details of how data is managed, shared and processed can be found at our trust centre.',
                        ],
                        links: [{ label: 'Privacy and data', href: routes.trustCentre }],
                    },
                    {
                        question: 'How can we request a feature?',
                        answer: [
                            'Tell us what your team is trying to do, how you manage it today and what would make it easier. You don’t need a technical solution in mind. Requests help us understand centre needs and inform development priorities, although submitting a request does not guarantee it will be developed.',
                        ],
                        links: [
                            { label: 'Share a feature request', href: routes.featureRequest },
                            { label: 'View the roadmap', href: routes.roadmap },
                        ],
                    },
                ],
            },
        ],
        stillHaveAQuestion: {
            heading: 'Still have a question?',
            text: 'Tell us about your centre and what you would like to understand. We’d be glad to hear from you.',
            link: { label: 'Enquire about Lotus', href: routes.enquire },
        },
    },
};
