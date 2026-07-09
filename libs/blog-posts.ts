// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'locked-out-what-to-do-first',
    title:    'Locked Out? What To Do First in Waco (Before You Force Anything)',
    excerpt:  'Stay safe, avoid damaging the door, and know when to call a licensed locksmith. A practical first-steps guide for home, office, and car lockouts in Central Texas.',
    category: 'Emergency',
    date:     'July 3, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'What to do first when locked out — Waco TX locksmith guide',
    featured: true,
  },
  {
    slug:     'rekey-vs-replace-locks',
    title:    'Rekey vs. Replace Locks: Which Saves Money After a Move?',
    excerpt:  'New tenants, lost keys, or a home purchase — when rekeying is enough and when new hardware is smarter for Central Texas homes and rentals.',
    category: 'Security',
    date:     'June 24, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Rekey vs replace locks guide for Waco TX homeowners',
  },
  {
    slug:     'smart-locks-for-rentals-texas',
    title:    'Smart Locks for Rentals in Texas: What Landlords Should Know',
    excerpt:  'Codes, rekey workflows, battery failures, and legal/practical considerations for property managers installing smart locks across Central Texas rentals.',
    category: 'Smart Locks',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Smart locks for rental properties in Texas guide',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
