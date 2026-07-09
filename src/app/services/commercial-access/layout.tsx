import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = BASE_URL + '/services/commercial-access';

export const metadata: Metadata = {
  title: "Commercial Access Control Waco TX | Keyline Locksmith",
  description: "Commercial access control and door hardware for offices, retail, and multi-unit properties across Central Texas. After-hours options available.",
  keywords: [
    "commercial locksmith Waco",
    "access control Waco TX",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Access Control Waco TX | Keyline Locksmith",
    description: "Commercial access control and door hardware for offices, retail, and multi-unit properties across Central Texas. After-hours options available.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Access Control Waco TX | Keyline Locksmith",
    description: "Commercial access control and door hardware for offices, retail, and multi-unit properties across Central Texas. After-hours options available.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Access Control Waco TX",
  description: "Commercial access control and door hardware for offices, retail, and multi-unit properties across Central Texas. After-hours options available.",
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
  serviceType: "Commercial Access Control Waco TX",
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