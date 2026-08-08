import { Alphabet } from "./alphabet";
import { FAQItem } from "./faq";

export type LanguageDirection = "ltr" | "rtl";

export type TransliterationEngine = "google" | "internal";

export interface LanguageTransliteration {
  engine: TransliterationEngine;
  languageCode: string;
}

export interface LanguageLearnLink {
  href: string;
  label: string;
  description: string;
}

export interface LanguagePageSEO {
  title: string;
  description: string;

  keywords: string[];

  openGraph: {
    title: string;
    description: string;
    locale: string;
  };

  twitter: {
    title: string;
    description: string;
  };
}

export interface LanguageTyping {
  title: string;
  subtitle: string;
  intro: string;

  learnLink: LanguageLearnLink;

  seo: LanguagePageSEO;
}


export interface LanguageLearn {
  meta: {
    title: string;
    description: string;
    cta: string;
  };

  seo: LanguagePageSEO;


  about: {
    title: string;
    paragraphs: string[];
  };

  script: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  };

  alphabet: {
    vowels: {
      title: string;
      description: string;
    };

    consonants: {
      title: string;
      description?: string;
    };

    extensions?: {
      title: string;
      description?: string;
    };

    vowelSigns?: {
      title: string;
      description?: string;
    };

    symbols?: {
      title: string;
      description?: string;
    };

    numerals: {
      title: string;
      description: string;
    };
  };

  cta: {
    title: string;
    description: string;
    button: string;
  };

  faq: FAQItem[];
}

export interface LanguageCapabilities {
  typing: boolean;
  learn: boolean;
  translation: boolean;
  speechToText: boolean;
  textToSpeech: boolean;
  ocr: boolean;
  ai: boolean;
}

export interface LanguageLabels {
  alphabet: {
    title: string;
    description: string;

    vowels: string;
    consonants: string;
    extensions?: string;
    vowelSigns?: string;
    symbols?: string;
    numerals: string;
  };
}

export interface Language {
  id: string;
  slug: string;

  name: string;
  nativeName: string;

  locale: string;
  direction: LanguageDirection;
  script: string;

  transliteration: LanguageTransliteration;

  typing: LanguageTyping;

  learn: LanguageLearn;

  alphabet: Alphabet;

  labels: LanguageLabels;

  faq: FAQItem[];

  capabilities: LanguageCapabilities;
}