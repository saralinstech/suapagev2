import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suapage Bio",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://suapagev2.vercel.app/suapage-bio" },
};

export default function LegacyBioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
