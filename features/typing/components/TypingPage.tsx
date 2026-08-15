import Script from "next/script";

import FAQ from "@/components/common/FAQ";
import LearnTypingLink from "@/components/common/LearnTypingLink";

import TypingTool from "@/features/typing/components/TypingTool";

import { generateFAQSchema } from "@/lib/seo/faqSchema";

import type { Language } from "@/types/language";
import Breadcrumbs from "@/components/common/Breadcrumbs";

type Props = {
  language: Language;
};

export default function TypingPage({ language }: Props) {
  const faqSchema = generateFAQSchema(language.faq);

  return (
    <main className="max-w-5xl mx-auto px-6">
      <Breadcrumbs
        items={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Typing",
            path: "/typing",
          },
          {
            name: `${language.name} Typing`,
            path: `/typing/${language.slug}`,
          },
        ]}
      />

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

      <TypingTool language={language} />

      <FAQ
        items={language.faq}
        title={`${language.name} - Frequently Asked Questions`}
      />
    </main>
  );
}
