/**
 * About page copy — verbatim from JE_Website_02_About_Copy_v01.
 */
import { mailto, routes } from './site';

export const about = {
    hero: {
        heading: 'Technology in service of the Dharma',
        paragraphs: [
            'Joyful Effort works with Dharma centers to develop technology that supports their work and the communities they serve. Our first project, Joyma, brings center administration and the discovery of teachings into one platform.',
            'Our purpose is to support the flourishing of the Dharma and, through that work, to be of benefit to all sentient beings.',
        ],
    },
    whyWeAreHere: {
        heading: 'Why we are here',
        paragraphs: [
            'Dharma centers bring people together for teachings, retreats and practice. Behind every program are teams managing registrations, answering questions and keeping the center running.',
            'Much of that work depends on software built for other industries. Disconnected systems create extra administration, and essential knowledge can become concentrated in one person. Meanwhile, people looking for teachings have no central place to explore the wealth of offerings available.',
            'We’re developing Joyma with these needs in mind. We want technology to make the work of centers easier and help people find the teachings and communities that support their practice.',
        ],
    },
    firstProject: {
        heading: 'Our first project',
        paragraphs: [
            'Joyma combines tools for center teams with a shared discovery network. Our ambition is a digital experience that reflects the care and quality of the teachings it helps people access.',
        ],
        links: [{ label: 'Explore Joyma', href: routes.projectJoyma }],
    },
    howWeWork: {
        heading: 'How we work',
        paragraphs: [
            'We collaborate with Dharma centers to understand the work they do and the challenges they encounter. Their experience helps shape what we build and how it works.',
            'Dharma comes first. Serving centers and their communities guides the project, alongside fair and sustainable pricing and a willingness to explain our decisions and listen to scrutiny.',
        ],
    },
    peopleLabel: 'The people and organization',
    team: {
        heading: 'Meet the team',
        paragraphs: [
            'Joyful Effort brings together Mindful Design and Meta Provide in collaboration with Dharma centers. Full team profiles are coming soon.',
        ],
    },
    centers: {
        heading: 'Centers helping shape Joyma',
        paragraphs: [
            'The perspective of center teams is central to Joyma. Understanding how programs work in practice helps us build tools that are useful in everyday center life. Jamyang Buddhist Center London, Shantideva New York, The Buddhist Center, Santa Fe, Institut Vajra Yogini France and Chandrakirti Meditation Center, New Zealand are currently supporting the project.',
        ],
    },
    funding: {
        heading: 'Funding and independence',
        paragraphs: [
            'Private individuals currently fund the project. Their support is helping us develop Joyma around the needs of Dharma centers.',
            'Our aim is to keep the software affordable while supporting the ongoing work of maintaining and improving it. The funding model and the costs to centers are an important part of that conversation.',
        ],
        links: [
            { label: 'Funding and costs', href: routes.fundingAndCosts },
            { label: 'Get involved', href: routes.getInvolved },
        ],
    },
    talkToUs: {
        heading: 'Talk to us',
        paragraphs: [
            'If you represent a Dharma center, would like to collaborate, or have a question about Joyful Effort, we’d be glad to hear from you.',
        ],
        links: [
            { label: 'Inquire about Joyma', href: routes.inquire },
            { label: 'Contact Joyful Effort', href: mailto('Contact Joyful Effort') },
        ],
    },
};
