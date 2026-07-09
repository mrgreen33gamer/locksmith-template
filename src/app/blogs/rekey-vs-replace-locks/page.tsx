'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faLock, faKey, faShieldHalved, faWrench, faDollarSign, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "After a move, a roommate change, or a lost key ring, the big question is: rekey the locks you already have, or replace them entirely? In Central Texas homes and rentals, the right answer depends on hardware condition, security goals, and budget. Here's a clear way to decide.",
  },
  {
    type: 'cards',
    heading: 'Rekey vs. Replace Decision Factors',
    cards: [
      { icon: faKey, title: 'Rekey when hardware is solid', body: 'If cylinders and bodies are in good shape, rekeying gives you new keys without buying full locksets.' },
      { icon: faWrench, title: 'Replace when hardware is worn', body: 'Loose knobs, sticky deadbolts, cracked plates, or outdated low-security locks are better replaced.' },
      { icon: faDollarSign, title: 'Rekey usually costs less', body: 'Per-cylinder rekey is typically cheaper than full hardware kits — especially for multi-door homes.' },
      { icon: faShieldHalved, title: 'Replace for a security upgrade', body: 'Moving from basic residential to higher-security or smart hardware is a replace decision, not a rekey.' },
      { icon: faHouseChimney, title: 'Move-ins almost always rekey', body: 'You rarely know how many old keys exist. Rekeying is standard after purchase or tenant turnover.' },
      { icon: faLock, title: 'Key-alike is easier with rekey', body: 'A locksmith can key multiple existing doors to one key without forcing a full remodel of hardware style.' },
      { icon: faCheck, title: 'Get an on-site recommendation', body: 'Keyline inspects each door and quotes both options honestly — no pressure to replace what still works.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Comparison',
    tableHeaders: ['Situation', 'Usually Rekey', 'Usually Replace'],
    tableRows: [
      ['Lost keys / old roommate', 'Yes', 'Only if hardware is failing'],
      ['New home purchase', 'Yes (standard)', 'If upgrading style/security'],
      ['Sticky or broken deadbolt', 'Maybe', 'Yes if mechanism is worn'],
      ['Want keypad/smart access', 'No', 'Yes — install new smart lock'],
      ['Mixed brands, want one key', 'Often yes', 'If cylinders incompatible'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Not sure? Call (254) 820-2020. Keyline Locksmith will assess your doors and quote rekey vs. replace side-by-side before any work starts.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Count exterior doors and note brand/type if known',
      'Decide whether style/security upgrade is a goal',
      'Ask for a whole-house rekey package quote',
      'Request key-alike for all exterior doors',
      'Change codes/keys after any lost key event',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Rekey vs. Replace Locks: Which Saves Money After a Move?"
        description="New tenants, lost keys, or a home purchase — when rekeying is enough and when new hardware is smarter for Central Texas homes and rentals."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Rekey vs replace locks guide for Waco TX homeowners"
        category="Security"
        date="June 24, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready to Rekey or Upgrade?"
        body="Get a flat-rate rekey or lock change quote from Keyline Locksmith — licensed, bonded, and insured."
        buttonText="Schedule Rekey Service"
        buttonHref="/services/rekey-lock-change"
      />
      <NewsletterSignup variant={1} spot="rekey-vs-replace-locks-blog" />
    </>
  );
}
