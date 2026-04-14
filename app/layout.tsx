import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import SynBot from "@/components/SynBot";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Syncrate",
  description: "Technology that feels calm, not chaotic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
