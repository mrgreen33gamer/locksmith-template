// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Keyline Locksmith — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Emergency Lockout',
    text:     "Locked out of my house at 10pm with kids inside asleep. Keyline Locksmith answered immediately, arrived in under 30 minutes, and got us back in without damaging the door. Clear pricing and professional from start to finish.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Rekey & Lock Change',
    text:     'After a roommate moved out we needed every lock rekeyed the same day. Keyline rekeyed the whole house, labeled keys, and explained everything clearly. Fair price and fast work — exactly what we needed for peace of mind.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Smart Lock Installation',
    text:     'Had three companies quote a smart lock install. Keyline was honest about what would work with our door prep and Wi-Fi — not just upselling the most expensive unit. Clean install, app walkthrough, and zero issues since day one.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Car Keys & Fobs',
    text:     'Lost my only car key on a Friday. Keyline cut and programmed a new fob on-site so I didn\'t need a dealership appointment. Saved time and money — will never go back to waiting on the dealer.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Commercial Access Control',
    text:     'We hired Keyline for access control upgrades at our retail suite. They handled door hardware, credentials, and after-hours scheduling so we never closed early. Finished on time. Professional commercial crew.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Safe Services',
    text:     'Forgot the combination on a home safe with important documents inside. Keyline opened it carefully with no damage and set a new combination. Patient, skilled, and honest about options. Highly recommend.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Emergency Lockout',
    text:     'Car lockout in a parking lot during a summer storm. Keyline arrived quickly, opened the car without scratches, and never made me feel rushed. Fair after-hours pricing. This is my go-to locksmith now.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Rekey & Lock Change',
    text:     'Bought a house and wanted every exterior lock changed before moving in. Keyline swapped hardware, rekeyed where we kept quality locks, and left us with a full set of keys. Thorough and trustworthy.',
  },
];

export default reviews;
