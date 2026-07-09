import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/blogs/smart-locks-for-rentals-texas`;

export const metadata: Metadata = {
  title: "Smart Locks for Rentals in Texas | Keyline Locksmith",
  description: "What landlords and property managers should know about smart locks for Central Texas rentals — codes, batteries, and turnover workflows.",
  alternates: { canonical: url },
  openGraph: {
    title: "Smart Locks for Rentals in Texas",
    description: "Practical smart lock guidance for Texas landlords and PMs.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
