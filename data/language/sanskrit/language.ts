import type { Language } from "@/types/language";

import { sanskritAlphabet } from "./alphabet";
import { LEARN_SANSKRIT_FAQ, SANSKRIT_FAQ } from "./faq";

export const sanskrit: Language = {
  id: "sanskrit",
  slug: "sanskrit",

  name: "Sanskrit",
  nativeName: "संस्कृतम्",

  locale: "sa-IN",
  direction: "ltr",

  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "sa",
  },

  typing: {
    title: "Sanskrit Typing Tool",

    subtitle:
      "Type in English and convert instantly to संस्कृतम्",

    intro:
      "Write Sanskrit naturally using English letters with TypeBharat's Sanskrit typing tool. Type Sanskrit words phonetically in English and convert them into Devanagari instantly. No keyboard installation, no login, and no tracking — a simple and privacy-first Sanskrit transliteration tool.",

    learnLink: {
      href: "/learn/sanskrit",

      label: "Learn Sanskrit Typing (Devanagari)",

      description:
        "Understand Sanskrit letters, pronunciation, Devanagari, and phonetic typing basics.",
    },

    seo: {
      title: "Sanskrit Typing Tool (English to Sanskrit)",

      description:
        "Free English to Sanskrit typing tool. Type Sanskrit phonetically using English letters and instantly convert your input into Devanagari script.",

      keywords: [
        "English to Sanskrit typing",
        "Sanskrit typing",
        "Sanskrit typing online",
        "Sanskrit transliteration",
        "Sanskrit keyboard",
        "Sanskrit typing tool",
        "Roman to Sanskrit",
        "English to Sanskrit converter",
        "Devanagari Sanskrit typing",
        "TypeBharat Sanskrit",
      ],

      openGraph: {
        title: "Sanskrit Typing Tool — TypeBharat",

        description:
          "Type Sanskrit using English letters and instantly convert your phonetic input into Devanagari.",

        locale: "sa_IN",
      },

      twitter: {
        title: "Sanskrit Typing Tool — TypeBharat",

        description:
          "Free and simple English to Sanskrit phonetic typing with Devanagari output.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Sanskrit Typing",

      description:
        "Learn how to type Sanskrit using English letters. Explore Sanskrit, the Devanagari script, vowels, consonants, pronunciation, conjuncts, numerals, and phonetic typing.",

      cta: "Start Typing in Sanskrit →",
    },

    seo: {
      title:
        "Learn Sanskrit Typing (English to Devanagari) – Beginner Guide",

      description:
        "Learn Sanskrit typing using English letters with a beginner-friendly guide to Devanagari, Sanskrit vowels, consonants, pronunciation, conjunct consonants, and phonetic typing.",

      keywords: [
        "learn Sanskrit typing",
        "learn Sanskrit",
        "Sanskrit typing tutorial",
        "Sanskrit alphabet",
        "Sanskrit script",
        "Devanagari Sanskrit",
        "Sanskrit vowels",
        "Sanskrit consonants",
        "Sanskrit pronunciation",
        "Sanskrit typing guide",
        "English to Sanskrit typing",
        "Sanskrit typing for beginners",
        "TypeBharat Sanskrit",
      ],

      openGraph: {
        title:
          "Learn Sanskrit Typing — Beginner Guide | TypeBharat",

        description:
          "Learn Sanskrit typing with a beginner-friendly guide covering Devanagari, the Sanskrit alphabet, pronunciation, and phonetic typing.",

        locale: "sa_IN",
      },

      twitter: {
        title: "Learn Sanskrit Typing — TypeBharat",

        description:
          "Learn Sanskrit typing using English letters with our beginner-friendly guide.",
      },
    },

    about: {
      title: "About Sanskrit Language",

      paragraphs: [
        "Sanskrit (संस्कृतम्) is a classical Indo-Aryan language with an extensive literary and intellectual tradition spanning thousands of years.",
        "Sanskrit literature includes major works in poetry, philosophy, grammar, drama, mathematics, astronomy, medicine, and other scholarly fields.",
        "Sanskrit has influenced the vocabulary and literary traditions of many Indian languages and continues to be studied and used in educational, scholarly, cultural, and traditional contexts.",
      ],
    },

    script: {
      title: "Devanagari Script for Sanskrit",

      paragraphs: [
        "Sanskrit can historically be written in several Indian scripts. TypeBharat uses Devanagari, the most widely used modern script for Sanskrit publications and digital text.",
        "Devanagari is written from left to right and uses independent vowels, consonants, vowel signs, the virama, and conjunct consonants to represent Sanskrit words and sounds.",
      ],

      bullets: [
        "Written from left to right",
        "Uses Devanagari",
        "Contains independent vowels and consonants",
        "Uses vowel signs (matras)",
        "Frequently uses conjunct consonants",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (स्वराः)",

        description:
          "Sanskrit has a traditional vowel inventory that includes long and short vowels as well as the vocalic sounds ऋ, ॠ, ऌ, and ॡ.",
      },

      consonants: {
        title: "Consonants (व्यञ्जनानि)",

        description:
          "Sanskrit consonants are traditionally organized according to their place and manner of articulation, including velar, palatal, retroflex, dental, and labial groups.",
      },

      extensions: {
        title: "Common Conjunct Consonants",

        description:
          "Conjunct consonants combine multiple consonants into a single written form. Common Sanskrit examples include क्ष, त्र, ज्ञ, and श्र.",
      },

      numerals: {
        title: "Devanagari Numerals",

        description:
          "Sanskrit texts written in Devanagari can use the traditional Devanagari numerals ०–९.",
      },
    },

    cta: {
      title: "Ready to start typing in Sanskrit?",

      description:
        "You don't need to learn a Sanskrit keyboard layout. Type Sanskrit phonetically using English letters and TypeBharat converts your input into Devanagari.",

      button: "Open Sanskrit Typing Tool →",
    },

    faq: LEARN_SANSKRIT_FAQ,
  },

  alphabet: sanskritAlphabet,

  labels: {
    alphabet: {
      title: "Learn Sanskrit Letters (Devanagari)",

      description:
        "Explore the core Sanskrit vowels, consonants, conjuncts, and Devanagari numerals. Click a character to insert it directly into the typing editor.",

      vowels: "Vowels (स्वराः)",

      consonants: "Consonants (व्यञ्जनानि)",

      extensions: "Common Conjunct Consonants",

      numerals: "Devanagari Numerals",
    },
  },

  faq: SANSKRIT_FAQ,

  capabilities: {
    typing: true,
    learn: true,
    translation: false,
    speechToText: false,
    textToSpeech: false,
    ocr: false,
    ai: false,
  },
};