import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";

describe("Language Object Contract", () => {
  for (const language of Object.values(languageRegistry)) {
    describe(language.id, () => {
      it("should have valid identity", () => {
        expect(language.id).toBeTruthy();
        expect(language.slug).toBeTruthy();

        expect(language.name).toBeTruthy();
        expect(language.nativeName).toBeTruthy();

        expect(language.locale).toBeTruthy();
        expect(language.script).toBeTruthy();
      });

      it("should have transliteration configured", () => {
        expect(language.transliteration.engine).toBeTruthy();
        expect(language.transliteration.languageCode).toBeTruthy();
      });

      it("should have typing content", () => {
        expect(language.typing.title).toBeTruthy();
        expect(language.typing.subtitle).toBeTruthy();
        expect(language.typing.intro).toBeTruthy();

        expect(language.typing.learnLink.href).toBeTruthy();
        expect(language.typing.learnLink.label).toBeTruthy();
        expect(language.typing.learnLink.description).toBeTruthy();
      });

      it("should have learn content", () => {
        expect(language.learn.meta.title).toBeTruthy();
        expect(language.learn.meta.description).toBeTruthy();
        expect(language.learn.meta.cta).toBeTruthy();

        expect(language.learn.about.title).toBeTruthy();
        expect(language.learn.about.paragraphs.length).toBeGreaterThan(0);

        expect(language.learn.script.title).toBeTruthy();
        expect(language.learn.script.paragraphs.length).toBeGreaterThan(0);

        expect(language.learn.cta.title).toBeTruthy();
        expect(language.learn.cta.description).toBeTruthy();
        expect(language.learn.cta.button).toBeTruthy();
      });

      it("should have labels", () => {
        expect(language.labels.alphabet.title).toBeTruthy();
        expect(language.labels.alphabet.description).toBeTruthy();

        expect(language.labels.alphabet.vowels).toBeTruthy();
        expect(language.labels.alphabet.consonants).toBeTruthy();
        expect(language.labels.alphabet.numerals).toBeTruthy();
      });

      it("should have alphabet", () => {
        expect(language.alphabet).toBeDefined();
      });

      it("should have faq", () => {
        expect(language.faq.length).toBeGreaterThan(0);
      });

      it("should have capabilities defined", () => {
        expect(typeof language.capabilities.typing).toBe("boolean");
        expect(typeof language.capabilities.learn).toBe("boolean");
        expect(typeof language.capabilities.translation).toBe("boolean");
        expect(typeof language.capabilities.speechToText).toBe("boolean");
        expect(typeof language.capabilities.textToSpeech).toBe("boolean");
        expect(typeof language.capabilities.ocr).toBe("boolean");
        expect(typeof language.capabilities.ai).toBe("boolean");
      });
    });
  }
});