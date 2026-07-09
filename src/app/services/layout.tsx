import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Locksmith Services | Lockouts, Rekey, Smart Locks & More | Keyline Locksmith",
  description:
    "Keyline Locksmith offers emergency lockouts, rekey & lock change, smart lock installation, car keys & fobs, commercial access control, and safe services for Waco and Central Texas. Licensed, bonded & insured. 24/7 emergency response.",
  keywords: [
    "locksmith services Waco TX",
    "emergency lockout Waco",
    "rekey locks Central Texas",
    "smart lock installation Waco",
    "car key programming Waco",
    "Keyline Locksmith",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Locksmith Services | Keyline Locksmith Waco TX",
    description:
      "Lockouts, rekey, smart locks, car keys, commercial access, and safes for Waco and Central Texas. Licensed, 24/7 Emergency Response · Workmanship Guaranteed.",
    url,
    siteName: "Keyline Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locksmith Services | Keyline Locksmith",
    description: "Lockouts, rekey, smart locks, car keys & more for Central Texas. Licensed & insured.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
