/**
 * Services that work with Joyma — copy drafted for Paul's review (30 Oct 2026). The Stripe steps and
 * payment facts follow how Joyma works today in lotus (Standard connected accounts with direct
 * charges, no platform fee, card details entered with Stripe). Keep them true to the product.
 */
import { routes, type SiteLink } from './site';

export interface ServiceStep {
    heading: string;
    text: string;
}

export interface ServiceSection {
    id: string;
    label: string;
    heading: string;
    paragraphs: string[];
    illustration: string;
    links?: SiteLink[];
}

export const joymaServices = {
    heading: 'Services that work with Joyma',
    preview: {
        label: 'Preview',
        text: 'This page is under review and isn’t published yet. Please don’t share it beyond the people reviewing it.',
    },
    hero: {
        heading: 'A few good services make life with Joyma easier',
        highlight: 'easier',
        paragraphs: [
            'Joyma brings your center’s events, registrations and memberships together in one place. For a few specialist jobs, it works alongside services many centers already know: Stripe for payments, Moodle for online courses and Zoom for online sessions.',
            'Here’s what each one does, why it helps and how to get started.',
        ],
    },
    overview: {
        heading: 'What you’ll need',
        items: [
            {
                id: 'payments',
                name: 'Stripe',
                role: 'Receive payments',
                text: 'The one we recommend to every center. Connect Stripe and participants can pay for events and memberships as they register.',
                illustration: 'generosity',
            },
            {
                id: 'moodle',
                name: 'Moodle',
                role: 'Online courses',
                text: 'For centers that offer self-study courses. Bring your Moodle courses into Joyma and give participants access in one step.',
                illustration: 'teaching',
            },
            {
                id: 'zoom',
                name: 'Zoom',
                role: 'Online sessions',
                text: 'For online and hybrid events. Add your Zoom link to an event, and only registered participants can see it.',
                illustration: 'meditation',
            },
        ],
    },
    payments: {
        id: 'payments',
        label: 'Payments with Stripe',
        heading: 'Add Stripe and payments take care of themselves',
        paragraphs: [
            'Stripe is one of the world’s most widely used payment services. When your center connects a Stripe account to Joyma, participants pay as they register, and the money goes straight to your center.',
            'There’s no separate checkout to manage, no payment links to send and no spreadsheet to reconcile. Joyma records each payment against the registration or membership it belongs to.',
        ],
        setup: {
            heading: 'Set up in three steps',
            intro: 'Joyma creates your center’s Stripe account for you, so you don’t need to sign up anywhere first.',
            steps: [
                {
                    heading: 'Start in Joyma',
                    text: 'Go to Payments in your center’s Joyma administration and choose “Connect Stripe account”. Pick your center’s country and the email address Stripe should use.',
                },
                {
                    heading: 'Complete Stripe’s onboarding',
                    text: 'Choose “Open Stripe onboarding”. On Stripe’s own secure pages, enter your center’s details and the bank account where you want to receive money. Stripe may ask for proof of identity.',
                },
                {
                    heading: 'Start receiving payments',
                    text: 'Return to Joyma. Once Stripe confirms your details, your account shows as ready and you can take payments for events and memberships.',
                },
            ] satisfies ServiceStep[],
            help: 'Stuck on a step? We’re happy to go through it with you.',
        },
        participants: {
            heading: 'How participants pay',
            paragraphs: [
                'Participants pay by debit or credit card while they register, without leaving Joyma. Their card details are entered directly with Stripe and never reach Joyma.',
                'They can choose to save a card and use it again next time, at your center or at any other center on Joyma.',
                'Stripe also supports digital wallets and local payment methods in many countries. We’re working to bring more of them to Joyma, so participants can pay in the way that’s familiar where they live.',
            ],
        },
        money: {
            heading: 'Where the money goes',
            items: [
                '<strong>Straight to your center.</strong> Payments go into your center’s own Stripe account, and Stripe pays them out to your bank account. Joyful Effort never holds your center’s money.',
                '<strong>No Joyma fee on payments.</strong> Joyma doesn’t take a cut. Stripe charges its standard processing fees, which depend on your country and the payment method.',
                '<strong>Your account, your records.</strong> Your center owns its Stripe account. You can see every payment, refund and payout in Stripe’s dashboard as well as in Joyma.',
            ],
        },
    },
    moodle: {
        id: 'moodle',
        label: 'Online courses with Moodle',
        heading: 'Bring your Moodle courses into Joyma',
        paragraphs: [
            'Many centers already run self-study courses on Moodle. Joyma connects to your existing Moodle site rather than replacing it, so your course content stays where it is.',
            'Your courses appear in Joyma as study spaces. Access can come with a membership, with registration for an event, or be granted directly by your team. Participants move from Joyma into Moodle without signing in again.',
            'Connecting Moodle needs some setup on both sides, which we do together with your center.',
        ],
        illustration: 'teaching',
    } satisfies ServiceSection,
    zoom: {
        id: 'zoom',
        label: 'Online sessions with Zoom',
        heading: 'Keep your Zoom links in the right hands',
        paragraphs: [
            'For online and hybrid events, add your Zoom meeting link to the event in Joyma. Your center keeps using its own Zoom account, just as it does today.',
            'Only people who have registered, and paid where the event has a fee, can see the link. You no longer need to email links by hand or worry about them being shared publicly.',
            'For hybrid programs, participants choose for each session whether they’ll attend in person or online.',
        ],
        illustration: 'meditation',
    } satisfies ServiceSection,
    contact: {
        heading: 'Questions about setting up?',
        text: 'Tell us which services your center uses today and we’ll help you work out what to connect first.',
        link: { label: 'Inquire about Joyma', href: routes.centerInquiry } satisfies SiteLink,
    },
};
