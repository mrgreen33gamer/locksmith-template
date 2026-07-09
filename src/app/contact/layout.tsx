// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Keyline Locksmith | Schedule Service in Waco & Central Texas',
  description:
    'Contact Keyline Locksmith to schedule an emergency lockout, rekey, smart lock install, or free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 820-2020.',
  keywords: [
    'contact Keyline Locksmith',
    'locksmith service Waco TX',
    'schedule emergency lockout Waco',
    'locksmith estimate Central Texas',
    'Keyline Locksmith contact',
    '254-820-2020',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Keyline Locksmith | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, 24/7 Emergency Response · Workmanship Guaranteed, licensed locksmith technicians.',
    url,
    siteName: 'Keyline Locksmith',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Keyline Locksmith | Waco & Central Texas',
    description: 'Schedule locksmith service or get a free estimate. Call (254) 820-2020.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
