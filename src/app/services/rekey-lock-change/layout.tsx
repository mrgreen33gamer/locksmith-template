import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = BASE_URL + '/services/rekey-lock-change';

export const metadata: Metadata = {
  title: "Rekey & Lock Change Waco TX | Keyline Locksmith",
  description: "Rekey existing locks or install new hardware after a move, lost keys, or tenant turnover in Waco and Central Texas. Flat-rate packages, licensed locksmiths.",
  keywords: [
    "rekey locks Waco TX",
    "lock change Waco",
    "house rekey Central Texas",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Rekey & Lock Change Waco TX | Keyline Locksmith",
    description: "Rekey existing locks or install new hardware after a move, lost keys, or tenant turnover in Waco and Central Texas. Flat-rate packages, licensed locksmiths.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekey & Lock Change Waco TX | Keyline Locksmith",
    description: "Rekey existing locks or install new hardware after a move, lost keys, or tenant turnover in Waco and Central Texas. Flat-rate packages, licensed locksmiths.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rekey & Lock Change Waco TX",
  description: "Rekey existing locks or install new hardware after a move, lost keys, or tenant turnover in Waco and Central Texas. Flat-rate packages, licensed locksmiths.",
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
  serviceType: "Rekey & Lock Change Waco TX",
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