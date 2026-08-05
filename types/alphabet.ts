export interface AlphabetCharacter {
  /**
   * Native character.
   * Example:
   * अ
   * ਕ
   * அ
   */
  letter: string;

  /**
   * Latin transliteration.
   * Example:
   * a
   * kha
   * ṭa
   */
  sound: string;
}

export interface AlphabetNumeral {
  /**
   * Western numeral.
   */
  latin: string;

  /**
   * Native numeral.
   */
  native: string;
}

export interface Alphabet {
  /**
   * Independent vowels.
   */
  vowels: AlphabetCharacter[];

  /**
   * Primary consonants.
   */
  consonants: AlphabetCharacter[];

  /**
   * Optional extended letters.
   *
   * Examples:
   * Hindi:
   * क़ फ़ ज़
   *
   * Panjabi:
   * ਸ਼ ਖ਼ ਗ਼
   *
   * Tamil:
   * Grantha letters
   */
  extensions?: AlphabetCharacter[];

  /**
   * Optional vowel signs / matras.
   *
   * Hindi:
   * ा ि ी ु
   *
   * Panjabi:
   * ਾ ਿ ੀ ੁ
   */
  vowelSigns?: AlphabetCharacter[];

  /**
   * Optional special symbols.
   *
   * Examples:
   * ं
   * ਂ
   * ਃ
   * ॥
   */
  symbols?: AlphabetCharacter[];

  /**
   * Native numerals.
   */
  numerals: AlphabetNumeral[];
}