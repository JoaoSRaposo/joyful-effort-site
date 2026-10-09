import { type Env, handleFormSubmission } from '../../server/forms';
import { centreEnquiry } from '../../src/content/centre-enquiry';

const { fields } = centreEnquiry;

export const onRequestPost: PagesFunction<Env> = ({ request, env }) =>
    handleFormSubmission(request, env, {
        heading: 'New Lotus centre enquiry from the Joyful Effort website',
        subject: (values) => `Lotus centre enquiry — ${values.centre_name || values.contact_name}`,
        replyToField: 'email',
        successPath: '/get-involved/centre-enquiry/submitted',
        backPath: '/get-involved/centre-enquiry',
        fields: [
            { name: 'centre_name', label: 'Centre name', required: true, maxLength: 300 },
            { name: 'country', label: 'Country', required: true, maxLength: 200 },
            { name: 'website_url', label: 'Centre website', maxLength: 500 },
            { name: 'contact_name', label: 'Name', required: true, maxLength: 200 },
            { name: 'role', label: 'Role', maxLength: 200 },
            { name: 'email', label: 'Email', required: true, email: true, maxLength: 254 },
            { name: 'centre_types', label: 'Type of centre', options: fields.centreTypes.options },
            {
                name: 'areas_of_interest',
                label: 'Would like help with',
                options: fields.areasOfInterest.options,
            },
            { name: 'current_tools', label: 'Current tools', options: fields.currentTools.options },
            { name: 'message', label: 'Message' },
        ],
    });
