/**
 * Inquiry form copy.
 * PROPOSED — no inquiry-form document has been supplied yet. The intro reuses approved copy
 * from Joyma ("Getting started") and the Homepage ("Help shape what comes next");
 * field labels and the confirmation message need Paul's sign-off.
 */
export const inquire = {
    heading: 'Inquire about Joyma',
    paragraphs: [
        'Tell us about your center, your program and the systems you use. This gives us a starting point for discussing how Joyma can fit your needs.',
    ],
    fields: {
        name: { label: 'Your name' },
        email: { label: 'Email' },
        organization: {
            label: 'Center or organization',
            hint: 'The center you work with and your role there.',
        },
        message: {
            label: 'Tell us about your center',
            hint: 'Tell us about your program, the systems you use and what you would like to make easier for your team.',
        },
    },
    submit: 'Inquire about Joyma',
    confirmation: 'Thank you for getting in touch. Your inquiry has been sent.',
};
