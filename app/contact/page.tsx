import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";
import { SITE_URL } from "@/lib/config/site";
import { EMAIL } from "@/lib/config/email";

const LAST_UPDATED = "August 21, 2026";

export const metadata: Metadata = {
  title: "Contact TypeBharat | Indian Language Typing & Learning",
  description:
    "Contact TypeBharat for feedback, bug reports, language corrections, and questions about our Indian language typing and learning tools.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact TypeBharat | Indian Language Typing & Learning",
    description:
      "Contact TypeBharat for feedback, bug reports, language corrections, and questions about our Indian language typing and learning tools.",
    url: `${SITE_URL}/contact`,
    siteName: "TypeBharat",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TypeBharat | Indian Language Typing & Learning",
    description:
      "Contact TypeBharat for feedback, bug reports, language corrections, and questions about our Indian language typing and learning tools.",
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 space-y-24">
      <Breadcrumbs
        items={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Contact",
            path: "/contact",
          },
        ]}
      />

      <PageSchema
        name="Contact TypeBharat"
        description="Contact TypeBharat for feedback, bug reports, language corrections, and questions about our Indian language typing and learning tools."
        path="/contact"
      />

      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Get in touch
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-(--color-text-heading)">
          Contact TypeBharat
        </h1>

        <p className="mt-5 text-lg text-(--color-text-body) leading-relaxed">
          Have feedback, found a bug, or noticed something that could be
          improved? We welcome feedback about TypeBharat&apos;s typing tools,
          language content, and learning resources.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Get in touch */}
        <section className="card p-8">
          <h2 className="text-2xl font-bold text-(--color-text-heading)">
            Get in Touch
          </h2>

          <p className="mt-4 text-(--color-text-body) leading-relaxed">
            For questions, feedback, bug reports, and other website-related
            concerns, contact TypeBharat using the official contact method
            below.
          </p>

          <div className="mt-6 rounded-xl border border-(--color-border) bg-(--color-bg-card) p-5">
            <p className="text-sm text-(--color-text-muted)">
              Official contact email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-(--color-primary) hover:underline break-all"
            >
              {EMAIL}
            </a>
          </div>

          <p className="mt-5 text-sm text-(--color-text-muted)">
            Please avoid sending passwords, authentication credentials,
            financial information, or other highly sensitive information.
          </p>
        </section>

        {/* Feedback */}
        <section className="card p-8">
          <h2 className="text-2xl font-bold text-(--color-text-heading)">
            Feedback
          </h2>

          <p className="mt-4 text-(--color-text-body) leading-relaxed">
            Useful feedback helps improve TypeBharat. You can report issues or
            suggest improvements related to:
          </p>

          <ul className="mt-5 list-disc pl-6 space-y-3 text-(--color-text-body)">
            <li>Typing and transliteration</li>
            <li>Language support</li>
            <li>Learning content</li>
            <li>Alphabet and script information</li>
            <li>Website usability</li>
            <li>Accessibility</li>
          </ul>
        </section>
      </div>

      {/* Language corrections */}
      <section className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
          Language Content Corrections
        </h2>

        <p className="mt-5 text-(--color-text-body) leading-relaxed">
          TypeBharat publishes information about Indian languages, scripts,
          alphabets, and related learning material. If you notice incorrect
          information, missing content, pronunciation issues, or unexpected
          transliteration behavior, you can report it to us.
        </p>

        <p className="mt-4 text-(--color-text-body) leading-relaxed">
          Corrections and suggestions are reviewed before changes are made to
          the published content.
        </p>
      </section>

      {/* Before contacting */}
      <section className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
          Before Contacting
        </h2>

        <p className="mt-5 text-(--color-text-body) leading-relaxed">
          For technical issues, including a few useful details can make the
          problem easier to understand.
        </p>

        <ul className="mt-5 list-disc pl-6 space-y-3 text-(--color-text-body)">
          <li>The page URL where the issue occurred</li>
          <li>The language you were using</li>
          <li>Your browser or device</li>
          <li>What you expected to happen</li>
          <li>What actually happened</li>
          <li>Steps to reproduce the issue, if possible</li>
        </ul>

        <p className="mt-5 text-sm text-(--color-text-muted)">
          Please do not include passwords, financial information, or other
          sensitive personal information when reporting an issue.
        </p>
      </section>

      {/* Product links */}
      <section className="card-gradient-orange rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-(--color-text-heading)">
          Explore TypeBharat
        </h2>

        <p className="mt-3 text-(--color-text-body)">
          You can also explore the typing tools and language learning resources
          before getting in touch.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/typing" className="btn-primary">
            Explore Typing Tools →
          </Link>

          <Link href="/learn" className="btn-secondary">
            Explore Learning Guides →
          </Link>
        </div>
      </section>

      {/* Legal navigation */}
      <nav
        aria-label="Legal and company navigation"
        className="mt-16 pt-8 border-t border-(--color-border)"
      >
        <div className="flex flex-wrap gap-5 text-sm">
          <Link
            href="/about"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            About
          </Link>

          <Link
            href="/contact"
            aria-current="page"
            className="font-medium text-(--color-text-heading)"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            Terms of Service
          </Link>
        </div>
      </nav>

      <p className="pb-12 text-xs text-(--color-text-muted)">
        Last updated: {LAST_UPDATED}
      </p>
    </main>
  );
}
