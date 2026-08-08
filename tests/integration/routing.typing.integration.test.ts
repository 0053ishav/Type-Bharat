import { describe, expect, it } from "vitest";

import { languageRegistry } from "@/lib/languages/registry";
import { generateStaticParams } from "@/app/typing/[language]/page";

describe("Typing Routes", () => {
  it("should generate every registered language", async () => {
    const params = await generateStaticParams();

    expect(params).toHaveLength(
      Object.keys(languageRegistry).length
    );

    const generated = params.map((p) => p.language);

    for (const slug of Object.keys(languageRegistry)) {
      expect(generated).toContain(slug);
    }
  });
});
