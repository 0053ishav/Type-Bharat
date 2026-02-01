import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Indian Language Typing – TypeBharat",
  description:
    "Learn how to type Indian languages using English letters. Beginner-friendly guides for Panjabi (Gurmukhi), Hindi (Devanagari), and more languages coming soon.",
  alternates: {
    canonical: "https://type-bharat.vercel.app/learn",
  },
};

export default function LearnIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-heading) mb-6">
          Learn Indian Language Typing
        </h1>

        <p className="text-xl text-(--color-text-body) max-w-3xl mx-auto">
          Step-by-step beginner guides to help you type Indian languages using
          English letters. Learn scripts, letters, sounds, and typing basics —
          then practice instantly.
        </p>
      </section>

      {/* LANGUAGE CARDS */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Panjabi */}
        <div className="card p-8 hover-lift">
          <h2 className="text-2xl font-bold text-(--color-text-heading) mb-3">
            Learn Panjabi Typing
          </h2>

          <p className="text-(--color-text-body) mb-6">
            Learn how to type Panjabi using English letters. Understand the
            Gurmukhi script, vowels, consonants, numerals, and phonetic typing
            rules with clear examples.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/learn/panjabi" className="btn-secondary">
              Learn Panjabi →
            </Link>

            <Link href="/panjabi-typing" className="btn-primary">
              Start Typing →
            </Link>
          </div>
        </div>

        {/* Hindi */}
        <div className="card p-8 hover-lift">
          <h2 className="text-2xl font-bold text-(--color-text-heading) mb-3">
            Learn Hindi Typing
          </h2>

          <p className="text-(--color-text-body) mb-6">
            Learn how to type Hindi using English letters. Explore the
            Devanagari script, vowels, consonants, matras, and phonetic typing
            patterns step by step.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/learn/hindi" className="btn-secondary">
              Learn Hindi →
            </Link>

            <Link href="/hindi-typing" className="btn-primary">
              Start Typing →
            </Link>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-(--color-text-heading) mb-4">
          More languages coming soon
        </h3>

        <p className="text-(--color-text-muted) max-w-2xl mx-auto">
          We are expanding TypeBharat to support more Indian languages including
          Tamil, Telugu, Bengali, Gujarati, Marathi, Kannada, and Malayalam.
          Each language will include a full learning guide and typing tool.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="card-gradient-orange p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-(--color-text-heading)">
            Ready to start typing?
          </h2>

          <p className="text-lg mb-6">
            You don’t need to learn keyboard layouts. Just type naturally in
            English.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/panjabi-typing" className="btn-primary">
              Panjabi Typing →
            </Link>

            <Link href="/hindi-typing" className="btn-secondary">
              Hindi Typing →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
