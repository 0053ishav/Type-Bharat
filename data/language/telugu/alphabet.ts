import { Alphabet } from "@/types/alphabet";

export const teluguAlphabet: Alphabet = {
  vowels: [
    { letter: "అ", sound: "a" },
    { letter: "ఆ", sound: "aa" },
    { letter: "ఇ", sound: "i" },
    { letter: "ఈ", sound: "ee" },
    { letter: "ఉ", sound: "u" },
    { letter: "ఊ", sound: "oo" },
    { letter: "ఋ", sound: "ru" },
    { letter: "ౠ", sound: "roo" },
    { letter: "ఌ", sound: "lu" },
    { letter: "ౡ", sound: "loo" },
    { letter: "ఎ", sound: "e" },
    { letter: "ఏ", sound: "ee" },
    { letter: "ఐ", sound: "ai" },
    { letter: "ఒ", sound: "o" },
    { letter: "ఓ", sound: "oo" },
    { letter: "ఔ", sound: "au" },
  ],

  consonants: [
    { letter: "క", sound: "ka" },
    { letter: "ఖ", sound: "kha" },
    { letter: "గ", sound: "ga" },
    { letter: "ఘ", sound: "gha" },
    { letter: "ఙ", sound: "nga" },

    { letter: "చ", sound: "cha" },
    { letter: "ఛ", sound: "chha" },
    { letter: "జ", sound: "ja" },
    { letter: "ఝ", sound: "jha" },
    { letter: "ఞ", sound: "nya" },

    { letter: "ట", sound: "ṭa" },
    { letter: "ఠ", sound: "ṭha" },
    { letter: "డ", sound: "ḍa" },
    { letter: "ఢ", sound: "ḍha" },
    { letter: "ణ", sound: "ṇa" },

    { letter: "త", sound: "ta" },
    { letter: "థ", sound: "tha" },
    { letter: "ద", sound: "da" },
    { letter: "ధ", sound: "dha" },
    { letter: "న", sound: "na" },

    { letter: "ప", sound: "pa" },
    { letter: "ఫ", sound: "pha" },
    { letter: "బ", sound: "ba" },
    { letter: "భ", sound: "bha" },
    { letter: "మ", sound: "ma" },

    { letter: "య", sound: "ya" },
    { letter: "ర", sound: "ra" },
    { letter: "ల", sound: "la" },
    { letter: "వ", sound: "va" },

    { letter: "శ", sound: "sha" },
    { letter: "ష", sound: "ṣha" },
    { letter: "స", sound: "sa" },
    { letter: "హ", sound: "ha" },

    { letter: "ళ", sound: "ḷa" },
    { letter: "ఱ", sound: "ṟa" },
  ],

  extensions: [
    { letter: "క్ష", sound: "ksha" },
  ],

  numerals: [
    { latin: "0", native: "౦" },
    { latin: "1", native: "౧" },
    { latin: "2", native: "౨" },
    { latin: "3", native: "౩" },
    { latin: "4", native: "౪" },
    { latin: "5", native: "౫" },
    { latin: "6", native: "౬" },
    { latin: "7", native: "౭" },
    { latin: "8", native: "౮" },
    { latin: "9", native: "౯" },
  ],
};