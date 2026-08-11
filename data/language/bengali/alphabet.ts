import { Alphabet } from "@/types/alphabet";

export const bengaliAlphabet: Alphabet = {
  vowels: [
    { letter: "অ", sound: "ô" },
    { letter: "আ", sound: "aa" },
    { letter: "ই", sound: "i" },
    { letter: "ঈ", sound: "ee" },
    { letter: "উ", sound: "u" },
    { letter: "ঊ", sound: "oo" },
    { letter: "ঋ", sound: "ri" },
    { letter: "এ", sound: "e" },
    { letter: "ঐ", sound: "oi" },
    { letter: "ও", sound: "o" },
    { letter: "ঔ", sound: "ou" },
  ],

  consonants: [
    { letter: "ক", sound: "ka" },
    { letter: "খ", sound: "kha" },
    { letter: "গ", sound: "ga" },
    { letter: "ঘ", sound: "gha" },
    { letter: "ঙ", sound: "nga" },

    { letter: "চ", sound: "cha" },
    { letter: "ছ", sound: "chha" },
    { letter: "জ", sound: "ja" },
    { letter: "ঝ", sound: "jha" },
    { letter: "ঞ", sound: "nya" },

    { letter: "ট", sound: "ṭa" },
    { letter: "ঠ", sound: "ṭha" },
    { letter: "ড", sound: "ḍa" },
    { letter: "ঢ", sound: "ḍha" },
    { letter: "ণ", sound: "ṇa" },

    { letter: "ত", sound: "ta" },
    { letter: "থ", sound: "tha" },
    { letter: "দ", sound: "da" },
    { letter: "ধ", sound: "dha" },
    { letter: "ন", sound: "na" },

    { letter: "প", sound: "pa" },
    { letter: "ফ", sound: "pha" },
    { letter: "ব", sound: "ba" },
    { letter: "ভ", sound: "bha" },
    { letter: "ম", sound: "ma" },

    { letter: "য", sound: "ya" },
    { letter: "র", sound: "ra" },
    { letter: "ল", sound: "la" },

    { letter: "শ", sound: "sha" },
    { letter: "ষ", sound: "ṣha" },
    { letter: "স", sound: "sa" },
    { letter: "হ", sound: "ha" },
  ],

  extensions: [
    { letter: "ড়", sound: "ṛa" },
    { letter: "ঢ়", sound: "ṛha" },
    { letter: "য়", sound: "ẏa" },
    { letter: "ৎ", sound: "t" },
    { letter: "ক্ষ", sound: "ksha" },
  ],

  numerals: [
    { latin: "0", native: "০" },
    { latin: "1", native: "১" },
    { latin: "2", native: "২" },
    { latin: "3", native: "৩" },
    { latin: "4", native: "৪" },
    { latin: "5", native: "৫" },
    { latin: "6", native: "৬" },
    { latin: "7", native: "৭" },
    { latin: "8", native: "৮" },
    { latin: "9", native: "৯" },
  ],
};