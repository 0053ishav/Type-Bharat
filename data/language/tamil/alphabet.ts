import { Alphabet } from "@/types/alphabet";

export const tamilAlphabet: Alphabet = {
  vowels: [
    { letter: "அ", sound: "a" },
    { letter: "ஆ", sound: "aa" },
    { letter: "இ", sound: "i" },
    { letter: "ஈ", sound: "ee" },
    { letter: "உ", sound: "u" },
    { letter: "ஊ", sound: "oo" },
    { letter: "எ", sound: "e" },
    { letter: "ஏ", sound: "ee" },
    { letter: "ஐ", sound: "ai" },
    { letter: "ஒ", sound: "o" },
    { letter: "ஓ", sound: "oo" },
    { letter: "ஔ", sound: "au" },
  ],

  consonants: [
    { letter: "க", sound: "ka" },
    { letter: "ங", sound: "nga" },

    { letter: "ச", sound: "cha" },
    { letter: "ஞ", sound: "nya" },

    { letter: "ட", sound: "ṭa" },
    { letter: "ண", sound: "ṇa" },

    { letter: "த", sound: "ta" },
    { letter: "ந", sound: "na" },

    { letter: "ப", sound: "pa" },
    { letter: "ம", sound: "ma" },

    { letter: "ய", sound: "ya" },
    { letter: "ர", sound: "ra" },
    { letter: "ல", sound: "la" },
    { letter: "வ", sound: "va" },

    { letter: "ழ", sound: "zha" },
    { letter: "ள", sound: "ḷa" },
    { letter: "ற", sound: "ṟa" },
    { letter: "ன", sound: "ṉa" },
  ],

  extensions: [
    { letter: "ஃ", sound: "ah" },     // Aytham

    { letter: "ஜ", sound: "ja" },
    { letter: "ஶ", sound: "sha" },
    { letter: "ஷ", sound: "ṣha" },
    { letter: "ஸ", sound: "sa" },
    { letter: "ஹ", sound: "ha" },

    { letter: "க்ஷ", sound: "ksha" },
  ],

  numerals: [
    { latin: "0", native: "௦" },
    { latin: "1", native: "௧" },
    { latin: "2", native: "௨" },
    { latin: "3", native: "௩" },
    { latin: "4", native: "௪" },
    { latin: "5", native: "௫" },
    { latin: "6", native: "௬" },
    { latin: "7", native: "௭" },
    { latin: "8", native: "௮" },
    { latin: "9", native: "௯" },
  ],
};