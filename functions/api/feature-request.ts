import { type Env, handleFormSubmission } from '../../server/forms';

export const onRequestPost: PagesFunction<Env> = ({ request, env }) =>
    handleFormSubmission(request, env, {
        heading: 'New feature request from the Joyful Effort website',
        subject: (values) => `Feature request — ${values.organisation || values.name}`,
        replyToField: 'email',
        successPath: '/roadmap/submitted',
        backPath: '/roadmap#feature-request',
        fields: [
            { name: 'name', label: 'Name', required: true, maxLength: 200 },
            { name: 'email', label: 'Email', required: true, email: true, maxLength: 254 },
            {
                name: 'organisation',
                label: 'Centre or organisation',
                required: true,
                maxLength: 300,
            },
            { name: 'task', label: 'What are you trying to do?', required: true },
            { name: 'difficulty', label: 'What makes this difficult today?', required: true },
            { name: 'improvement', label: 'What would a useful improvement look like?' },
        ],
    });
