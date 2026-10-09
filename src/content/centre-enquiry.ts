/**
 * Centre enquiry form copy — verbatim from the Lotus enquiry page
 * (stage.joyfuleffort.com/centres/enquiry). The confirmation message is PROPOSED
 * (the stage page does not show one) and needs Paul's sign-off.
 */

export interface FormOption {
    value: string;
    label: string;
}

const selectAny = 'Optional · Select any that apply.';

export const centreEnquiry = {
    eyebrow: 'Lotus by Joyful Effort',
    heading: 'Interested in Lotus for your centre?',
    paragraphs: [
        'Lotus is being built by people who serve in Dharma centres and understand the day-to-day work of supporting a Dharma community. We’re bringing together event bookings, donations and administration to make that work easier.',
        'We’d love to hear about your centre, what’s working well and where you could use some support. Share a few details below and we’ll explore how Lotus could help.',
    ],
    fields: {
        centreName: { label: 'Centre name' },
        country: { label: 'Country' },
        websiteUrl: { label: 'Centre website' },
        contactName: { label: 'Your name' },
        role: { label: 'Your role' },
        email: { label: 'Your email address' },
        centreTypes: {
            label: 'How would you describe your centre?',
            hint: selectAny,
            options: [
                { value: 'non_residential', label: 'Non-residential Dharma centre' },
                { value: 'residential', label: 'Residential Dharma centre' },
                { value: 'retreat', label: 'Retreat centre' },
                { value: 'online', label: 'Online community or centre' },
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
            label: 'Which tools does your centre currently use?',
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
    submit: 'Send enquiry',
    confirmation: 'Thank you for getting in touch. Your enquiry has been sent.',
    behind: {
        heading: 'Who’s behind Lotus?',
        paragraphs: [
            'Lotus is a project of Joyful Effort, founded by Lauren Ross, a Dharma student and board member at a Buddhist centre in Santa Fe.',
            'The project brings together people with experience of serving Dharma communities, with support from Mindful Design, which helps Dharma centres with their digital work, and MetaProvide, our software development partner.',
        ],
    },
};
