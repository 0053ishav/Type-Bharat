import Link from "next/link";
import type { Metadata } from "next";
import {
  panjabiVowels,
  panjabiConsonants,
  panjabiSecondaryConsonants,
  panjabiNumerals,
} from "@/data/panjabiLetters";
import FAQ from "@/components/FAQ";
import { LEARN_PANJABI_FAQ } from "@/data/faq";
import Script from "next/script";
import { generateFAQSchema } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "Learn Panjabi Typing (English to Gurmukhi) – Beginner Guide",
  description:
    "Learn how to type Panjabi using English letters. Understand Panjabi language, Gurmukhi script, alphabets, vowels, consonants, and numerals with examples.",
  alternates: {
    canonical: "https://type-bharat.vercel.app/learn-panjabi-typing",
  },
};

export default function LearnPanjabiTypingPage() {
  const faqSchema = generateFAQSchema(LEARN_PANJABI_FAQ);
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      <Script
        id="hindi-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-heading) mb-4">
          Learn Panjabi Typing
        </h1>
        <p className="text-xl text-(--color-text-body) max-w-3xl mx-auto">
          A beginner-friendly guide to typing Panjabi using English letters.
          Understand the Panjabi language, Gurmukhi script, alphabets, and
          typing basics.
        </p>

        <div className="mt-8">
          <Link
            href="/panjabi-typing"
            className="btn-primary text-lg px-8 py-4"
          >
            Start Typing in Panjabi →
          </Link>
        </div>
      </section>

      {/* ABOUT PANJABI LANGUAGE */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          About Panjabi Language
        </h2>

        <div className="card p-8 space-y-4">
          <p>
            Panjabi (ਪੰਜਾਬੀ) is the official language of Panjab state in India
            and is also spoken widely in Himachal Pradesh, Chandigarh, Jammu
            &amp; Kashmir, Haryana, and Delhi. Around{" "}
            <strong>130 million (13 crore)</strong> people speak Panjabi
            worldwide.
          </p>

          <p>
            Panjabi is the <strong>only tonal Indo-Aryan language</strong> and
            evolved from the Prakrit language family.
          </p>

          <p className="badge badge-gradient inline-block">
            Language vs Script
          </p>

          <p>
            What we <strong>speak</strong> is a language (Panjabi). What we{" "}
            <strong>write</strong> is a script (Gurmukhi).
            <br />
            We speak <strong>Panjabi</strong> and write it in the
            <strong> Gurmukhi (ਗੁਰਮੁਖੀ)</strong> script.
          </p>
        </div>
      </section>

      {/* GURMUKHI SCRIPT */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          Gurmukhi Script
        </h2>

        <div className="card p-8 space-y-4">
          <p>
            The <strong>Gurmukhi (ਗੁਰਮੁਖੀ) script</strong> was developed from
            the historic <strong>Landa script</strong>. It is an
            <strong> abugida</strong> writing system and is written from
            <strong> left to right</strong>.
          </p>

          <p>
            The symbol <strong>। (Dandi)</strong> is used to mark the end of a
            sentence, and <strong>॥ (double Dandi)</strong> marks the end of a
            verse.
          </p>

          <p>
            The Gurmukhi script consists of
            <strong> 35 core letters</strong>:
          </p>

          <ul className="list-disc list-inside text-(--color-text-body)">
            <li>32 consonants</li>
            <li>3 vowel holders</li>
          </ul>
        </div>
      </section>

      {/* VOWELS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          Vowels in Panjabi (Vowel Holders)
        </h2>

        <div className="card p-8 space-y-4">
          <p>
            Panjabi has <strong>three vowel holders</strong> used as the base
            for vowel sounds:
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 text-center">
            {panjabiVowels.map(({ letter, sound }) => (
              <div key={letter} className="card p-6 hover-lift">
                <div className="text-4xl font-bold">{letter}</div>
                <div className="mt-2 text-sm text-(--color-text-muted)">
                  {sound}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSONANTS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          Consonants in Panjabi
        </h2>

        <div className="card p-8 space-y-10">
          {/* Primary */}
          <div>
            <h3 className="text-xl font-bold mb-4">Primary Consonants (32)</h3>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {panjabiConsonants.map(({ letter, sound }) => (
                <div key={letter} className="card p-4 text-center hover-lift">
                  <div className="text-2xl font-bold">{letter}</div>
                  <div className="text-xs text-(--color-text-muted) mt-1">
                    {sound}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-xl font-bold mb-4">Secondary Consonants (6)</h3>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {panjabiSecondaryConsonants.map(({ letter, sound }) => (
                <div key={letter} className="card p-4 text-center hover-lift">
                  <div className="text-2xl font-bold">{letter}</div>
                  <div className="text-xs text-(--color-text-muted) mt-1">
                    {sound}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUMERALS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          Gurmukhi (Panjabi) Numerals
        </h2>

        <div className="card p-8 space-y-6">
          <p>
            Panjabi has its own set of numerals used for counting and writing
            numbers.
          </p>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 text-center">
            {panjabiNumerals.map(({ en, pa }) => (
              <div key={en} className="card p-4 hover-lift">
                <div className="text-2xl font-bold mt-1">{pa}</div>
                <div className="text-xs text-(--color-text-muted)">{en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="card-gradient-orange p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-[--color-text-heading]">
            Ready to start typing in Panjabi?
          </h2>
          <p className="text-lg mb-6">
            You don&apos;t need to memorize keyboards. Just type naturally in
            English.
          </p>
          <Link
            href="/panjabi-typing"
            className="btn-primary text-lg px-10 py-4"
          >
            Open Panjabi Typing Tool →
          </Link>
        </div>
      </section>

      <FAQ 
        items={LEARN_PANJABI_FAQ}
        title="Panjabi - Frequently Asked Questions"
      />
    </main>
  );
}
