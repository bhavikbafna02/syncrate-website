import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import SynBot from "@/components/SynBot";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Syncrate: Websites, AI and Automation for Startups",
  description: "We design and build software that doesn't embarrass you. Websites, AI systems, and automations done right, shipped fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-text-primary min-h-screen font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
            <Footer />
            <SynBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
