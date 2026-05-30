import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Is your website actually converting visitors? Get an instant, AI-powered audit of your website's UX, speed, SEO, and positioning.",
  alternates: {
    canonical: "/audit",
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
