import { describe, expect, it } from "vitest";

import { getLanguage, getLanguages } from "@/lib/languages/loader";
import { languageRegistry } from "@/lib/languages/registry";

describe("Language Loader Integration", () => {
  it("should return every registered language", () => {
    const languages = getLanguages();

    expect(languages).toHaveLength(
      Object.keys(languageRegistry).length
    );
  });

  it("should resolve every language by slug", () => {
    for (const language of Object.values(languageRegistry)) {
      expect(
        getLanguage(language.slug)
      ).toEqual(language);
    }
  });

  it("should return undefined for invalid slug", () => {
    expect(
      getLanguage("invalid-language")
    ).toBeUndefined();
  });

  it("should return unique slugs", () => {
    const slugs = getLanguages().map((l) => l.slug);

    expect(
      new Set(slugs).size
    ).toBe(slugs.length);
  });
});