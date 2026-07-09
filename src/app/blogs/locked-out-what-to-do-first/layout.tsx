import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/blogs/locked-out-what-to-do-first`;

export const metadata: Metadata = {
  title: "Locked Out? What To Do First in Waco TX | Keyline Locksmith",
  description: "What to do first when locked out of your home, office, or car in Waco, TX. Safety tips, avoid damage, and when to call a licensed locksmith.",
  alternates: { canonical: url },
  openGraph: {
    title: "Locked Out? What To Do First in Waco TX",
    description: "Practical first steps for home, office, and car lockouts in Central Texas.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
