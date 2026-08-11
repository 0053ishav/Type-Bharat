import { Alphabet } from "@/types/alphabet";

export const marathiAlphabet: Alphabet = {
  vowels: [
    { letter: "अ", sound: "a" },
    { letter: "आ", sound: "aa" },
    { letter: "इ", sound: "i" },
    { letter: "ई", sound: "ee" },
    { letter: "उ", sound: "u" },
    { letter: "ऊ", sound: "oo" },
    { letter: "ऋ", sound: "ri" },
    { letter: "ॠ", sound: "ree" },
    { letter: "ऌ", sound: "li" },
    { letter: "ॡ", sound: "lee" },
    { letter: "ए", sound: "e" },
    { letter: "ऐ", sound: "ai" },
    { letter: "ओ", sound: "o" },
    { letter: "औ", sound: "au" },
    { letter: "अं", sound: "an" },
    { letter: "अः", sound: "ah" },
  ],

  consonants: [
    { letter: "क", sound: "ka" },
    { letter: "ख", sound: "kha" },
    { letter: "ग", sound: "ga" },
    { letter: "घ", sound: "gha" },
    { letter: "ङ", sound: "nga" },

    { letter: "च", sound: "cha" },
    { letter: "छ", sound: "chha" },
    { letter: "ज", sound: "ja" },
    { letter: "झ", sound: "jha" },
    { letter: "ञ", sound: "nya" },

    { letter: "ट", sound: "ṭa" },
    { letter: "ठ", sound: "ṭha" },
    { letter: "ड", sound: "ḍa" },
    { letter: "ढ", sound: "ḍha" },
    { letter: "ण", sound: "ṇa" },

    { letter: "त", sound: "ta" },
    { letter: "थ", sound: "tha" },
    { letter: "द", sound: "da" },
    { letter: "ध", sound: "dha" },
    { letter: "न", sound: "na" },

    { letter: "प", sound: "pa" },
    { letter: "फ", sound: "pha" },
    { letter: "ब", sound: "ba" },
    { letter: "भ", sound: "bha" },
    { letter: "म", sound: "ma" },

    { letter: "य", sound: "ya" },
    { letter: "र", sound: "ra" },
    { letter: "ल", sound: "la" },
    { letter: "व", sound: "va" },

    { letter: "श", sound: "sha" },
    { letter: "ष", sound: "ṣha" },
    { letter: "स", sound: "sa" },
    { letter: "ह", sound: "ha" },

    { letter: "ळ", sound: "ḷa" },
  ],

  extensions: [
    { letter: "क़", sound: "qa" },
    { letter: "ख़", sound: "kha" },
    { letter: "ग़", sound: "ga" },
    { letter: "ज़", sound: "za" },
    { letter: "ड़", sound: "ṛa" },
    { letter: "ढ़", sound: "ṛha" },
    { letter: "फ़", sound: "fa" },
    { letter: "य़", sound: "ya" },

    { letter: "क्ष", sound: "ksha" },
    { letter: "ज्ञ", sound: "gya" },
  ],

  numerals: [
    { latin: "0", native: "०" },
    { latin: "1", native: "१" },
    { latin: "2", native: "२" },
    { latin: "3", native: "३" },
    { latin: "4", native: "४" },
    { latin: "5", native: "५" },
    { latin: "6", native: "६" },
    { latin: "7", native: "७" },
    { latin: "8", native: "८" },
    { latin: "9", native: "९" },
  ],
};