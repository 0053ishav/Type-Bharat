import type { Language } from "@/types/language";

import { nepaliAlphabet } from "./alphabet";
import { LEARN_NEPALI_FAQ, NEPALI_FAQ } from "./faq";

export const nepali: Language = {
  id: "nepali",
  slug: "nepali",

  name: "Nepali",
  nativeName: "नेपाली",

  locale: "ne-IN",
  direction: "ltr",

  script: "Devanagari",

  transliteration: {
    engine: "google",
    languageCode: "ne",
  },

  typing: {
    title: "Nepali Typing Tool",

    subtitle:
      "Type in English and convert instantly to नेपाली",

    intro:
      "Write Nepali naturally using English letters with TypeIndian's Nepali typing tool. Type words phonetically in English and instantly convert them into नेपाली using the Devanagari script. No keyboard installation, no login - fast and simple  Nepali transliteration tool.",

    learnLink: {
      href: "/learn/nepali",

      label: "Learn Nepali Typing (Devanagari)",

      description:
        "Understand Nepali letters, pronunciation, Devanagari, and phonetic typing basics.",
    },

    seo: {
      title: "Nepali Typing Tool (English to Nepali)",

      description:
        "Free English to Nepali typing tool. Type Nepali phonetically using English letters and instantly convert your input into Devanagari script.",

      keywords: [
        "English to Nepali typing",
        "Nepali typing",
        "Nepali typing online",
        "Nepali transliteration",
        "Nepali keyboard",
        "Nepali typing tool",
        "Roman to Nepali",
        "English to Nepali converter",
        "Devanagari Nepali typing",
        "TypeIndian Nepali",
      ],

      openGraph: {
        title: "Nepali Typing Tool - TypeIndian",

        description:
          "Type Nepali using English letters and instantly convert your phonetic input into Devanagari.",

        locale: "ne_IN",
      },

      twitter: {
        title: "Nepali Typing Tool - TypeIndian",

        description:
          "Free and simple English to Nepali phonetic typing with Devanagari output.",
      },
    },
  },

  learn: {
    meta: {
      title: "Learn Nepali Typing",

      description:
        "Learn how to type Nepali using English letters. Explore the Nepali language, Devanagari script, vowels, consonants, pronunciation, numerals, and phonetic typing.",

      cta: "Start Typing in Nepali →",
    },

    seo: {
      title:
        "Learn Nepali Typing (English to Devanagari) – Beginner Guide",

      description:
        "Learn Nepali typing using English letters with a beginner-friendly guide to Devanagari, Nepali vowels, consonants, pronunciation, conjunct consonants, numerals, and phonetic typing.",

      keywords: [
        "learn Nepali typing",
        "Nepali typing tutorial",
        "Nepali alphabet",
        "Nepali script",
        "Devanagari Nepali",
        "Nepali vowels",
        "Nepali consonants",
        "Nepali pronunciation",
        "Nepali typing guide",
        "English to Nepali typing",
        "Nepali typing for beginners",
        "TypeIndian Nepali",
      ],

      openGraph: {
        title:
          "Learn Nepali Typing - Beginner Guide | TypeIndian",

        description:
          "Learn Nepali typing with a beginner-friendly guide covering Devanagari, the Nepali alphabet, pronunciation, and phonetic typing.",

        locale: "ne_IN",
      },

      twitter: {
        title: "Learn Nepali Typing - TypeIndian",

        description:
          "Learn Nepali typing using English letters with our beginner-friendly guide.",
      },
    },

    about: {
      title: "About Nepali Language",

      paragraphs: [
        "Nepali (नेपाली) is an Indo-Aryan language and the primary language of Nepal. It is also widely spoken in parts of India, particularly in Sikkim, Darjeeling, and other Himalayan regions.",
        "Nepali has a rich literary tradition and is spoken by communities across South Asia and around the world.",
        "Nepali is primarily written using the Devanagari script. Although it shares this script with languages such as Hindi, Marathi, and Sanskrit, Nepali is a distinct language with its own grammar, pronunciation, and vocabulary.",
      ],
    },

    script: {
      title: "Devanagari Script for Nepali",

      paragraphs: [
        "Nepali is written using Devanagari, a Brahmic writing system written from left to right. The script uses independent vowels, consonants, vowel signs, the virama, and conjunct consonants.",
        "The same script is used by several Indian languages, but the language being written determines the vocabulary, pronunciation, and grammatical conventions.",
      ],

      bullets: [
        "Written from left to right",
        "Uses Devanagari",
        "Contains independent vowels and consonants",
        "Uses vowel signs (matras)",
        "Uses conjunct consonants",
      ],
    },

    alphabet: {
      vowels: {
        title: "Vowels (स्वर)",

        description:
          "The Nepali alphabet commonly includes 11 independent vowels representing the major vowel sounds used in the language.",
      },

      consonants: {
        title: "Consonants (व्यञ्जन)",

        description:
          "Nepali has 33 commonly taught primary consonants arranged traditionally according to their place of articulation.",
      },

      extensions: {
        title: "Common Conjunct Consonants",

        description:
          "Common conjunct forms include क्ष, त्र, and ज्ञ. These combine multiple consonants into a single written form.",
      },

      numerals: {
        title: "Nepali Devanagari Numerals",

        description:
          "Nepali can use the traditional Devanagari numerals ०–९ for representing numbers.",
      },
    },

    cta: {
      title: "Ready to start typing in Nepali?",

      description:
        "You don't need to learn a Nepali keyboard layout. Type Nepali phonetically using English letters and TypeIndian converts your input into Devanagari.",

      button: "Open Nepali Typing Tool →",
    },

    faq: LEARN_NEPALI_FAQ,
  },

  alphabet: nepaliAlphabet,

  labels: {
    alphabet: {
      title: "Learn Nepali Letters (Devanagari)",

      description:
        "Explore Nepali vowels, consonants, common conjuncts, and Devanagari numerals. Click a character to insert it directly into the typing editor.",

      vowels: "Vowels (स्वर)",

      consonants: "Consonants (व्यञ्जन)",

      extensions: "Common Conjunct Consonants",

      numerals: "Nepali Devanagari Numerals",
    },
  },

  faq: NEPALI_FAQ,

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