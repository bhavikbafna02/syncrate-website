import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import SynBot from "@/components/SynBot";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Syncrate — Websites, AI Tools & Automations Done Right",
    template: "%s | Syncrate",
  },
  description:
    "A small technical studio building fast websites, AI tools, and automations. No agency overhead. Fixed quotes after a single call.",
  metadataBase: new URL("https://syncrate.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syncrate — Websites, AI Tools & Automations Done Right",
    description:
      "A small technical studio building fast websites, AI tools, and automations. No agency overhead.",
    url: "https://syncrate.com",
    siteName: "Syncrate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syncrate — Websites, AI Tools & Automations Done Right",
    description:
      "A small technical studio building fast websites, AI tools, and automations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <SynBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
