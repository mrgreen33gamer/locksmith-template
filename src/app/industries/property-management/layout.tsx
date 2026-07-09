import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/industries/property-management`;

export const metadata: Metadata = {
  title: "Locksmith for Property Management | Keyline Locksmith Waco TX",
  description: "Multi-unit rekeys, lockouts, smart locks, and access hardware for property managers across Waco and Central Texas. COIs available, volume pricing.",
  keywords: ["property management locksmith Waco", "apartment rekey Texas", "rental smart locks Waco", "Keyline Locksmith"],
  alternates: { canonical: url },
  openGraph: {
    title: "Locksmith for Property Management | Keyline Locksmith",
    description: "Portfolio rekeys and lockouts for Central Texas property managers.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
