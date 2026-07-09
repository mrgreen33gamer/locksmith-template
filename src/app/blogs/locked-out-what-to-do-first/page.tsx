'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faExclamationTriangle, faShieldHalved, faKey, faClock, faHouseChimney, faBan } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Being locked out of your home, office, or car is stressful — and the first few minutes often determine whether you get back in cleanly or create an expensive repair. In Waco and across Central Texas, Keyline Locksmith sees the same mistakes: forced doors, broken glass, and DIY tools that destroy lock hardware. Here's what to do first.",
  },
  {
    type: 'cards',
    heading: 'Lockout First Steps',
    cards: [
      { icon: faBolt, title: 'Stay calm and check secondary access', body: 'Garage man-door, back door, window that is already unlocked, spare with a neighbor — rule these out before forcing anything.' },
      { icon: faBan, title: 'Do not force the door or pick randomly', body: 'Bent credit cards, screwdrivers, and YouTube tricks often damage the latch, frame, or cylinder — raising the final bill.' },
      { icon: faExclamationTriangle, title: 'Confirm you have the right to enter', body: 'Licensed locksmiths verify identity and ownership. Have ID ready. For rentals, know your landlord policy.' },
      { icon: faShieldHalved, title: 'Call a licensed locksmith', body: 'Non-destructive entry is the goal. A pro arrives with the right tools for your lock type.' },
      { icon: faKey, title: 'Ask about rekey after entry', body: 'If keys were lost or stolen, getting in is step one — rekeying is how you stay secure afterward.' },
      { icon: faClock, title: '24/7 help is available', body: 'Keyline Locksmith prioritizes emergency lockouts across Waco, Hewitt, Woodway, Temple, and Killeen.' },
      { icon: faHouseChimney, title: 'Vehicle lockouts are different', body: 'Car lockouts need automotive tools — don\'t pry the door. Call with year/make/model if you need a spare key too.' },
    ],
  },
  {
    type: 'table',
    heading: 'What To Do After You Realize You\'re Locked Out',
    tableHeaders: ['Step', 'Do This', 'Avoid This'],
    tableRows: [
      ['1', 'Check for other unlocked access points', 'Forcing the primary door'],
      ['2', 'Call a licensed locksmith with your location', 'Random DIY picking videos'],
      ['3', 'Have ID ready for verification', 'Pressuring someone to skip ID checks'],
      ['4', 'Get a flat-rate quote before work', 'Approving open-ended hourly work'],
      ['5', 'Consider rekey if keys are lost/stolen', 'Leaving old keys in circulation'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Locked out right now? Call (254) 820-2020. Keyline Locksmith provides 24/7 emergency response across Central Texas with flat-rate quotes before we start.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Do not force the door or break glass unless life safety is at risk',
      'Call a licensed locksmith and share your exact location',
      'Prepare photo ID for ownership verification',
      'Ask whether rekey is recommended after entry',
      'Store a spare with a trusted neighbor or use a lockbox',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Locked Out? What To Do First in Waco (Before You Force Anything)"
        description="Stay safe, avoid damaging the door, and know when to call a licensed locksmith. A practical first-steps guide for home, office, and car lockouts in Central Texas."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="What to do first when locked out — Waco TX locksmith guide"
        category="Emergency"
        date="July 3, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Locked Out Right Now?"
        body="Get 24/7 emergency lockout help from Keyline Locksmith — licensed, bonded, and insured."
        buttonText="Call for Lockout Help"
        buttonHref="/services/emergency-lockout"
      />
      <NewsletterSignup variant={1} spot="locked-out-what-to-do-first-blog" />
    </>
  );
}
