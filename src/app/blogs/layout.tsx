import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.keylinelocksmith.com';
const url = `${BASE_URL}/blogs`;

export const metadata: Metadata = {
  title: "Locksmith Blog & Security Tips | Keyline Locksmith Waco TX",
  description:
    "Lockout tips, rekey vs. replace guidance, and smart lock advice for Waco and Central Texas homeowners from Keyline Locksmith.",
  alternates: { canonical: url },
  openGraph: {
    title: "Locksmith Blog | Keyline Locksmith",
    description: "Practical locksmith guidance for Central Texas homeowners.",
    url, siteName: "Keyline Locksmith", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
