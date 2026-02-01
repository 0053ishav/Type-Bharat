import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   Global SEO Metadata
========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://type-bharat.vercel.app"),

  title: {
    default: "TypeBharat — English to Indian Language Typing Tool",
    template: "%s | TypeBharat",
  },

  description:
    "TypeBharat is a free English to Indian language typing tool. Type in English and instantly write in Panjabi, Hindi, and more Indian languages. No login. No tracking.",

  keywords: [
    "English to Hindi typing",
    "English to Panjabi typing",
    "Indian language typing tool",
    "phonetic typing",
    "transliteration tool",
    "Hindi typing online",
    "Panjabi typing online",
    "TypeBharat",
  ],

  authors: [{ name: "TypeBharat" }],
  creator: "TypeBharat",
  verification: {
    google: 'TenoyS5nmTIbgNrZ9uIRxNNCTbOgohZebisrGPFdRLM',
  },

  openGraph: {
    title: "TypeBharat — English to Indian Language Typing Tool",
    description:
      "Type in English and write in Indian languages instantly. Free, fast, and privacy-first typing tool for Panjabi, Hindi, and more.",
    url: "https://type-bharat.vercel.app",
    siteName: "TypeBharat",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TypeBharat — English to Indian Language Typing Tool",
    description:
      "Type in English and write in Indian languages instantly. No login. No tracking. Free forever.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main
          id="main-content"
          className="min-h-screen"
        >
          {children}
        </main>
        <Footer />
      <Analytics />
      </body>
    </html>
  );
}