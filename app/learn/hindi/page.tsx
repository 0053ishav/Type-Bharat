import Link from "next/link";
import type { Metadata } from "next";
import {
  hindiVowels,
  hindiConsonants,
  hindiSecondaryConsonants,
  hindiNumerals,
  //   hindiNumerals,
} from "@/data/hindiLetters";
import FAQ from "@/components/FAQ";
import { LEARN_HINDI_FAQ } from "@/data/faq";
import Script from "next/script";
import { generateFAQSchema } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "Learn Hindi Typing (English to Devanagari) – Beginner Guide",
  description:
    "Learn how to type Hindi using English letters. Understand the Hindi language, Devanagari script, alphabets, vowels, consonants, and numerals with examples.",
  alternates: {
    canonical: "https://type-bharat.vercel.app/learn/hindi",
  },
};

export default function LearnHindiTypingPage() {
  const faqSchema = generateFAQSchema(LEARN_HINDI_FAQ);
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
          Learn Hindi Typing
        </h1>
        <p className="text-xl text-[--color-text-body] max-w-3xl mx-auto">
          A beginner-friendly guide to typing Hindi using English letters. Learn
          about the Hindi language, Devanagari script, alphabets, and typing
          basics.
        </p>

        <div className="mt-8">
          <Link href="/hindi-typing" className="btn-primary text-lg px-8 py-4">
            Start Typing in Hindi →
          </Link>
        </div>
      </section>

      {/* ABOUT HINDI LANGUAGE */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          About Hindi Language
        </h2>

        <div className="card p-8 space-y-4">
          <p>
            Hindi (हिन्दी) is one of the most widely spoken languages in India
            and serves as an official language of the Indian government. It is
            spoken by over <strong>600 million people</strong> worldwide.
          </p>

          <p>
            Hindi belongs to the <strong>Indo-Aryan language family</strong>
            and evolved from Sanskrit and Prakrit languages.
          </p>

          <p className="badge badge-gradient inline-block">
            Language vs Script
          </p>

          <p>
            What we <strong>speak</strong> is Hindi (language). What we{" "}
            <strong>write</strong> is Devanagari (script).
            <br />
            We speak <strong>Hindi</strong> and write it in the
            <strong> Devanagari (देवनागरी)</strong> script.
          </p>
        </div>
      </section>

      {/* DEVANAGARI SCRIPT */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          Devanagari Script
        </h2>

        <div className="card p-8 space-y-4">
          <p>
            The <strong>Devanagari (देवनागरी) script</strong> is used to write
            Hindi, Sanskrit, Marathi, and several other Indian languages. It is
            an <strong>abugida</strong> writing system.
          </p>

          <p>
            Devanagari is written from <strong>left to right</strong> and uses a
            distinctive horizontal line called the <strong>Shirorekha</strong>.
          </p>

          <p>The Devanagari script used for Hindi consists of:</p>

          <ul className="list-disc list-inside text-(--color-text-body)">
            <li>Vowels (स्वर)</li>
            <li>Consonants (व्यंजन)</li>
            <li>Matras (vowel signs)</li>
          </ul>
        </div>
      </section>

      {/* VOWELS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          Vowels in Hindi (स्वर)
        </h2>

        <div className="card p-8 space-y-4">
          <p>
            Hindi vowels represent pure sounds and form the foundation of
            pronunciation in the Devanagari script.
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-center">
            {hindiVowels.map(({ letter, sound }) => (
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
          Consonants in Hindi (व्यंजन)
        </h2>
        <div className="card p-8 space-y-10">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {hindiConsonants.map(({ letter, sound }) => (
              <div key={letter} className="card p-4 text-center hover-lift">
                <div className="text-2xl font-bold">{letter}</div>
                <div className="text-xs text-(--color-text-muted) mt-1">
                  {sound}
                </div>
              </div>
            ))}
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-xl font-bold mb-4">Secondary Consonants (6)</h3>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {hindiSecondaryConsonants.map(({ letter, sound }) => (
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
          Devanagari (Hindi) Numerals
        </h2>

        <div className="card p-8 space-y-6">
          <p>Hindi uses Devanagari numerals for traditional number writing.</p>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 text-center">
            {hindiNumerals.map(({ en, hi }) => (
              <div key={en} className="card p-4 hover-lift">
                <div className="text-2xl font-bold">{hi}</div>
                <div className="text-xs text-(--color-text-muted)">{en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="card-gradient-orange p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-(--color-text-heading)">
            Ready to start typing in Hindi?
          </h2>
          <p className="text-lg mb-6">
            Type naturally in English and get instant Hindi output.
          </p>
          <Link href="/hindi-typing" className="btn-primary text-lg px-10 py-4">
            Open Hindi Typing Tool →
          </Link>
        </div>
      </section>

      <FAQ items={LEARN_HINDI_FAQ} title="Hindi - Frequently Asked Questions" />
    </main>
  );
}
