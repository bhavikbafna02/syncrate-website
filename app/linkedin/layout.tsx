import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Optimization",
  description:
    "Turn your LinkedIn profile into a lead-generating asset. Get keyword mapping, headline optimization, story-based copywriting, and custom banner designs.",
  alternates: {
    canonical: "/linkedin",
  },
};

export default function LinkedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
