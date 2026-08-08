import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";

describe("Alphabet Contract", () => {
  for (const language of Object.values(languageRegistry)) {
    describe(language.id, () => {
      it("should have at least one vowel", () => {
        expect(language.alphabet.vowels.length).toBeGreaterThan(0);
      });

      it("should have at least one consonant", () => {
        expect(language.alphabet.consonants.length).toBeGreaterThan(0);
      });

      it("should contain exactly 10 numerals", () => {
        expect(language.alphabet.numerals).toHaveLength(10);
      });

      it("should not contain duplicate letters", () => {
        const letters = [
          ...language.alphabet.vowels,
          ...language.alphabet.consonants,
          ...(language.alphabet.extensions ?? []),
          ...(language.alphabet.vowelSigns ?? []),
          ...(language.alphabet.symbols ?? []),
        ].map((c) => c.letter);

        expect(new Set(letters).size).toBe(letters.length);
      });

      it("should not contain duplicate sounds", () => {
        const sounds = [
          ...language.alphabet.vowels,
          ...language.alphabet.consonants,
          ...(language.alphabet.extensions ?? []),
          ...(language.alphabet.vowelSigns ?? []),
          ...(language.alphabet.symbols ?? []),
        ].map((c) => c.sound);

        expect(new Set(sounds).size).toBe(sounds.length);
      });

      it("should not contain empty letters or sounds", () => {
        const characters = [
          ...language.alphabet.vowels,
          ...language.alphabet.consonants,
          ...(language.alphabet.extensions ?? []),
          ...(language.alphabet.vowelSigns ?? []),
          ...(language.alphabet.symbols ?? []),
        ];

        for (const character of characters) {
          expect(character.letter.trim()).not.toBe("");
          expect(character.sound.trim()).not.toBe("");
        }
      });

      it("should contain numerals 0 through 9", () => {
        expect(
          language.alphabet.numerals.map((n) => n.latin)
        ).toEqual([
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ]);
      });

      it("should not contain duplicate native numerals", () => {
        const numerals = language.alphabet.numerals.map((n) => n.native);

        expect(new Set(numerals).size).toBe(numerals.length);
      });
    });
  }
});