import { type Env, handleFormSubmission } from '../../server/forms';

export const onRequestPost: PagesFunction<Env> = ({ request, env }) =>
    handleFormSubmission(request, env, {
        heading: 'New Lotus enquiry from the Joyful Effort website',
        subject: (values) => `Lotus enquiry — ${values.organisation || values.name}`,
        replyToField: 'email',
        successPath: '/enquire/submitted',
        backPath: '/enquire',
        fields: [
            { name: 'name', label: 'Name', required: true, maxLength: 200 },
            { name: 'email', label: 'Email', required: true, email: true, maxLength: 254 },
            {
                name: 'organisation',
                label: 'Centre or organisation',
                required: true,
                maxLength: 300,
            },
            { name: 'message', label: 'About the centre', required: true },
        ],
    });
