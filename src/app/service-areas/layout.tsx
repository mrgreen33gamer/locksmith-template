import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Locksmith Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | Keyline Locksmith',
  description:
    'Keyline Locksmith serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, 24/7 Emergency Response · Workmanship Guaranteed.',
  keywords: [
    'locksmith service areas Central Texas',
    'emergency lockout Waco TX',
    'locksmith technician Hewitt TX',
    'locksmith technician Killeen TX',
    'locksmith technician Temple TX',
    'Keyline Locksmith service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Locksmith Service Areas | Keyline Locksmith — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate emergency lockouts, rekey, smart locks, and more. Same-day service available.',
    url,
    siteName: 'Keyline Locksmith',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Locksmith Service Areas | Keyline Locksmith — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — licensed locksmith service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
