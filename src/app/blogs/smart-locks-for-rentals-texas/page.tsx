'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faMobileScreen, faBatteryFull, faKey, faShieldHalved, faUsers, faHouseChimney, faWrench } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Smart locks can simplify turnovers for Texas landlords — temporary codes for showings, instant rekey-by-code when tenants leave, and fewer physical key copies floating around. Done poorly, they create battery failures, lockouts, and confused tenants. Here's what Central Texas property managers should know before installing.",
  },
  {
    type: 'cards',
    heading: 'Rental Smart Lock Essentials',
    cards: [
      { icon: faMobileScreen, title: 'Codes beat key rings for turnovers', body: 'Unique codes per tenant or vendor can be deleted at move-out without a truck roll every time.' },
      { icon: faBatteryFull, title: 'Battery plans are mandatory', body: 'Low-battery lockouts are the #1 smart lock complaint. Schedule checks and use models with clear warnings.' },
      { icon: faKey, title: 'Keep a mechanical backup', body: 'Every rental smart lock should have a working key override and a documented spare process.' },
      { icon: faShieldHalved, title: 'Access logs help accountability', body: 'Many smart locks log entries — useful for vendors and after-hours incidents when policy allows.' },
      { icon: faUsers, title: 'Train tenants simply', body: 'A one-page code guide beats a 40-page app manual. Confusion causes lockouts.' },
      { icon: faHouseChimney, title: 'Door prep matters on older homes', body: 'Central Texas rentals vary widely in bore size and door thickness — survey before buying bulk hardware.' },
      { icon: faWrench, title: 'Standardize across the portfolio', body: 'One brand and workflow across units reduces PM office chaos and spare-part inventory.' },
    ],
  },
  {
    type: 'table',
    heading: 'Landlord Checklist Before Install',
    tableHeaders: ['Item', 'Why It Matters', 'Keyline Tip'],
    tableRows: [
      ['Door prep survey', 'Wrong model = returns and delays', 'Measure backset/bore first'],
      ['Battery policy', 'Prevents 2am lockout tickets', 'Quarterly battery schedule'],
      ['Code ownership', 'Who creates/deletes codes?', 'PM office owns master process'],
      ['Mechanical override', 'App/network failures happen', 'Document spare key custody'],
      ['Turnover playbook', 'Speed = fewer vacancy days', 'Delete codes same day as move-out'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Planning smart locks across multiple units? Call (254) 820-2020. Keyline Locksmith installs and configures rental-friendly systems with portfolio-aware pricing.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Pick one brand standard for your portfolio',
      'Write a battery and code-deletion policy',
      'Survey door prep on a sample of units',
      'Train office staff on code issuance',
      'Schedule a pilot install on 2–3 units first',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Smart Locks for Rentals in Texas: What Landlords Should Know"
        description="Codes, rekey workflows, battery failures, and practical considerations for property managers installing smart locks across Central Texas rentals."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Smart locks for rental properties in Texas guide"
        category="Smart Locks"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready to Modernize Rental Access?"
        body="Get smart locks installed and configured by Keyline Locksmith — licensed crews, rental-friendly setups."
        buttonText="Schedule Smart Lock Install"
        buttonHref="/services/smart-locks"
      />
      <NewsletterSignup variant={1} spot="smart-locks-for-rentals-texas-blog" />
    </>
  );
}
