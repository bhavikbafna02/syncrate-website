import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We offer web development, SEO optimization, UI/UX design, and LinkedIn growth. Focused expertise with zero agency overhead.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
