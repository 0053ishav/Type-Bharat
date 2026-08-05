import type { Metadata } from "next";
import type { Language } from "@/types/language";
import { SITE_URL } from "@/lib/config/site";
import { GLOBAL_KEYWORDS, mergeKeywords } from "@/lib/seo/keywords";

export function createTypingMetadata(language: Language): Metadata {
  return {
    title: language.typing.seo.title,
    description: language.typing.seo.description,

    keywords: mergeKeywords(
      GLOBAL_KEYWORDS,
      language.typing.seo.keywords),

    alternates: {
      canonical: `${SITE_URL}/${language.slug}-typing`,
    },

    openGraph: {
      title: language.typing.seo.openGraph.title,
      description: language.typing.seo.openGraph.description,
      url: `${SITE_URL}/${language.slug}-typing`,

      siteName: "TypeBharat",

      locale: language.typing.seo.openGraph.locale,

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: language.typing.seo.twitter.title,

      description: language.typing.seo.twitter.description,
    },
  };
}


export function createLearnMetadata(
  language: Language,
): Metadata {
  return {
    title: language.learn.meta.title,
    description: language.learn.meta.description,

    keywords: mergeKeywords(
      GLOBAL_KEYWORDS,
      language.learn.seo.keywords),

    alternates: {
      canonical: `${SITE_URL}/learn/${language.slug}`,
    },

    openGraph: {
      title: language.learn.seo.openGraph.title,
      description: language.learn.seo.openGraph.description,
      url: `${SITE_URL}/learn/${language.slug}`,
      siteName: "TypeBharat",
      locale: language.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: language.learn.seo.twitter.title,
      description: language.learn.seo.twitter.description,
    },
  };
}