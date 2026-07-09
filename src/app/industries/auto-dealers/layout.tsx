import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/industries/auto-dealers`;

export const metadata: Metadata = {
  title: "Locksmiths for Auto Dealers & Fleets | Keyline Locksmith Waco TX",
  description: "Car keys, fobs, lot lockouts, and facility rekeys for auto dealers and fleets in Waco and Central Texas. Dealer-friendly rates and fast response.",
  keywords: ["auto dealer locksmith Waco", "fleet key programming Texas", "dealership car keys Waco", "Keyline Locksmith"],
  alternates: { canonical: url },
  openGraph: {
    title: "Locksmiths for Auto Dealers | Keyline Locksmith",
    description: "Vehicle keys and facility access for Central Texas dealers and fleets.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
