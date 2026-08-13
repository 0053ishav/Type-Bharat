import { Alphabet } from "@/types/alphabet";

export const urduAlphabet: Alphabet = {
  vowels: [
    { letter: "ا", sound: "a" },
    { letter: "آ", sound: "aa" },
    { letter: "و", sound: "o" },
    { letter: "ی", sound: "i" },
    { letter: "ے", sound: "e" },
  ],

  consonants: [
    { letter: "ب", sound: "b" },
    { letter: "پ", sound: "p" },
    { letter: "ت", sound: "t" },
    { letter: "ٹ", sound: "ṭ" },
    { letter: "ث", sound: "s" },

    { letter: "ج", sound: "j" },
    { letter: "چ", sound: "ch" },
    { letter: "ح", sound: "h" },
    { letter: "خ", sound: "kh" },

    { letter: "د", sound: "d" },
    { letter: "ڈ", sound: "ḍ" },
    { letter: "ذ", sound: "z" },
    { letter: "ر", sound: "r" },
    { letter: "ڑ", sound: "ṛ" },
    { letter: "ز", sound: "z" },
    { letter: "ژ", sound: "zh" },

    { letter: "س", sound: "s" },
    { letter: "ش", sound: "sh" },
    { letter: "ص", sound: "s" },
    { letter: "ض", sound: "z" },
    { letter: "ط", sound: "t" },
    { letter: "ظ", sound: "z" },

    { letter: "ع", sound: "a" },
    { letter: "غ", sound: "gh" },

    { letter: "ف", sound: "f" },
    { letter: "ق", sound: "q" },

    { letter: "ک", sound: "k" },
    { letter: "گ", sound: "g" },
    { letter: "ل", sound: "l" },
    { letter: "م", sound: "m" },
    { letter: "ن", sound: "n" },

    { letter: "ہ", sound: "h" },
  ],

  extensions: [
    { letter: "ں", sound: "n" },
    { letter: "ھ", sound: "h" },
    { letter: "ء", sound: "hamza" },
  ],

  numerals: [
    { latin: "0", native: "۰" },
    { latin: "1", native: "۱" },
    { latin: "2", native: "۲" },
    { latin: "3", native: "۳" },
    { latin: "4", native: "۴" },
    { latin: "5", native: "۵" },
    { latin: "6", native: "۶" },
    { latin: "7", native: "۷" },
    { latin: "8", native: "۸" },
    { latin: "9", native: "۹" },
  ],
};