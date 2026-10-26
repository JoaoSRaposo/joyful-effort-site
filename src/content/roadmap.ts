/**
 * Roadmap and feedback copy — from JE_Website_04_Roadmap_and_Feedback_Copy_v02. The feature-request
 * form has been retired (pilot feedback comes through the Joyma Seed feedback form), so its copy
 * and the hero's mention of it are no longer used.
 */

export const roadmap = {
    hero: {
        heading: 'Help shape the development of Joyma',
        paragraphs: [
            'We’re building Joyma with Dharma centers. This page brings together the current development priorities and what our partner centers are helping us test.',
            'The roadmap distinguishes features ready for pilot testing from work in development and ideas still being considered. Plans may change, improve and adapt as we learn more from participating centers.',
        ],
    },
    pilot: {
        heading: 'Ready for pilot testing',
        intro: 'The following features are ready for participating centers to explore in our test environment. Some processes still need support from the Joyful Effort team, and payments are not yet available.',
        items: [
            {
                heading: 'Center accounts and team access',
                text: 'Each center has its own space in Joyma, with roles and invitations for team members. Centers can register their interest through our sign-up page, and the Joyful Effort team handles setup.',
                illustration: 'volunteers',
            },
            {
                heading: 'Events and registration',
                text: 'Create individual events or recurring series, with sessions and booking options. For hybrid programs, participants can choose to attend in person or online for each session. Centers can accept registrations online, add participants manually and record attendance. Checks before publication help teams identify missing event information.',
                illustration: 'event-planning',
            },
            {
                heading: 'Finding centers and teachings',
                text: 'The discovery pages include event search and directories of centers and teachers, with filters to help people find what they are looking for. The interface supports French and English, including UK and US English.',
                illustration: 'laptop-admin',
            },
            {
                heading: 'Online courses through Moodle',
                text: 'Centers using Moodle can connect their existing learning platform to Joyma, bring their course catalog into Joyma and enroll participants. Participants can move from Joyma into Moodle without signing in again. Course access can be linked to membership benefits or granted directly by center staff.',
                illustration: 'teaching',
            },
            {
                heading: 'Membership management',
                text: 'Centers can create membership plans, define benefits and manage member records. Members can pause, resume, cancel or change their plan, and membership benefits can apply during event registration. Membership sign-up and payment are still awaiting the payments work.',
                illustration: 'generosity',
            },
            {
                heading: 'Event emails',
                text: 'Registration confirmations and event-change messages are available, with templates centers can edit.',
                illustration: 'communications',
            },
        ],
    },
    inDevelopment: {
        heading: 'In development',
        text: 'Coming soon',
    },
    underConsideration: {
        heading: 'Under consideration',
        text: 'Ideas we’re exploring with centers. These are not commitments to build or release a feature.',
    },
    recentProgress: {
        heading: 'Recent progress',
        text: 'Coming soon',
    },
};
