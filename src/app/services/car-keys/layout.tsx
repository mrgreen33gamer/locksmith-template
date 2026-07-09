import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = BASE_URL + '/services/car-keys';

export const metadata: Metadata = {
  title: "Car Keys & Fobs Waco TX | Keyline Locksmith",
  description: "Cut and program car keys and fobs in Waco and Central Texas — often on-site, often faster and less expensive than the dealership.",
  keywords: [
    "car key programming Waco",
    "fob replacement Waco TX",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Car Keys & Fobs Waco TX | Keyline Locksmith",
    description: "Cut and program car keys and fobs in Waco and Central Texas — often on-site, often faster and less expensive than the dealership.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Keys & Fobs Waco TX | Keyline Locksmith",
    description: "Cut and program car keys and fobs in Waco and Central Texas — often on-site, often faster and less expensive than the dealership.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Keys & Fobs Waco TX",
  description: "Cut and program car keys and fobs in Waco and Central Texas — often on-site, often faster and less expensive than the dealership.",
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
  serviceType: "Car Keys & Fobs Waco TX",
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