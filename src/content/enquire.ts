/**
 * Enquiry form copy.
 * PROPOSED — no enquiry-form document has been supplied yet. The intro reuses approved copy
 * from Project Lotus ("Getting started") and the Homepage ("Help shape what comes next");
 * field labels and the confirmation message need Paul's sign-off.
 */
export const enquire = {
    heading: 'Enquire about Lotus',
    paragraphs: [
        'Tell us about your centre, your programme and the systems you use. This gives us a starting point for discussing how Lotus can fit your needs.',
    ],
    fields: {
        name: { label: 'Your name' },
        email: { label: 'Email' },
        organisation: {
            label: 'Centre or organisation',
            hint: 'The centre you work with and your role there.',
        },
        message: {
            label: 'Tell us about your centre',
            hint: 'Tell us about your programme, the systems you use and what you would like to make easier for your team.',
        },
    },
    submit: 'Enquire about Lotus',
    confirmation: 'Thank you for getting in touch. Your enquiry has been sent.',
};
