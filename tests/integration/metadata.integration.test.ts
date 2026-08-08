import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";

import {
  createTypingMetadata,
  createLearnMetadata,
} from "@/lib/languages/metadata";

describe("Metadata Integration", () => {
  for (const language of Object.values(languageRegistry)) {
    describe(language.id, () => {
      it("should generate typing metadata", () => {
        expect(() =>
          createTypingMetadata(language)
        ).not.toThrow();
      });

      it("should generate learn metadata", () => {
        expect(() =>
          createLearnMetadata(language)
        ).not.toThrow();
      });

      it("should generate different canonical urls", () => {
        const typing =
          createTypingMetadata(language);

        const learn =
          createLearnMetadata(language);

        expect(
          typing.alternates?.canonical
        ).not.toEqual(
          learn.alternates?.canonical
        );
      });
    });
  }
});