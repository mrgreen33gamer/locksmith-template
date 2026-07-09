import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Keyline Locksmith Waco TX",
  description:
    "Keyline Locksmith serves property management companies, auto dealers & fleets, and retail security across Waco and Central Texas with lockouts, rekey, and access control.",
  keywords: [
    "commercial locksmith Waco",
    "property management locksmith Texas",
    "auto dealer key programming",
    "retail locksmith Waco TX",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Keyline Locksmith",
    description: "Locksmith programs for property managers, auto dealers, and retail security in Central Texas.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
