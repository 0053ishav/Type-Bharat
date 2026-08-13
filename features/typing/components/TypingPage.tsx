import Link from "next/link";
import Script from "next/script";

import FAQ from "@/components/common/FAQ";
import LearnTypingLink from "@/components/common/LearnTypingLink";

import TypingTool from "@/features/typing/components/TypingTool";

import { generateFAQSchema } from "@/lib/seo/faqSchema";

import type { Language } from "@/types/language";

type Props = {
  language: Language;
};

export default function TypingPage({
  language,
}: Props) {
  const faqSchema = generateFAQSchema(language.faq);

  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 mt-6 flex justify-between text-sm">
        <Link
          href="/"
          className="text-(--color-text-muted) hover:underline"
        >
          ← Home
        </Link>

        {/* TODO: replace with Language Switcher */}
      </div>

      <LearnTypingLink
        href={language.typing.learnLink.href}
        label={language.typing.learnLink.label}
        description={language.typing.learnLink.description}
      />

      <Script
        id={`${language.slug}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="max-w-3xl mx-auto px-6 mt-10 mb-6">
        <p className="text-lg text-(--color-text-body) leading-relaxed">
          {language.typing.intro}
        </p>
      </section>

      <TypingTool
        language={language}
      />

      <FAQ
        items={language.faq}
        title={`${language.name} - Frequently Asked Questions`}
      />
    </main>
  );
}