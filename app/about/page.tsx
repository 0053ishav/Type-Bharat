import Link from "next/link";
import type { Metadata } from "next";

import { getLanguages } from "@/lib/languages/loader";
import Breadcrumbs from "@/components/common/Breadcrumbs";

import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "About TypeBharat | Indian Language Tools",

  description:
    "Learn about TypeBharat and our mission to make Indian language typing, learning, transliteration, and digital language tools easier to use.",

  alternates: {
    canonical: `${SITE_URL}/about`,
  },

  openGraph: {
    title: "About TypeBharat | Indian Language Tools",
    description:
      "Learn about TypeBharat and our mission to make Indian language typing, learning, transliteration, and digital language tools easier to use.",
    url: `${SITE_URL}/about`,
    siteName: "TypeBharat",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About TypeBharat | Indian Language Tools",
    description:
      "Learn about TypeBharat and our mission to make Indian language typing, learning, transliteration, and digital language tools easier to use.",
  },
};

export default function AboutPage() {
  const languages = getLanguages();

  const typingLanguages = languages.filter(
    (language) => language.capabilities.typing,
  );

  const learningLanguages = languages.filter(
    (language) => language.capabilities.learn,
  );

  return (
    <main className="max-w-6xl mx-auto px-6 space-y-24">
       <Breadcrumbs
             items={[
               {
                 name: "Home",
                 path: "/",
               },
               {
                 name: "About",
                 path: "/about",
               },
             ]}
           />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative text-center max-w-4xl mx-auto">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-radial-orange opacity-20 blur-2xl pointer-events-none" />

        <div className="relative">
          <span className="badge badge-gradient inline-block mb-6">
            About TypeBharat
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-text-heading) leading-tight">
            About TypeBharat
          </h1>

          <p className="mt-7 text-xl text-(--color-text-body) max-w-3xl mx-auto leading-relaxed">
            TypeBharat is a platform built to make Indian languages easier to
            type, learn, and use on the web.
          </p>

          <p className="mt-4 text-lg text-(--color-text-muted) max-w-3xl mx-auto leading-relaxed">
            We are building a growing collection of practical tools that help
            people work with Indian languages and native scripts more easily.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHY TYPEBHARAT EXISTS
      ========================================================= */}

      <section className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            The problem
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            Why TypeBharat Exists
          </h2>
        </div>

        <div className="card p-8 md:p-10 space-y-5 text-(--color-text-body) leading-relaxed">
          <p>
            Indian languages are widely used in everyday life, education,
            communication, and creative work, but working with native scripts
            online can still be inconvenient.
          </p>

          <p>
            For many people, typing becomes particularly difficult when they
            are more familiar with an English keyboard than with a native
            keyboard layout.
          </p>

          <p>
            Users may also need different tools for typing, transliteration,
            learning scripts, and understanding how a language works digitally.
          </p>

          <p>
            TypeBharat aims to make these workflows simpler by bringing
            practical Indian-language tools together in one place.
          </p>
        </div>
      </section>

      {/* =========================================================
          CURRENT PRODUCTS
      ========================================================= */}

      <section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            Available today
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            What TypeBharat Offers Today
          </h2>

          <p className="mt-4 text-lg text-(--color-text-muted)">
            TypeBharat currently focuses on making Indian-language typing and
            learning easier to access from the browser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="card p-8 hover-lift">
            <div className="text-4xl mb-5" aria-hidden="true">
              ⌨️
            </div>

            <h3 className="text-2xl font-bold text-(--color-text-heading)">
              Indian Language Typing
            </h3>

            <p className="mt-4 text-(--color-text-body) leading-relaxed">
              Type naturally using an English keyboard and convert phonetic
              input into supported Indian-language scripts. The typing tools
              are designed to make native-script writing accessible without
              requiring users to learn a traditional keyboard layout first.
            </p>

            <Link
              href="/typing"
              className="btn-primary inline-block mt-6"
            >
              Explore Typing Tools →
            </Link>
          </article>

          <article className="card p-8 hover-lift">
            <div className="text-4xl mb-5" aria-hidden="true">
              📖
            </div>

            <h3 className="text-2xl font-bold text-(--color-text-heading)">
              Learn Indian Languages
            </h3>

            <p className="mt-4 text-(--color-text-body) leading-relaxed">
              The learning section provides beginner-friendly information
              about Indian languages and their writing systems, including
              alphabets, vowels, consonants, scripts, numerals, pronunciation,
              and language-specific typing information.
            </p>

            <Link
              href="/learn"
              className="btn-secondary inline-block mt-6"
            >
              Explore Learning Guides →
            </Link>
          </article>
        </div>
      </section>

      {/* =========================================================
          SUPPORTED LANGUAGES
      ========================================================= */}

      <section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
              Growing library
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
              Supported Languages
            </h2>

            <p className="mt-4 text-lg text-(--color-text-muted) max-w-2xl">
              TypeBharat is expanding its language coverage through a shared
              architecture so new languages can be added without creating
              separate versions of the platform.
            </p>
          </div>

          <span className="badge badge-success shrink-0">
            {languages.length} languages
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {languages.map((language) => (
            <article
              key={language.id}
              className="card p-5 hover-lift"
            >
              <div className="flex items-center gap-3">
                <span
                  dir={language.direction}
                  className="text-2xl shrink-0"
                  aria-label={language.nativeName}
                >
                  {language.nativeName}
                </span>

                <div className="min-w-0">
                  <h3 className="font-bold text-(--color-text-heading) truncate">
                    {language.name}
                  </h3>

                  <p className="text-xs text-(--color-text-muted)">
                    {language.script}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {language.capabilities.typing && (
                  <Link
                    href={`/typing/${language.slug}`}
                    className="text-sm font-semibold text-(--color-primary) hover:underline"
                  >
                    Typing →
                  </Link>
                )}

                {language.capabilities.learn && (
                  <Link
                    href={`/learn/${language.slug}`}
                    className="text-sm font-semibold text-(--color-secondary) hover:underline"
                  >
                    Learn →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}

      <section className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            Our approach
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            Practical tools for Indian-language computing
          </h2>
        </div>

        <div className="card p-8 md:p-10 space-y-5 text-(--color-text-body) leading-relaxed">
          <p>
            TypeBharat focuses on browser-based tools that make working with
            Indian languages practical and accessible.
          </p>

          <p>
            That means treating native scripts and Unicode as first-class
            parts of the experience rather than treating Indian languages as
            an afterthought.
          </p>

          <p>
            Phonetic input can provide a familiar starting point for people who
            are comfortable with an English keyboard, while language-specific
            learning resources can help users understand the scripts they are
            working with.
          </p>

          <p>
            As the platform grows, the goal is to support more languages and
            more useful digital language workflows without making each language
            a separate product.
          </p>
        </div>
      </section>

      {/* =========================================================
          FUTURE DIRECTION
      ========================================================= */}

      <section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-gradient inline-block mb-5">
            Future direction
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            What We&rsquo;re Building Toward
          </h2>

          <p className="mt-4 text-lg text-(--color-text-muted)">
            Typing and learning are the starting point. The longer-term goal
            is a broader collection of Indian-language digital utilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: "🌐",
              title: "Translation",
            },
            {
              icon: "📷",
              title: "OCR",
            },
            {
              icon: "🎙️",
              title: "Speech to Text",
            },
            {
              icon: "🔊",
              title: "Text to Speech",
            },
            {
              icon: "✍️",
              title: "AI Writing",
            },
            {
              icon: "🔣",
              title: "Unicode Tools",
            },
            {
              icon: "⌨️",
              title: "Keyboard Tools",
            },
            {
              icon: "🔤",
              title: "Fonts & Language Utilities",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card p-6"
            >
              <div className="text-3xl" aria-hidden="true">
                {item.icon}
              </div>

              <h3 className="mt-4 font-bold text-(--color-text-heading)">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-(--color-text-muted)">
                Planned capability
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          LONG-TERM VISION
      ========================================================= */}

      <section className="text-center">
        <div className="card-gradient-orange rounded-3xl p-10 md:p-14">
          <span className="badge badge-gradient inline-block mb-5">
            Long-term vision
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            One platform for Indian languages
          </h2>

          <p className="mt-5 text-lg text-(--color-text-body) max-w-3xl mx-auto leading-relaxed">
            TypeBharat aims to become a place where people can discover
            practical tools for typing, learning, translation, OCR, speech,
            AI, Unicode, keyboards, and other Indian-language utilities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/typing"
              className="btn-primary"
            >
              Explore Typing Tools →
            </Link>

            <Link
              href="/learn"
              className="btn-secondary"
            >
              Explore Learning Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT COVERAGE SUMMARY
          Keep this useful but avoid turning About into a directory.
      ========================================================= */}

      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
          Start with the tools available today
        </h2>

        <p className="mt-4 text-(--color-text-body) leading-relaxed">
          Explore the languages currently available through TypeBharat&rsquo;s
          typing and learning tools. New languages can be added to the
          platform without changing the underlying page architecture.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {typingLanguages.length > 0 && (
            <Link
              href="/typing"
              className="btn-primary"
            >
              Browse {typingLanguages.length} Typing Tools →
            </Link>
          )}

          {learningLanguages.length > 0 && (
            <Link
              href="/learn"
              className="btn-secondary"
            >
              Browse {learningLanguages.length} Learning Guides →
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}