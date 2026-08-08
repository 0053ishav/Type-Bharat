import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";

describe("Language Registry", () => {
  it("should not be empty", () => {
    expect(Object.keys(languageRegistry).length).toBeGreaterThan(0);
  });

  it("should have unique ids", () => {
    const ids = Object.values(languageRegistry).map((lang) => lang.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have unique slugs", () => {
    const slugs = Object.values(languageRegistry).map((lang) => lang.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("should have non-empty names", () => {
    for (const language of Object.values(languageRegistry)) {
      expect(language.name.trim()).not.toBe("");
      expect(language.nativeName.trim()).not.toBe("");
    }
  });

  it("should have valid locale", () => {
    for (const language of Object.values(languageRegistry)) {
      expect(language.locale.trim()).not.toBe("");
    }
  });

  it("should have valid direction", () => {
    for (const language of Object.values(languageRegistry)) {
      expect(["ltr", "rtl"]).toContain(language.direction);
    }
  });
});