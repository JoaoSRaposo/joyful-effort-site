/**
 * Homepage copy — verbatim from JE_Website_01_Homepage_Copy_v01.
 * Paragraphs may contain inline <strong> markup from the source document.
 */
import { joymaSite, routes } from './site';

export const home = {
    hero: {
        heading: 'Technology in service of the Dharma',
        paragraphs: [
            'Joyful Effort works with Dharma centres to build technology that supports their work.',
            'Our first project, <strong>Joyma</strong>, brings centre administration and the discovery of teachings into one platform. We’re developing it to make everyday tasks easier for centre teams and help more people find the teachings and communities that support their practice.',
        ],
        links: [
            { label: 'Explore Project Joyma', href: routes.projectJoyma },
            { label: 'Enquire about Joyma', href: routes.enquire },
        ],
    },
    moreTime: {
        heading: 'More time for the work that matters',
        paragraphs: [
            'Running a Dharma centre takes care, dedication and a great deal of administration. Teams often work across disconnected systems, adapting software designed for other industries. Essential knowledge can sit with just one person, making handovers difficult and leaving others unsure where to start.',
            'We’re building Joyma around the needs of the people doing this work, with the aim of reducing repetitive tasks and making it easier to share responsibility.',
        ],
    },
    introducingJoyma: {
        heading: 'Introducing Project Joyma',
        paragraphs: [
            'Joyma brings together the tools centres need to organise their programmes and support their communities, alongside a shared network where people can discover what centres offer.',
        ],
        features: [
            {
                heading: 'Manage your centre’s activities',
                text: 'We’re developing tools for event registration, donations and memberships, alongside meals, accommodation and prayer or puja requests.',
                illustration: 'event-planning',
            },
            {
                heading: 'Make your offerings easier to find',
                text: 'The discovery network will help people explore and filter events and teachings across participating centres, creating more opportunities to connect with your programme.',
                illustration: 'laptop-admin',
            },
            {
                heading: 'Help your team work together',
                text: 'An accessible administration system and easy access to your data are central to the design, helping staff and volunteers work with greater continuity.',
                illustration: 'volunteers',
            },
        ],
        links: [
            { label: 'Explore Joyma and its roadmap', href: routes.projectJoyma },
            { label: 'Visit joyma.co', href: joymaSite },
        ],
    },
    builtWithCentres: {
        heading: 'Built with Dharma centres',
        paragraphs: [
            'Joyful Effort brings together Mindful Design and Meta Provide in collaboration with Dharma centres.',
            'Our approach starts with the people who hold programmes and communities together. Their experience helps us understand what needs to work, where existing tools fall short and which improvements would make the greatest difference.',
            'Our purpose is to support the flourishing of the Dharma and, through that work, to be of benefit to all sentient beings.',
        ],
        links: [
            { label: 'Meet the team', href: routes.team },
            { label: 'Share your centre’s needs', href: routes.enquire },
        ],
    },
    sustainable: {
        heading: 'Affordable for centres. Sustainable for the future.',
        paragraphs: [
            'Private individuals currently fund the project. This support is helping us develop Joyma with the needs of Dharma centres at its heart.',
            'Our aim is fair, sustainable pricing that centres can afford and that supports the ongoing work of maintaining and improving the platform. We know centres need clarity about costs and continuity before choosing software they will rely on.',
        ],
        links: [{ label: 'Find out about funding and costs', href: routes.fundingAndCosts }],
    },
    trust: {
        heading: 'Our approach to trust',
        paragraphs: [
            'Choosing software means entrusting it with part of your centre’s everyday work and the information your community shares with you.',
            'Our Trust Centre will explain our approach to privacy, security and reliable service, with supporting information to help your team assess Joyma and ask informed questions.',
        ],
        links: [{ label: 'Our approach to trust', href: routes.trustCentre }],
    },
    shapeWhatsNext: {
        heading: 'Help shape what comes next',
        enquiry: {
            text: 'We welcome conversations with centres interested in Joyma. Tell us about your programme, the systems you use and what you would like to make easier for your team.',
            link: { label: 'Enquire about Joyma', href: routes.enquire },
        },
        support: {
            text: 'If you would like to support the project financially or contribute your experience and skills, we would also be glad to hear from you.',
            link: { label: 'Get involved', href: routes.getInvolved },
        },
    },
};
