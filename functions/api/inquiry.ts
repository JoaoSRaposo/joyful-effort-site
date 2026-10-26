import { type Env, handleFormSubmission } from '../../server/forms';

export const onRequestPost: PagesFunction<Env> = ({ request, env }) =>
    handleFormSubmission(request, env, {
        heading: 'New general inquiry from the Joyful Effort website',
        subject: (values) => `General inquiry — ${values.organization || values.name}`,
        replyToField: 'email',
        successPath: '/inquire/submitted',
        backPath: '/inquire',
        fields: [
            { name: 'name', label: 'Name', required: true, maxLength: 200 },
            { name: 'email', label: 'Email', required: true, email: true, maxLength: 254 },
            { name: 'organization', label: 'Center or organization', maxLength: 300 },
            { name: 'message', label: 'Message', required: true },
        ],
    });
