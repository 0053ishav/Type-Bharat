import { describe, expect, it } from "vitest";

import { getLanguages } from "@/lib/languages/loader";

describe("Language Discovery", () => {
  it("should expose languages", () => {
    const languages = getLanguages();

    expect(languages.length).toBeGreaterThan(0);
  });

  it("should expose only unique languages", () => {
    const slugs = getLanguages().map(
      (language) => language.slug
    );

    expect(
      new Set(slugs).size
    ).toBe(slugs.length);
  });

  it("should expose languages with names", () => {
    for (const language of getLanguages()) {
      expect(language.name).toBeTruthy();
      expect(language.nativeName).toBeTruthy();
    }
  });
});