import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/blogs/rekey-vs-replace-locks`;

export const metadata: Metadata = {
  title: "Rekey vs. Replace Locks | Keyline Locksmith Waco TX",
  description: "When to rekey existing locks vs. replace hardware after a move, lost keys, or tenant turnover in Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Rekey vs. Replace Locks",
    description: "Clear guidance for homeowners and landlords deciding rekey vs. replace.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
