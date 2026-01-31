import FAQ from "@/components/FAQ";
import HindiLetters from "@/components/HindiLetters";
import LearnTypingLink from "@/components/LearnTypingLink";
import TypingTool from "@/components/TypingTool";
import { HINDI_FAQ } from "@/data/faq";
import { generateFAQSchema } from "@/lib/faqSchema";

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hindi Typing Tool (English to Hindi)",
  description:
    "Free English to Hindi typing tool. Type in English and instantly write in Hindi (Devanagari script). No login. No tracking. Accurate phonetic typing.",

  keywords: [
    "English to Hindi typing",
    "Hindi typing online",
    "Hindi transliteration",
    "phonetic Hindi typing",
    "TypeBharat Hindi",
    "Hindi typing",
    "Devanagari typing tool",
  ],

  openGraph: {
    title: "Hindi Typing Tool — TypeBharat",
    description:
      "Type in English and write in Hindi instantly. Free Hindi (Devanagari) typing tool with real-time conversion.",
    url: "https://typebharat.com/hindi-typing",
    siteName: "TypeBharat",
    locale: "hi_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hindi Typing Tool — TypeBharat",
    description:
      "English to Hindi typing made easy. Free, fast, and privacy-first.",
  },
  alternates: {
    canonical: "https://typebharat.com/hindi-typing",
  },
};

export default function HindiTypingPage() {
  const faqSchema = generateFAQSchema(HINDI_FAQ);
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 mt-6 flex justify-between text-sm">
        <Link href="/" className="text-(--color-text-muted) hover:underline">
          ← Home
        </Link>

        <Link
          href="/panjabi-typing"
          className="text-(--color-text-muted) hover:underline"
        >
          Panjabi
        </Link>
      </div>
      <LearnTypingLink
        href="/learn/hindi"
        label="Learn Hindi Typing (Devanagari)"
        description="Understand Hindi letters, sounds, and typing basic"
      />
      <Script
        id="hindi-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="max-w-3xl mx-auto px-6 mt-10 mb-6">
        <p className="text-lg text-(--color-text-body) leading-relaxed">
          This Hindi typing tool helps you write{" "}
          <strong>Hindi using English letters</strong>. Simply type words
          phonetically in English and they instantly convert into
          <strong> हिन्दी (Devanagari script)</strong>. No keyboard
          installation, no login, and no tracking — fast, accurate, and
          privacy-first Hindi transliteration.
        </p>
      </section>
      <TypingTool
        langCode="hi"
        title="Hindi Typing Tool"
        subtitle="Type in English and convert instantly to हिन्दी"
        LettersComponent={HindiLetters}
      />
      <FAQ items={HINDI_FAQ} title="Hindi - Frequently Asked Questions" />
    </main>
  );
}