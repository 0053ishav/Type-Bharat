import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";

import { SITE_URL } from "@/lib/config/site";

const LAST_UPDATED = "September 2, 2026";

const DESCRIPTION =
  "Read the Terms of Service governing use of TypeIndian's Indian-language typing, transliteration, learning, and related browser-based tools.";

export const metadata: Metadata = {
  title: "Terms of Service | TypeIndian",

  description: DESCRIPTION,

  alternates: {
    canonical: `${SITE_URL}/terms`,
  },

  openGraph: {
    title: "Terms of Service | TypeIndian",
    description: DESCRIPTION,
    url: `${SITE_URL}/terms`,
    siteName: "TypeIndian",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | TypeIndian",
    description: DESCRIPTION,
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 space-y-24">
      <Breadcrumbs
        items={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Terms of Service",
            path: "/terms",
          },
        ]}
      />

      <PageSchema
        name="Terms of Service | TypeIndian"
        description={DESCRIPTION}
        path="/terms"
      />

      {/* Header */}
      <header className="mt-10 mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Legal
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-(--color-text-heading)">
          Terms of Service
        </h1>

        <p className="mt-5 text-lg text-(--color-text-body) leading-relaxed">
          These Terms of Service explain the basic terms that apply when you
          access or use TypeIndian and its browser-based Indian-language tools.
        </p>

        <p className="mt-4 text-sm text-(--color-text-muted)">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="space-y-14 text-(--color-text-body) leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            1. About TypeIndian
          </h2>

          <p>
            TypeIndian is a browser-based platform focused on making Indian
            languages easier to type, learn, and use digitally.
          </p>

          <p className="mt-4">
            Current functionality includes English-to-Indian-language phonetic
            typing, transliteration-based typing suggestions, language
            learning resources, alphabet and script information,
            language-specific educational content, FAQs, and browser-based
            copying of generated text.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            2. Acceptance of These Terms
          </h2>

          <p>
            By accessing or using TypeIndian, you agree to use the service in
            accordance with these Terms of Service and applicable laws.
          </p>

          <p className="mt-4">
            If you do not agree with these Terms, please do not use the
            service.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            3. Use of the Service
          </h2>

          <p>
            You may use TypeIndian&apos;s publicly available typing and learning
            tools for lawful purposes.
          </p>

          <p className="mt-4">You must not use TypeIndian to:</p>

          <ul className="mt-5 list-disc pl-6 space-y-3">
            <li>violate applicable laws or regulations;</li>
            <li>interfere with or disrupt the service;</li>
            <li>attempt unauthorized access to systems or infrastructure;</li>
            <li>abuse, attack, or intentionally overload the service;</li>
            <li>
              circumvent reasonable technical restrictions or safeguards; or
            </li>
            <li>
              use automated methods that materially interfere with the service
              unless expressly permitted.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            4. User Input and Generated Text
          </h2>

          <p>
            TypeIndian allows users to enter text into browser-based typing
            tools and receive transliteration or typing suggestions.
          </p>

          <p className="mt-4">
            You are responsible for the text you enter and for how you use
            generated or transliterated output.
          </p>

          <p className="mt-4">
            Transliteration suggestions and generated text may contain errors.
            TypeIndian does not guarantee that generated text will always be
            grammatically, linguistically, or contextually correct.
          </p>

          <p className="mt-4">
            You should review generated text before relying on it, particularly
            where accuracy is important.
          </p>

          <p className="mt-4">
            TypeIndian does not claim ownership of text that you enter into the
            typing interface.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            5. Educational and Language Content
          </h2>

          <p>
            TypeIndian provides educational and informational material relating
            to Indian languages, scripts, alphabets, pronunciation, typing,
            and related language information.
          </p>

          <p className="mt-4">
            This material is provided for general informational and practical
            purposes. We do not guarantee that every educational detail is
            complete, error-free, or suitable as an authoritative linguistic
            reference.
          </p>

          <p className="mt-4">
            Where accuracy is important, users should independently verify
            relevant information.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            6. Third-Party Transliteration Services
          </h2>

          <p>
            Some TypeIndian typing functionality depends on third-party
            transliteration infrastructure, including Google Input Tools, to
            generate typing suggestions.
          </p>

          <p className="mt-4">
            Because this functionality depends on third-party services, its
            availability and behavior may change.
          </p>

          <p className="mt-4">
            TypeIndian does not control third-party services and does not
            guarantee their availability, accuracy, or continued operation.
          </p>

          <p className="mt-4">
            TypeIndian is not an official Google product and does not imply
            endorsement or sponsorship by Google.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            7. Analytics and Other Third-Party Services
          </h2>

          <p>
            TypeIndian uses certain third-party services as part of operating
            and improving the website. The current implementation includes
            Vercel Analytics and Google advertising services.
          </p>

          <p className="mt-4">
            For information about how information is handled through these
            services, please refer to the{" "}
            <Link
              href="/privacy"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <p className="mt-4">
            Third-party services may change independently of TypeIndian.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            8. Intellectual Property
          </h2>

          <p>
            TypeIndian&apos;s original branding, website design, software,
            original written content, graphics, and original educational
            materials are owned by TypeIndian or their respective rights
            holders unless otherwise stated.
          </p>

          <p className="mt-4">
            You receive permission to access and use the service for its
            intended purposes. This does not transfer ownership of TypeIndian&apos;s
            intellectual property to you.
          </p>

          <p className="mt-4">
            Third-party scripts, language standards, fonts, datasets, services,
            and other third-party materials remain subject to their respective
            rights and licenses.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            9. User Content
          </h2>

          <p>
            TypeIndian currently does not provide user accounts, public user
            profiles, public content publishing, document collaboration, or
            cloud document storage.
          </p>

          <p className="mt-4">
            If you enter text into a TypeIndian typing tool, you remain
            responsible for that content and for how you use the resulting
            output.
          </p>

          <p className="mt-4">
            TypeIndian does not obtain ownership of your entered text merely
            because you use the typing interface.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            10. Accuracy and Disclaimer
          </h2>

          <p>
            TypeIndian&apos;s typing tools, transliteration suggestions, and
            educational information are provided for general informational and
            practical use.
          </p>

          <p className="mt-4">We do not guarantee:</p>

          <ul className="mt-5 list-disc pl-6 space-y-3">
            <li>perfect transliteration;</li>
            <li>perfect spelling;</li>
            <li>perfect pronunciation;</li>
            <li>perfect language suggestions;</li>
            <li>perfect educational information;</li>
            <li>complete language coverage; or</li>
            <li>uninterrupted availability.</li>
          </ul>

          <p className="mt-5">
            Important information should be independently verified before being
            relied upon.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            11. Availability and Changes to the Service
          </h2>

          <p>
            TypeIndian may modify features, improve the service, temporarily
            suspend parts of the service, remove outdated functionality, add
            or remove supported languages, perform maintenance, or change how
            particular features operate.
          </p>

          <p className="mt-4">
            We do not promise a specific uptime or service level, and we do not
            promise that any particular feature or language will remain
            available permanently.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            12. Pricing and Advertising
          </h2>

          <p>TypeIndian is currently available without charge.</p>

          <p className="mt-4">
            This does not constitute a promise that all TypeIndian features
            will remain free indefinitely.
          </p>

          <p className="mt-4">
            TypeIndian may display advertising through third-party advertising
            services, including Google advertising services. The availability,
            format, and behavior of advertising may change over time.
          </p>

          <p className="mt-4">
            Advertising-related technologies and information practices are
            described in the{" "}
            <Link
              href="/privacy"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            13. Third-Party Links and Services
          </h2>

          <p>
            TypeIndian may link to or use external services required for
            particular functionality.
          </p>

          <p className="mt-4">
            These services operate under their own terms and privacy policies.
            TypeIndian does not control third-party services and is not
            responsible for services or websites that it does not operate.
          </p>
        </section>

        {/* 14 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            14. Privacy
          </h2>

          <p>
            Your use of TypeIndian is also subject to our Privacy Policy. The
            Privacy Policy explains how information may be processed through
            the website, browser storage, analytics, transliteration services,
            advertising technologies, and other third-party services.
          </p>

          <div className="mt-6">
            <Link href="/privacy" className="btn-secondary inline-flex">
              Read the Privacy Policy →
            </Link>
          </div>
        </section>

        {/* 15 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            15. Disclaimer of Warranties
          </h2>

          <p>
            TypeIndian is provided on an &quot;as available&quot; basis.
          </p>

          <p className="mt-4">
            To the extent permitted by applicable law, we do not guarantee that
            the service will always be error-free, continuously available,
            completely accurate, or uninterrupted.
          </p>

          <p className="mt-4">
            Nothing in these Terms is intended to exclude or limit rights or
            protections that cannot lawfully be excluded or limited.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            16. Limitation of Liability
          </h2>

          <p>
            To the extent permitted by applicable law, TypeIndian and its
            operators will not be responsible for losses arising from reliance
            on automated output, educational content, temporary service
            interruptions, third-party services, or use of the service.
          </p>

          <p className="mt-4">
            This section is intended to operate only to the extent permitted
            under applicable law and should not be interpreted as removing
            rights that cannot legally be excluded.
          </p>

          <p className="mt-4 text-sm text-(--color-text-muted)">
            This provision should be reviewed for the jurisdiction and legal
            structure applicable to TypeIndian before relying on it as a final
            legal provision.
          </p>
        </section>

        {/* 17 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            17. Restriction of Access
          </h2>

          <p>
            TypeIndian may restrict or suspend access to the service when
            reasonably necessary, including in response to abuse, security
            threats, attempts to disrupt the service, violations of these
            Terms, or legal requirements.
          </p>

          <p className="mt-4">
            Because TypeIndian currently does not use user accounts, this does
            not create an account-termination process.
          </p>
        </section>

        {/* 18 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            18. Changes to These Terms
          </h2>

          <p>
            We may update these Terms as TypeIndian develops and changes.
          </p>

          <p className="mt-4">
            When changes are made, the updated version will be published on
            this page with a revised &quot;Last updated&quot; date.
          </p>
        </section>

        {/* 19 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            19. Contact
          </h2>

          <p>
            Questions about these Terms can be directed to TypeIndian using
            the official contact method published on our Contact page.
          </p>

          <div className="mt-6">
            <Link href="/contact" className="btn-secondary inline-flex">
              Contact TypeIndian →
            </Link>
          </div>
        </section>
      </div>

      {/* Legal navigation */}
      <nav
        aria-label="Legal navigation"
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
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
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
            aria-current="page"
            className="font-medium text-(--color-text-heading)"
          >
            Terms of Service
          </Link>
        </div>
      </nav>
    </main>
  );
}