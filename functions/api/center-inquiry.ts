import { type Env, handleFormSubmission } from '../../server/forms';
import { centerInquiry } from '../../src/content/center-inquiry';

const { fields } = centerInquiry;

export const onRequestPost: PagesFunction<Env> = ({ request, env }) =>
    handleFormSubmission(request, env, {
        heading: 'New Joyma center inquiry from the Joyful Effort website',
        subject: (values) => `Joyma center inquiry — ${values.center_name || values.contact_name}`,
        replyToField: 'email',
        successPath: '/get-involved/center-inquiry/submitted',
        backPath: '/get-involved/center-inquiry',
        fields: [
            { name: 'center_name', label: 'Center name', required: true, maxLength: 300 },
            { name: 'country', label: 'Country', required: true, maxLength: 200 },
            { name: 'website_url', label: 'Center website', maxLength: 500 },
            { name: 'contact_name', label: 'Name', required: true, maxLength: 200 },
            { name: 'role', label: 'Role', maxLength: 200 },
            { name: 'email', label: 'Email', required: true, email: true, maxLength: 254 },
            { name: 'center_types', label: 'Type of center', options: fields.centerTypes.options },
            {
                name: 'areas_of_interest',
                label: 'Would like help with',
                options: fields.areasOfInterest.options,
            },
            { name: 'current_tools', label: 'Current tools', options: fields.currentTools.options },
            { name: 'message', label: 'Message' },
        ],
    });
