import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = BASE_URL + '/services/smart-locks';

export const metadata: Metadata = {
  title: "Smart Lock Installation Waco TX | Keyline Locksmith",
  description: "Smart lock installation for homes and rentals in Waco and Central Texas — keypad, Wi-Fi, and app-enabled locks with professional setup.",
  keywords: [
    "smart lock installation Waco",
    "keypad lock Waco TX",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Smart Lock Installation Waco TX | Keyline Locksmith",
    description: "Smart lock installation for homes and rentals in Waco and Central Texas — keypad, Wi-Fi, and app-enabled locks with professional setup.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Lock Installation Waco TX | Keyline Locksmith",
    description: "Smart lock installation for homes and rentals in Waco and Central Texas — keypad, Wi-Fi, and app-enabled locks with professional setup.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Lock Installation Waco TX",
  description: "Smart lock installation for homes and rentals in Waco and Central Texas — keypad, Wi-Fi, and app-enabled locks with professional setup.",
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
  serviceType: "Smart Lock Installation Waco TX",
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