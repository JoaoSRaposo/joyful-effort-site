import { type Env, handleFormSubmission } from '../../server/forms';

export const onRequestPost: PagesFunction<Env> = ({ request, env }) =>
    handleFormSubmission(request, env, {
        heading: 'New Joyma inquiry from the Joyful Effort website',
        subject: (values) => `Joyma inquiry — ${values.organization || values.name}`,
        replyToField: 'email',
        successPath: '/inquire/submitted',
        backPath: '/inquire',
        fields: [
            { name: 'name', label: 'Name', required: true, maxLength: 200 },
            { name: 'email', label: 'Email', required: true, email: true, maxLength: 254 },
            {
                name: 'organization',
                label: 'Center or organization',
                required: true,
                maxLength: 300,
            },
            { name: 'message', label: 'About the center', required: true },
        ],
    });
