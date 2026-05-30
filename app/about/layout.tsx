import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small technical studio building fast websites, AI tools, and automations. We keep the client list short and focus on what actually works.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
