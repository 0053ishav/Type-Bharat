import FAQ from "@/components/FAQ";
import LearnTypingLink from "@/components/LearnTypingLink";
import PanjabiLetters from "@/components/PanjabiLetters";
import TypingTool from "@/components/TypingTool";
import { PANJABI_FAQ } from "@/data/faq";
import { generateFAQSchema } from "@/lib/faqSchema";

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Panjabi Typing Tool (English to Panjabi)",
  description:
    "Free English to Panjabi typing tool. Type in English and instantly write in Panjabi (Gurmukhi script). No login. No tracking. Fast and accurate transliteration.",

  keywords: [
    "English to Panjabi typing",
    "Panjabi typing online",
    "Gurmukhi typing tool",
    "Punjabi typing",
    "phonetic Panjabi typing",
    "TypeBharat Panjabi",
    "Panjabi typing",
    "Panjabi transliteration",
  ],

  openGraph: {
    title: "Panjabi Typing Tool — TypeBharat",
    description:
      "Type in English and write in Panjabi instantly. Free Panjabi (Gurmukhi) typing tool with real-time suggestions.",
    url: "https://type-bharat.vercel.app/panjabi-typing",
    siteName: "TypeBharat",
    locale: "pa_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Panjabi Typing Tool — TypeBharat",
    description:
      "English to Panjabi typing made simple. Free, fast, and privacy-first.",
  },
  alternates: {
    canonical: "https://type-bharat.vercel.app/panjabi-typing",
  },
};

export default function PanjabiTypingPage() {
  const faqSchema = generateFAQSchema(PANJABI_FAQ);
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 mt-6 flex justify-between text-sm">
        <Link href="/" className="text-(--color-text-muted) hover:underline">
          ← Home
        </Link>

        <Link
          href="/hindi-typing"
          className="text-(--color-text-muted) hover:underline"
        >
          Hindi
        </Link>
      </div>

      <LearnTypingLink
        href="/learn/panjabi"
        label="Learn Panjabi Typing (Gurmukhi)"
        description="Understand Panjabi letters, sounds, and typing basic"
      />
      <Script
        id="panjabi-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="max-w-3xl mx-auto px-6 mt-10 mb-6">
        <p className="text-lg text-(--color-text-body) leading-relaxed">
          This Panjabi typing tool lets you write{" "}
          <strong>Panjabi using English letters</strong>. Type naturally in
          English and get instant output in
          <strong> ਪੰਜਾਬੀ (Gurmukhi script)</strong>. No downloads, no login,
          and no tracking — a fast and accurate English to Panjabi
          transliteration tool.
        </p>
      </section>

      <TypingTool
        langCode="pa"
        title="Panjabi Typing Tool"
        subtitle="Type in English and convert instantly to ਪੰਜਾਬੀ"
        LettersComponent={PanjabiLetters}
      />
      <FAQ items={PANJABI_FAQ} title="Panjabi - Frequently Asked Questions" />
    </main>
  );
}
