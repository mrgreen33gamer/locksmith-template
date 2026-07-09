import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/industries/retail-security`;

export const metadata: Metadata = {
  title: "Locksmith for Retail Security | Keyline Locksmith Waco TX",
  description: "Storefront hardware, rekeys, lockouts, and safe service for retail locations across Central Texas. After-hours installs available.",
  keywords: ["retail locksmith Waco", "storefront lock change Texas", "retail safe locksmith", "Keyline Locksmith"],
  alternates: { canonical: url },
  openGraph: {
    title: "Locksmith for Retail Security | Keyline Locksmith",
    description: "After-hours retail access and safe security for Central Texas stores.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
