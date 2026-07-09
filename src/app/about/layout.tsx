import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Keyline Locksmith — Waco TX Locksmith Company Since 2005",
  description:
    "Meet the Keyline Locksmith team. Locally owned and operated in Waco, Texas since 2005. licensed locksmiths, bonded & insured, honest pricing, and a 24/7 Emergency Response · Workmanship Guaranteed. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about Keyline Locksmith",
    "Waco locksmith company",
    "locksmith contractor Waco TX",
    "locally owned locksmith Waco",
    "Licensed locksmith Waco Texas",
    "Luis Mercado Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Keyline Locksmith — Waco TX Locksmith Company Since 2005",
    description:
      "Locally owned locksmith company in Waco, TX. licensed, flat-rate pricing, 24/7 Emergency Response · Workmanship Guaranteed.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Keyline Locksmith — Waco TX Since 2005",
    description: "Locally owned locksmith company in Waco, TX. licensed, flat-rate pricing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": `${BASE_URL}/#organization`,
  name: "Keyline Locksmith",
  url: BASE_URL,
  telephone: "+12548202020",
  email: "hello@keylinelocksmith.com",
  foundingDate: "2005",
  founder: {
    "@type": "Person",
    name: "Luis Mercado",
    jobTitle: "Owner & Lead Locksmith",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1201 Speight Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/keylinelocksmith",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {children}
    </>
  );
}
