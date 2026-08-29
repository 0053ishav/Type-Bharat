import Link from "next/link";
import type { Metadata } from "next";

import { SITE_URL } from "@/lib/config/site";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";
import { EMAIL } from "@/lib/config/email";

const LAST_UPDATED = "August 21, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | TypeBharat",

  description:
    "Learn how TypeBharat handles information, browser storage, analytics, third-party transliteration services, and advertising technologies.",

  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },

  openGraph: {
    title: "Privacy Policy | TypeBharat",
    description:
      "Learn how TypeBharat handles information, browser storage, analytics, third-party transliteration services, and advertising technologies.",
    url: `${SITE_URL}/privacy`,
    siteName: "TypeBharat",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TypeBharat",
    description:
      "Learn how TypeBharat handles information, browser storage, analytics, third-party transliteration services, and advertising technologies.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 space-y-24">
      {/* Breadcrumb */}
      <Breadcrumbs
        items={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Privacy Policy",
            path: "/privacy",
          },
        ]}
      />

      <PageSchema
        name="Privacy Policy | TypeBharat"
        description="Learn how TypeBharat handles information, browser storage, analytics, third-party transliteration services, and advertising technologies."
        path="/privacy"
      />

      {/* Header */}
      <header className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Legal
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-(--color-text-heading)">
          Privacy Policy
        </h1>

        <p className="mt-5 text-lg text-(--color-text-body) leading-relaxed">
          This Privacy Policy explains how TypeBharat handles information in
          connection with its browser-based Indian language typing,
          transliteration, and learning tools.
        </p>

        <p className="mt-4 text-sm text-(--color-text-muted)">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="space-y-14 text-(--color-text-body) leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            1. Information We Collect
          </h2>

          <p>
            TypeBharat does not currently require users to create an account or
            log in to use its core typing and learning features. We do not
            currently operate a user profile, password, account, or cloud
            document system.
          </p>

          <p className="mt-4">
            Information may nevertheless be processed automatically when you use
            the website. Depending on the feature and service involved, this can
            include information associated with website usage, browser or device
            activity, and text submitted to third-party services to provide
            transliteration suggestions.
          </p>

          <p className="mt-4">
            TypeBharat does not currently operate a database of user accounts or
            permanently store user typing sessions as part of a user account.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            2. How We Use Information
          </h2>

          <p>
            Information processed through TypeBharat is used to operate,
            maintain, improve, and understand the website and its features.
          </p>

          <p className="mt-4">
            This includes providing typing and transliteration functionality,
            maintaining browser-based application state, understanding website
            usage and performance, and supporting the operation of the platform.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            3. Typing and Transliteration
          </h2>

          <p>
            TypeBharat provides browser-based typing tools that allow users to
            enter text using an English keyboard and receive output in supported
            Indian-language scripts.
          </p>

          <p className="mt-4">
            To generate transliteration suggestions, TypeBharat may send text
            entered into the typing tool to a third-party transliteration
            service operated by Google. This service is accessed through the
            Google Input Tools request endpoint.
          </p>

          <p className="mt-4">
            This means we cannot accurately describe the typing experience as
            one in which entered text is never transmitted to a third party.
          </p>

          <p className="mt-4">
            TypeBharat does not control Google&apos;s handling or retention of
            information submitted to Google&apos;s services. For information
            about Google&apos;s privacy practices, please review{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            4. Browser Storage
          </h2>

          <p>
            TypeBharat may use browser-side storage, including localStorage, for
            application and session-related functionality.
          </p>

          <p className="mt-4">
            Information stored in this way is stored by your browser on your
            device rather than as a TypeBharat user account in a server-side
            profile database.
          </p>

          <p className="mt-4">
            Clearing the relevant browser or site data can remove information
            stored locally by the application.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            5. Analytics
          </h2>

          <p>
            TypeBharat currently uses Vercel Analytics to understand website
            usage, traffic, and performance.
          </p>

          <p className="mt-4">
            We do not make claims about specific analytics data fields,
            identifiers, retention periods, or processing practices beyond what
            is documented by the applicable provider.{" "}
          </p>

          <p className="mt-4">
            For additional information, users should review Vercel&apos;s
            applicable privacy documentation.
          </p>
          <p className="mt-4">
            For information about how Vercel handles information, please see the{" "}
            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Vercel Privacy Notice
            </a>
            .
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            6. Hosting and Infrastructure
          </h2>

          <p>
            TypeBharat is hosted and deployed using Vercel infrastructure.
            Information required by hosting and infrastructure providers to
            deliver and operate a website may be processed as part of serving
            requests.
          </p>

          <p className="mt-4">
            This hosting infrastructure is separate from Vercel Analytics, which
            is used for website usage and performance analytics.
          </p>

          <p className="mt-4">
            TypeBharat does not make claims about specific infrastructure logs,
            retention periods, identifiers, or other provider-side processing
            unless those details are verified from the applicable provider
            documentation.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            7. Advertising
          </h2>

          <p>
            TypeBharat is preparing for advertising as part of the
            platform&apos;s future production and monetization plans.
          </p>

          <p className="mt-4">
            Advertising services are not described here as currently active
            unless and until they are enabled on the website.
          </p>

          <p className="mt-4">
            If advertising is enabled, this Privacy Policy will be reviewed and
            updated to accurately describe the advertising provider, applicable
            technologies, user choices, and relevant privacy information.
          </p>

          <p className="mt-4">
            This policy will be updated when advertising is actually enabled to
            accurately describe the advertising configuration and available user
            controls.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            8. Third-Party Services
          </h2>

          <p>
            TypeBharat currently relies on third-party services for certain
            parts of the website.
          </p>

          <ul className="mt-5 list-disc pl-6 space-y-3">
            <li>
              <strong>Google Input Tools:</strong> used to provide
              transliteration suggestions for supported languages.
            </li>

            <li>
              <strong>Vercel Analytics:</strong> used to understand website
              usage and performance.
            </li>
          </ul>

          <p className="mt-5">
            Third-party services operate under their own privacy policies and
            terms. TypeBharat does not control the privacy practices of those
            providers.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            9. Data Retention
          </h2>

          <p>
            TypeBharat does not currently operate a user-account database with a
            defined retention period for user profiles or saved documents.
          </p>

          <p className="mt-4">
            Information stored locally by the browser remains subject to the
            browser&apos;s storage behavior and can generally be removed by
            clearing the relevant site or browser data.
          </p>

          <p className="mt-4">
            TypeBharat does not control the retention practices of third-party
            services used by the website. Their respective privacy policies
            describe their handling and retention practices.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            10. Data Security
          </h2>

          <p>
            We take reasonable measures to protect information processed through
            the service and to maintain the security and reliability of the
            website.
          </p>

          <p className="mt-4">
            However, no internet service or method of electronic transmission
            can be guaranteed to be completely secure.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            11. Children&apos;s Privacy
          </h2>

          <p>
            TypeBharat is a general-purpose website and does not currently
            operate an account-registration or age-verification system.
          </p>

          <p className="mt-4">
            We do not knowingly request personal information from children
            through an account-registration process.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            12. Your Choices
          </h2>

          <p>
            You can choose whether to use TypeBharat&apos;s typing and learning
            features. You can also clear browser or site storage through your
            browser settings.
          </p>

          <p className="mt-4">
            Where third-party services are involved, privacy and advertising
            controls provided by those services may also apply.
          </p>

          <p className="mt-4">
            Google provides privacy controls through its own services, including
            controls for certain advertising and personalization settings. See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            13. External Links
          </h2>

          <p>
            TypeBharat may link to external websites and third-party services.
            Those websites operate independently and may have their own privacy
            policies, terms, cookies, and data practices.
          </p>

          <p className="mt-4">
            We recommend reviewing the privacy policy of an external service
            before providing information to it.
          </p>
        </section>

        {/* 14 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            14. Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy when TypeBharat&apos;s features,
            third-party services, advertising configuration, or data practices
            change.
          </p>

          <p className="mt-4">
            When changes are made, the updated version will be published on this
            page with a revised &quot;Last updated&quot; date.
          </p>
        </section>

        {/* 15 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            15. Browser Storage
          </h2>

          <p>
            TypeBharat uses browser-side storage for certain application and
            session functionality.
          </p>

          <p className="mt-4">
            Information stored in browser storage remains on the user&apos;s
            device or browser and is not a TypeBharat user account or cloud
            profile.
          </p>

          <p className="mt-4">
            Clearing the relevant browser or site data may remove information
            stored locally by TypeBharat.
          </p>

          <p className="mt-4">
            TypeBharat does not represent browser storage as permanent cloud
            storage of typing sessions.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-5">
            16. Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy or TypeBharat&apos;s
            information practices, you can contact us through our{" "}
            <Link
              href="/contact"
              className="font-medium text-(--color-primary) hover:underline"
            >
              Contact page
            </Link>
            .
          </p>

          <p className="mt-4">
            You can also contact TypeBharat directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-(--color-primary) hover:underline break-all"
            >
              {EMAIL}
            </a>
            .
          </p>

          <p className="mt-4 text-sm text-(--color-text-muted)">
            When contacting us, please avoid sending passwords, financial
            information, or other sensitive personal information unless it is
            necessary for your request.
          </p>
        </section>
      </div>

      {/* Footer navigation */}
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
            className="text-(--color-text-muted) hover:text-(--color-text-heading)"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            aria-current="page"
            className="font-medium text-(--color-text-heading)"
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
    </main>
  );
}
