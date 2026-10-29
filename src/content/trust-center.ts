/**
 * Trust Center copy — Paul's draft (JE_Website_05_Trust_Centre, 22 Oct 2026), with every answer
 * fact-checked and agreed item by item in lotus `docs/Knowledge/trust-center/Trust-Center-TODO.md`
 * (27–28 Oct 2026). Update that file and this one together: the page makes factual claims about
 * hosting, providers, security and certification that must stay true.
 */
import { mailto, routes, type SiteLink } from './site';

export interface TrustQuestion {
    question: string;
    answer: string[];
    links?: SiteLink[];
}

export interface TrustSection {
    id: string;
    label: string;
    heading: string;
    intro: string[];
    questions: TrustQuestion[];
}

export interface TrustRegion {
    id: string;
    label: string;
    heading: string;
    paragraphs: string[];
    certification?: TrustCertification;
    documents: string;
}

export interface TrustCertification {
    text: string;
    image: { src: string; alt: string };
    link: SiteLink;
}

export interface TrustProvider {
    name: string;
    purpose: string;
    information: string;
    location: string;
}

const legalReview =
    'We’re finalizing our legal documents with our lawyers. This page reflects how Joyma works today and how we intend to handle your information, but some details may change as that review completes. We’ll update this page when it does.';

const certificateSearch = 'https://iasme.co.uk/cyber-essentials/ncsc-certificate-search/';

const cyberEssentials: TrustCertification = {
    text: 'Joyful Effort holds Cyber Essentials certification, a cybersecurity standard established by the UK government to help organizations protect against cyber threats. It covers five core areas: firewalls, secure configuration, security updates, access control and malware protection. These safeguards provide practical security measures relevant to the centers and communities we serve worldwide, including in the UK, EU and North America.',
    image: {
        src: '/images/trust/cyber-essentials-certified.png',
        alt: 'Cyber Essentials Certified',
    },
    link: { label: 'Verify the certificate', href: certificateSearch },
};

const sameStandards =
    '<strong>Same standards everywhere.</strong> Centers here get the same protections as every other Joyma center: separate records for each center, exports, security, and prompt notice if something goes wrong.';

const storedInEu =
    '<strong>Where your data is.</strong> Your center’s information is stored in the European Union (Finland), under the EU’s data protection standards.';

const sharedDocuments =
    'Our shared documents and certifications are listed under Policies & assurance.';

const comingDocuments = `Regional documents will appear here as Joyma becomes available to centers in this region. ${sharedDocuments}`;

const dpaInReview = 'Center Data Processing Agreement — in legal review, current draft on request.';

export const trustCenter = {
    heading: 'Trust Center',
    hero: {
        heading: 'Care for your work. Care for your information.',
        highlight: 'information.',
        paragraphs: [
            'Choosing software means entrusting it with part of your center’s everyday work—and the information your community shares with you. Here you can explore Joyful Effort’s approach to security, privacy and reliable service, and find the information your team needs to assess Joyma.',
        ],
        lastUpdated: 'Last updated 29 October 2026',
        notice: legalReview,
    },
    sections: [
        {
            id: 'security-and-reliability',
            label: 'Security & reliability',
            heading: 'Supporting the work you rely on',
            intro: [
                'Your team needs to understand how Joyma is protected and what happens when something goes wrong. Here you’ll find how we handle account security, hosting, continuity and recovery.',
            ],
            questions: [
                {
                    question: 'How will our accounts and information be protected?',
                    answer: [
                        '<strong>Signing in.</strong> Joyma accounts run on our own identity system, not a third-party login service. People can sign in with a password, a passkey, or their Google or Apple account, and anyone can add two-factor authentication with an authenticator app. Passwords must be at least 12 characters and are checked against lists of known breached passwords. Accounts lock after repeated failed attempts.',
                        '<strong>Your center’s information stays separate.</strong> Every center’s records are kept apart at the data level, not just hidden in the screens, so one center can never see another’s information. Inside your center, you decide what each staff role can see and do.',
                        '<strong>Protecting information.</strong> All connections to Joyma are encrypted. Card details are entered directly with Stripe and never reach our systems. Only named members of our technical team can access the servers, through individual, key-protected accounts. We’re also adding a log of the changes staff make in Joyma, so centers can see who did what.',
                        '<strong>What your center looks after.</strong> You decide who on your team has access and with which role, remove people who leave, and encourage staff to turn on two-factor authentication. We look after the platform, the servers and the security of the service.',
                    ],
                },
                {
                    question: 'Where will Joyma run and our data be stored?',
                    answer: [
                        '<strong>In the European Union.</strong> Joyma runs on servers we manage at Hetzner in Helsinki, Finland. Your center’s information is stored there: the database, files people upload, search, and our sign-in system.',
                        '<strong>Fewer companies in the chain.</strong> We run the database, file storage, search and sign-in ourselves, rather than handing them to separate cloud services. That keeps the number of companies that handle your information small.',
                        '<strong>Specialist providers for specific tasks.</strong> Cloudflare protects and speeds up connections to Joyma. Resend delivers our emails from Ireland. Stripe processes card payments through your center’s own Stripe account. Practitioners who choose “Sign in with Google” or “Sign in with Apple” share their sign-in with that provider. Some of these providers may handle limited information outside the EU.',
                        '<strong>One region for everyone.</strong> Every center’s information is kept in the same EU region. We don’t currently offer storage in other regions.',
                    ],
                    links: [
                        { label: 'See our service providers', href: routes.trustCenterProviders },
                    ],
                },
                {
                    question: 'What happens if the service is interrupted?',
                    answer: [
                        '<strong>We watch the service.</strong> Joyma’s servers are monitored, and our technical team is alerted when something stops working.',
                        '<strong>Keeping you informed.</strong> If Joyma is interrupted, we’ll email your center’s administrators and keep you updated until it’s resolved. We give advance notice of planned maintenance.',
                        '<strong>Your records are always yours.</strong> Your center can export its records at any time. If Joyma ever closes, we’ll give you advance notice and time to take your data with you.',
                        '<strong>Our commitments.</strong> Availability, support response times and recovery targets will be set out in the terms for centers, which are in legal review.',
                    ],
                },
                {
                    question: 'How will security issues be handled?',
                    answer: [
                        '<strong>Reporting a concern.</strong> If you think you’ve found a security problem in Joyma, email <a href="mailto:hello@joyfuleffort.com" class="underline underline-offset-4">hello@joyfuleffort.com</a>. We’ll acknowledge your report within two working days, keep you updated while we look into it, and tell you when it’s fixed. Please don’t access or change other people’s information while testing. We don’t run a paid bug bounty, but we’re grateful for every report.',
                        '<strong>How we respond.</strong> We assess each report, fix the most serious issues first, and check the fix before closing it. We apply critical security updates to our servers and the software Joyma depends on within 14 days, and we have Joyma reviewed by independent security specialists.',
                        '<strong>If your center’s information is affected.</strong> We’ll tell your center’s administrators without undue delay, explain what happened and what we’re doing about it, and help you with any notifications you need to make. Our data processing agreement sets out the details.',
                    ],
                },
            ],
        },
        {
            id: 'privacy-and-your-data',
            label: 'Privacy & your data',
            heading: 'Your community’s information matters',
            intro: [
                'Centers and practitioners should be able to understand what information is used, why it’s needed and who is responsible for it. This section explains the journey of information through Joyma in everyday language.',
                legalReview,
            ],
            questions: [
                {
                    question: 'What information will Joyma collect and why?',
                    answer: [
                        '<strong>Your Joyma account.</strong> To create an account we need your name and email. You can add a profile picture and choose your language and time zone. We keep records of sign-ins, including IP address and browser, to protect your account. Your password is held only by our sign-in system.',
                        '<strong>When you join activities at a center.</strong> Your center sees the details it needs to welcome you: your name and contact details, the events, courses or memberships you sign up for, whether you attend online or in person, seating preferences, and what you’ve paid. Phone number, date of birth, gender and address are optional, and only shared with the center you register with. You can also register family members or others.',
                        '<strong>Payments.</strong> Card details are entered directly with Stripe and never reach Joyma. If you choose to save a card, it’s saved by Stripe in your center’s Stripe account. Joyma only shows which card it is, such as “Visa ending 4242”, so you can pick it next time.',
                        '<strong>Information that needs extra care.</strong> Taking part in a Buddhist center’s activities can reveal something about your beliefs. We treat it as sensitive information: each center’s records are kept separate, and centers can’t see each other’s records. Joyma doesn’t ask for health or dietary information.',
                        '<strong>What we don’t do.</strong> We don’t sell your information or show you ads.',
                    ],
                },
                {
                    question: 'Who is responsible for our community’s data?',
                    answer: [
                        'Responsibility follows who decides how the information is used.',
                        '<strong>Your center</strong> is responsible for the information it gathers for its own activities: registrations, attendance, courses, memberships and payments. Joyful Effort handles that information only to run Joyma for you, under a data processing agreement. You can export your registrations at any time, and ask us for anything else.',
                        '<strong>Joyful Effort</strong> is responsible for each practitioner’s Joyma account, which they keep across every center they visit, and for keeping the platform secure. Our privacy notice explains that use. Centers can’t see each other’s records, and we use your center’s records only to run Joyma for you.',
                        '<strong>Card payments</strong> are handled by Stripe, through your center’s own Stripe account and under Stripe’s own terms.',
                        '<strong>Service providers</strong> help us run Joyma, such as hosting and email delivery. Each one handles only what its service needs.',
                        'Our privacy notice and data processing agreement are in legal review. Centers can request the current draft of the data processing agreement.',
                    ],
                    links: [
                        { label: 'See our service providers', href: routes.trustCenterProviders },
                        {
                            label: 'Request the data processing agreement',
                            href: mailto('Center Data Processing Agreement draft'),
                        },
                    ],
                },
                {
                    question: 'Can we access, export or delete our data?',
                    answer: [
                        '<strong>Exporting your center’s records.</strong> Your staff can export registrations, with each participant’s details and attendance, from Joyma at any time. If you need anything else, such as membership or payment records, ask us and we’ll provide it.',
                        '<strong>If your center leaves Joyma.</strong> You’ll have time to export your records before your account closes, and we’ll then delete your center’s information, except anything we’re legally required to keep. The exact periods will be set out in the terms for centers, which are in legal review.',
                        '<strong>Practitioners’ own accounts.</strong> Anyone can see their details and registrations in their Joyma account, and can delete their account themselves from their settings. Deleting an account doesn’t delete the records a center keeps about its own activities, such as past registrations; those are the center’s to manage. To get a copy of their information or ask for anything else, practitioners can contact the center or us.',
                    ],
                },
                {
                    question: 'Which partners can access information?',
                    answer: [
                        'Joyma uses a small number of service providers. We run the database, file storage, search and sign-in ourselves, so fewer companies handle your information. Each provider handles only what its service needs, and we’re finalizing data processing agreements with each of them.',
                        '<strong>Changes.</strong> We’ll tell centers before we add or replace a provider that handles their information, so you have time to raise concerns.',
                    ],
                    links: [
                        { label: 'See our service providers', href: routes.trustCenterProviders },
                    ],
                },
                {
                    question: 'How does AI fit into Joyma?',
                    answer: [
                        '<strong>Joyma does not currently use AI.</strong> Future AI integrations are on our roadmap, with ethics, safety and privacy guiding their development. Before introducing any AI features, we’ll explain how they work and update all relevant policies.',
                        'We will never use your center’s information or practitioners’ personal data to train AI models, or allow our AI providers to do so.',
                    ],
                },
            ],
        },
        {
            id: 'policies-and-assurance',
            label: 'Policies & assurance',
            heading: 'Information you can look into',
            intro: [
                'Clear explanations need supporting documents. This is where your team can review the terms, policies and evidence relevant to Joyma.',
                'We only list assessments and certifications that have been completed, with their scope and dates. Planned work is shown separately.',
                legalReview,
            ],
            questions: [
                {
                    question: 'Privacy notices & data processing terms',
                    answer: [
                        '<strong>Joyma Privacy Notice.</strong> How Joyful Effort handles practitioners’ Joyma accounts. <em>In legal review.</em>',
                        '<strong>Center Data Processing Agreement.</strong> How Joyful Effort handles the information your center collects, on your behalf. <em>In legal review; current draft on request.</em>',
                    ],
                    links: [
                        {
                            label: 'Request the data processing agreement',
                            href: mailto('Center Data Processing Agreement draft'),
                        },
                    ],
                },
                {
                    question: 'Terms and Conditions',
                    answer: [
                        '<strong>Terms for practitioners.</strong> Using a Joyma account to find and join activities at participating centers. <em>In legal review.</em>',
                        '<strong>Terms for centers.</strong> The agreement between your center and Joyful Effort for using Joyma. <em>In legal review; current draft on request.</em>',
                    ],
                    links: [
                        {
                            label: 'Request the terms for centers',
                            href: mailto('Terms for centers draft'),
                        },
                    ],
                },
                {
                    question: 'Security & service policies',
                    answer: [
                        'We describe our security measures in plain language on this page. Centers assessing Joyma can request our security measures document, a summary of our latest independent security review, and answers to their security questionnaire. Detailed reports are shared under a confidentiality agreement.',
                    ],
                    links: [
                        {
                            label: 'Request security information',
                            href: mailto('Security information request'),
                        },
                    ],
                },
                {
                    question: 'Certifications, audits & supporting evidence',
                    answer: [
                        '<strong>Cyber Essentials — Certified.</strong> Joyful Effort is certified under Cyber Essentials, the UK government-backed scheme for protection against common cyber attacks. The certification covers our whole organization, including the servers and cloud services that run Joyma. Certified 20 October 2026 · Renewal due 20 October 2027 · Certification body: Unity Metrix (IASME) · Certificate number 1a519dc5-fc19-416b-9680-4baf85188b41.',
                        'Cyber Essentials confirms that five baseline controls are in place: firewalls, secure configuration, access control, malware protection and security updates. It is an independently reviewed self-assessment. It is not an audit of Joyma’s features or a penetration test.',
                        '<strong>Independent security review — September 2026.</strong> Ciberseguridad720, an independent cybersecurity firm we commissioned, tested Joyma’s sign-in, account and server security. Every issue they found has been fixed. A summary of the review is available on request.',
                        '<strong>Planned.</strong> We plan to consider Cyber Essentials Plus, which adds hands-on testing by an external assessor, in 2027. We’ll list it here only once it’s completed.',
                    ],
                    links: [
                        { label: 'Verify the certificate', href: certificateSearch },
                        {
                            label: 'Request a copy of the certificate',
                            href: mailto('Cyber Essentials certificate'),
                        },
                        {
                            label: 'Request the review summary',
                            href: mailto('Security review summary'),
                        },
                    ],
                },
            ],
        },
    ] satisfies TrustSection[],
    regions: {
        id: 'your-region',
        label: 'Your region',
        heading: 'A shared approach. Relevant local information.',
        intro: 'The foundations above apply across the platform. This section explains any regional differences your center needs to consider.',
        selectorLabel: 'Choose your region',
        documentsHeading: 'Regional documents & supporting information',
        items: [
            {
                id: 'uk',
                label: 'United Kingdom',
                heading: 'United Kingdom',
                paragraphs: [
                    '<strong>Law.</strong> For centers in the UK, Joyma is designed to support your obligations under UK GDPR and the Data Protection Act 2018. Your center remains the controller for its own records, and Joyful Effort processes them for you under our data processing agreement.',
                    '<strong>Where your data is.</strong> Your center’s information is stored in the European Union (Finland). The UK recognizes the EU as providing adequate protection, so no extra safeguards are needed for storage there.',
                    '<strong>Access from outside the UK and EU.</strong> Joyful Effort is based in the United States, and some of our providers operate outside the UK and EU. Our technical team works from the EU. Where your information can be accessed from outside the UK and EU, we’re putting the transfer safeguards UK law requires in place with our lawyers, such as the UK International Data Transfer Agreement.',
                ],
                certification: cyberEssentials,
                documents: `Center Data Processing Agreement, including UK transfer terms — in legal review, current draft on request. Cyber Essentials certificate — verify under Policies & assurance. ${sharedDocuments}`,
            },
            {
                id: 'eu',
                label: 'EU / EEA',
                heading: 'European Union / EEA',
                paragraphs: [
                    '<strong>Law.</strong> For centers in the EU and EEA, Joyma is designed to support your obligations under the GDPR and your country’s data protection law. Your center remains the controller for its own records, and Joyful Effort processes them for you under our data processing agreement.',
                    '<strong>Where your data is.</strong> Your center’s information is stored in the European Union (Finland), and our technical team works from within the EU.',
                    '<strong>Access from outside the EU.</strong> Joyful Effort is based in the United States, and some of our providers operate outside the EU. Where your information can be accessed from there, we’re putting the safeguards the GDPR requires in place with our lawyers, such as the EU Standard Contractual Clauses.',
                    '<strong>Language.</strong> Joyma is available in English and French.',
                ],
                certification: cyberEssentials,
                documents: `Center Data Processing Agreement, including EU transfer terms — in legal review, current draft on request. ${sharedDocuments}`,
            },
            {
                id: 'us',
                label: 'United States',
                heading: 'United States',
                paragraphs: [
                    sameStandards,
                    storedInEu,
                    '<strong>US privacy laws.</strong> Privacy law in the US varies by state. Joyma is designed to support centers’ obligations under applicable state privacy and breach notification laws; we’re confirming the details with our lawyers.',
                ],
                documents: `${dpaInReview} ${sharedDocuments}`,
            },
            {
                id: 'canada',
                label: 'Canada',
                heading: 'Canada',
                paragraphs: [
                    sameStandards,
                    storedInEu,
                    '<strong>Canadian privacy law.</strong> We’re preparing information on PIPEDA and provincial laws, including Quebec’s Law 25. If your center is in Canada, talk to us and we’ll share what we have so far.',
                ],
                documents: comingDocuments,
            },
            {
                id: 'australia-new-zealand',
                label: 'Australia & New Zealand',
                heading: 'Australia & New Zealand',
                paragraphs: [
                    sameStandards,
                    storedInEu,
                    '<strong>Australia.</strong> We’re preparing information on the Privacy Act 1988 and the Australian Privacy Principles, including cross-border disclosure and the Notifiable Data Breaches scheme.',
                    '<strong>New Zealand.</strong> We’re preparing information on the Privacy Act 2020, including its rules on sending information overseas and notifying privacy breaches.',
                    'If your center is in Australia or New Zealand, talk to us and we’ll share what we have so far.',
                ],
                documents: comingDocuments,
            },
            {
                id: 'asia-pacific',
                label: 'Asia Pacific',
                heading: 'Asia Pacific',
                paragraphs: [
                    sameStandards,
                    storedInEu,
                    '<strong>Local privacy law.</strong> Privacy laws differ from country to country across the region. We’ll add country-specific information as Joyma becomes available to centers there. If your center is in Asia Pacific, talk to us about your country’s requirements.',
                ],
                documents: comingDocuments,
            },
        ] satisfies TrustRegion[],
    },
    contact: {
        heading: 'What does your center need to know?',
        text: 'Need more details? We’d love to hear from you.',
        link: { label: 'Ask us about Joyma', href: mailto('Trust Center question') },
    },
    providers: {
        heading: 'Service providers',
        lastUpdated: 'Last updated 28 October 2026',
        intro: [
            'These are the companies that can handle information from Joyma, what they do for us and where. We run the database, file storage, search and sign-in ourselves on our own servers, so they aren’t separate companies here.',
            'We’ll tell centers before we add or replace a provider that handles their information.',
        ],
        columns: {
            name: 'Provider',
            purpose: 'What it does for Joyma',
            information: 'Information it handles',
            location: 'Where',
        },
        items: [
            {
                name: 'Hetzner (Hetzner Online GmbH)',
                purpose: 'Hosts our servers: the app, database, files, search and sign-in system',
                information: 'Everything stored in Joyma',
                location: 'Helsinki, Finland (EU)',
            },
            {
                name: 'MetaProvide',
                purpose:
                    'Builds and runs Joyma for us: development, server operations, monitoring and technical support',
                information:
                    'Access to Joyma’s data when needed for support or fixing problems; server logs including IP addresses',
                location: 'Sweden (EU); monitoring server in Germany (EU)',
            },
            {
                name: 'Cloudflare',
                purpose: 'Protects and speeds up connections to Joyma',
                information: 'Connection details such as IP addresses and the pages requested',
                location: 'Global network',
            },
            {
                name: 'Resend',
                purpose: 'Sends Joyma’s emails, such as confirmations and reminders',
                information: 'Recipient name and email address, and the content of each email',
                location: 'Sends from Ireland (EU); logs and email metadata stored in the US',
            },
            {
                name: 'Google Workspace',
                purpose:
                    'Joyful Effort’s email inbox, for questions and requests sent to us. Not used by Joyma itself',
                information: 'Whatever people include when they email us',
                location: 'United States and other countries',
            },
        ] satisfies TrustProvider[],
        separateHeading: 'Separate from our providers',
        separate: [
            '<strong>Stripe</strong> processes card payments through your center’s own Stripe account, under Stripe’s own terms. It isn’t our provider; your center has its own relationship with Stripe.',
            '<strong>Google and Apple sign-in</strong> are used only if a practitioner chooses “Sign in with Google” or “Sign in with Apple”. The provider then confirms who they are to Joyma.',
        ],
        backLink: { label: 'Back to the Trust Center', href: routes.trustCenter },
    },
};
