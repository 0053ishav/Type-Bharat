import { Alphabet } from "@/types/alphabet";

export const malayalamAlphabet: Alphabet = {
  vowels: [
    { letter: "അ", sound: "a" },
    { letter: "ആ", sound: "aa" },
    { letter: "ഇ", sound: "i" },
    { letter: "ഈ", sound: "ee" },
    { letter: "ഉ", sound: "u" },
    { letter: "ഊ", sound: "oo" },
    { letter: "ഋ", sound: "ru" },
    { letter: "ൠ", sound: "roo" },
    { letter: "ഌ", sound: "lu" },
    { letter: "ൡ", sound: "loo" },
    { letter: "എ", sound: "e" },
    { letter: "ഏ", sound: "ee" },
    { letter: "ഐ", sound: "ai" },
    { letter: "ഒ", sound: "o" },
    { letter: "ഓ", sound: "oo" },
    { letter: "ഔ", sound: "au" },
  ],

  consonants: [
    { letter: "ക", sound: "ka" },
    { letter: "ഖ", sound: "kha" },
    { letter: "ഗ", sound: "ga" },
    { letter: "ഘ", sound: "gha" },
    { letter: "ങ", sound: "nga" },

    { letter: "ച", sound: "cha" },
    { letter: "ഛ", sound: "chha" },
    { letter: "ജ", sound: "ja" },
    { letter: "ഝ", sound: "jha" },
    { letter: "ഞ", sound: "nya" },

    { letter: "ട", sound: "ṭa" },
    { letter: "ഠ", sound: "ṭha" },
    { letter: "ഡ", sound: "ḍa" },
    { letter: "ഢ", sound: "ḍha" },
    { letter: "ണ", sound: "ṇa" },

    { letter: "ത", sound: "ta" },
    { letter: "ഥ", sound: "tha" },
    { letter: "ദ", sound: "da" },
    { letter: "ധ", sound: "dha" },
    { letter: "ന", sound: "na" },

    { letter: "പ", sound: "pa" },
    { letter: "ഫ", sound: "pha" },
    { letter: "ബ", sound: "ba" },
    { letter: "ഭ", sound: "bha" },
    { letter: "മ", sound: "ma" },

    { letter: "യ", sound: "ya" },
    { letter: "ര", sound: "ra" },
    { letter: "ല", sound: "la" },
    { letter: "വ", sound: "va" },

    { letter: "ശ", sound: "sha" },
    { letter: "ഷ", sound: "ṣha" },
    { letter: "സ", sound: "sa" },
    { letter: "ഹ", sound: "ha" },

    { letter: "ള", sound: "ḷa" },
    { letter: "ഴ", sound: "zha" },
    { letter: "റ", sound: "ṟa" },
  ],

  extensions: [
    { letter: "ക്ഷ", sound: "ksha" },
    { letter: "ജ്ഞ", sound: "gya" },
  ],

  numerals: [
    { latin: "0", native: "൦" },
    { latin: "1", native: "൧" },
    { latin: "2", native: "൨" },
    { latin: "3", native: "൩" },
    { latin: "4", native: "൪" },
    { latin: "5", native: "൫" },
    { latin: "6", native: "൬" },
    { latin: "7", native: "൭" },
    { latin: "8", native: "൮" },
    { latin: "9", native: "൯" },
  ],
};