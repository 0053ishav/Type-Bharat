import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";

describe("FAQ Contract", () => {
  for (const language of Object.values(languageRegistry)) {
    describe(language.id, () => {
      it("should have at least one FAQ", () => {
        expect(language.faq.length).toBeGreaterThan(0);
      });

      it("should not contain duplicate questions", () => {
        const questions = language.faq.map((faq) => faq.question);

        expect(new Set(questions).size).toBe(questions.length);
      });

      it("should not contain empty questions or answers", () => {
        for (const faq of language.faq) {
          expect(faq.question.trim()).not.toBe("");
          expect(faq.answer.trim()).not.toBe("");
        }
      });

      it("should not have leading or trailing whitespace", () => {
        for (const faq of language.faq) {
          expect(faq.question).toBe(faq.question.trim());
          expect(faq.answer).toBe(faq.answer.trim());
        }
      });
    });
  }
});