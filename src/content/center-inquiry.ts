/**
 * Center inquiry form copy — verbatim from the Joyma inquiry page
 * (stage.joyfuleffort.com/centers/inquiry). The confirmation message is PROPOSED
 * (the stage page does not show one) and needs Paul's sign-off.
 */

export interface FormOption {
    value: string;
    label: string;
}

const selectAny = 'Optional · Select any that apply.';

export const centerInquiry = {
    eyebrow: 'Joyma by Joyful Effort',
    heading: 'Interested in Joyma for your center?',
    paragraphs: [
        'Joyma is being built by people who serve in Dharma centers and understand the day-to-day work of supporting a Dharma community. We’re bringing together event bookings, donations and administration to make that work easier.',
        'We’d love to hear about your center, what’s working well and where you could use some support. Share a few details below and we’ll explore how Joyma could help.',
    ],
    fields: {
        centerName: { label: 'Center name' },
        country: { label: 'Country' },
        websiteUrl: { label: 'Center website' },
        contactName: { label: 'Your name' },
        role: { label: 'Your role' },
        email: { label: 'Your email address' },
        centerTypes: {
            label: 'How would you describe your center?',
            hint: selectAny,
            options: [
                { value: 'non_residential', label: 'Non-residential Dharma center' },
                { value: 'residential', label: 'Residential Dharma center' },
                { value: 'retreat', label: 'Retreat center' },
                { value: 'online', label: 'Online community or center' },
                { value: 'other', label: 'Other — please describe' },
            ] satisfies FormOption[],
        },
        areasOfInterest: {
            label: 'What would you like help with?',
            hint: selectAny,
            options: [
                { value: 'events_bookings', label: 'Events and bookings' },
                { value: 'donations_memberships', label: 'Donations and memberships' },
                { value: 'accommodation_meals', label: 'Accommodation and meals' },
                { value: 'volunteers_residents', label: 'Volunteers and residents' },
                { value: 'payments_financial_records', label: 'Payments and financial records' },
                { value: 'something_else', label: 'Something else' },
                { value: 'not_sure', label: 'I’m not sure yet' },
            ] satisfies FormOption[],
        },
        currentTools: {
            label: 'Which tools does your center currently use?',
            hint: selectAny,
            options: [
                { value: 'google_workspace', label: 'Google Workspace' },
                { value: 'microsoft_365', label: 'Microsoft 365' },
                { value: 'woocommerce', label: 'WooCommerce' },
                { value: 'the_events_calendar', label: 'The Events Calendar (WordPress plugin)' },
                { value: 'retreat_guru', label: 'Retreat Guru' },
                { value: 'eventbrite', label: 'Eventbrite' },
                { value: 'other', label: 'Other tools or WordPress plugins' },
                { value: 'none', label: 'None at the moment' },
                { value: 'not_sure', label: 'I’m not sure' },
            ] satisfies FormOption[],
        },
        message: {
            label: 'What would you like to ask or tell us?',
            placeholder: 'Tell us what you’d like to make easier, or ask us a question.',
        },
    },
    closing: [
        'We’ll email you within a few working days to answer your questions. If you’d like, we can also arrange a short call.',
        'There’s no obligation to join—let’s connect and start a conversation.',
    ],
    /** Points people who are not inquiring for a center to the general inquiry form. */
    generalPointer: {
        text: 'Not writing on behalf of a center? Send us a general question instead.',
        label: 'Ask a general question',
    },
    submit: 'Send inquiry',
    confirmation: 'Thank you for getting in touch. Your inquiry has been sent.',
    behind: {
        heading: 'Who’s behind Joyma?',
        paragraphs: [
            'Joyma is a project of Joyful Effort, founded by Lauren Ross, a Dharma student and board member at a Buddhist center in Santa Fe.',
            'The project brings together people with experience of serving Dharma communities, with support from Mindful Design, which helps Dharma centers with their digital work, and MetaProvide, our software development partner.',
        ],
    },
};
