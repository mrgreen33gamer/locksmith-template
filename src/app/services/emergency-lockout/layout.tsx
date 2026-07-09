import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = BASE_URL + '/services/emergency-lockout';

export const metadata: Metadata = {
  title: "Emergency Lockout Waco TX | 24/7 Response | Keyline Locksmith",
  description: "24/7 emergency lockouts for home, office, and vehicles in Waco and Central Texas. Flat-rate pricing, licensed locksmiths, non-destructive entry when possible.",
  keywords: [
    "emergency lockout Waco TX",
    "24/7 locksmith Waco",
    "car lockout Waco",
    "house lockout Central Texas",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Emergency Lockout Waco TX | 24/7 Response | Keyline Locksmith",
    description: "24/7 emergency lockouts for home, office, and vehicles in Waco and Central Texas. Flat-rate pricing, licensed locksmiths, non-destructive entry when possible.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Lockout Waco TX | 24/7 Response | Keyline Locksmith",
    description: "24/7 emergency lockouts for home, office, and vehicles in Waco and Central Texas. Flat-rate pricing, licensed locksmiths, non-destructive entry when possible.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Lockout Waco TX | 24/7 Response",
  description: "24/7 emergency lockouts for home, office, and vehicles in Waco and Central Texas. Flat-rate pricing, licensed locksmiths, non-destructive entry when possible.",
  provider: {
    "@type": "Locksmith",
    name: "Keyline Locksmith",
    url: BASE_URL,
    telephone: "+12548202020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1201 Speight Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Emergency Lockout Waco TX | 24/7 Response",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}