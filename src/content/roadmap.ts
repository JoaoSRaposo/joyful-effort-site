/**
 * Roadmap and feedback copy — verbatim from JE_Website_04_Roadmap_and_Feedback_Copy_v02.
 */

export const roadmap = {
    hero: {
        heading: 'Help shape the development of Lotus',
        paragraphs: [
            'We’re building Lotus with Dharma centres. This page brings together the current development priorities and a place to tell us what would make the platform more useful for your team.',
            'The roadmap distinguishes features ready for pilot testing from work in development and ideas still being considered. Plans may change, improve and adapt as we learn more from participating centres.',
        ],
    },
    pilot: {
        heading: 'Ready for pilot testing',
        intro: 'The following features are ready for participating centres to explore in our test environment. Some processes still need support from the Joyful Effort team, and payments are not yet available.',
        items: [
            {
                heading: 'Centre accounts and team access',
                text: 'Each centre has its own space in Lotus, with roles and invitations for team members. Centres can register their interest through our sign-up page, and the Joyful Effort team handles setup.',
                illustration: 'volunteers',
            },
            {
                heading: 'Events and registration',
                text: 'Create individual events or recurring series, with sessions and booking options. For hybrid programmes, participants can choose to attend in person or online for each session. Centres can accept registrations online, add participants manually and record attendance. Checks before publication help teams identify missing event information.',
                illustration: 'event-planning',
            },
            {
                heading: 'Finding centres and teachings',
                text: 'The discovery pages include event search and directories of centres and teachers, with filters to help people find what they are looking for. The interface supports French and English, including UK and US English.',
                illustration: 'laptop-admin',
            },
            {
                heading: 'Online courses through Moodle',
                text: 'Centres using Moodle can connect their existing learning platform to Lotus, bring their course catalogue into Lotus and enrol participants. Participants can move from Lotus into Moodle without signing in again. Course access can be linked to membership benefits or granted directly by centre staff.',
                illustration: 'teaching',
            },
            {
                heading: 'Membership management',
                text: 'Centres can create membership plans, define benefits and manage member records. Members can pause, resume, cancel or change their plan, and membership benefits can apply during event registration. Membership sign-up and payment are still awaiting the payments work.',
                illustration: 'generosity',
            },
            {
                heading: 'Event emails',
                text: 'Registration confirmations and event-change messages are available, with templates centres can edit.',
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
        text: 'Ideas we’re exploring with centres. These are not commitments to build or release a feature.',
    },
    recentProgress: {
        heading: 'Recent progress',
        text: 'Coming soon',
    },
    form: {
        label: 'Feature request form',
        heading: 'What would help your centre?',
        paragraphs: [
            'Tell us about the task you’re trying to complete and where you run into difficulty. You don’t need to have a technical solution in mind.',
            'Please avoid including student records, payment information or other personal details in your request.',
        ],
        fields: {
            nameAndEmail: {
                label: 'Your name and email',
                hint: 'So we can contact you if we need to understand your request better.',
            },
            organisation: {
                label: 'Centre or organisation',
                hint: 'The centre you work with and your role there.',
            },
            task: {
                label: 'What are you trying to do?',
                hint: 'Describe the task and who needs to complete it.',
            },
            difficulty: {
                label: 'What makes this difficult today?',
                hint: 'Tell us how you handle it now, how often it comes up and the effect it has on your team.',
            },
            improvement: {
                label: 'What would a useful improvement look like?',
                hint: 'Share any ideas you have. It’s fine to describe the outcome you need without suggesting a feature.',
            },
        },
        submit: 'Submit a feature request',
        confirmation:
            'Thank you for sharing your centre’s experience. Your request has been submitted.',
    },
    howFeedbackInforms: {
        heading: 'How feedback informs the roadmap',
        text: 'Requests help us understand the needs of centres and identify where changes could be useful. Submitting a request does not guarantee that we will develop it.',
    },
};
