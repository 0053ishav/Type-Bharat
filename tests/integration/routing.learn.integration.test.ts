import { describe, expect, it } from "vitest";

import { generateStaticParams } from "@/app/learn/[language]/page";
import { getLanguages } from "@/lib/languages/loader";

describe("Learn Routes", () => {
  it("should generate every language", async () => {
    const params = await generateStaticParams();

    expect(params).toHaveLength(
      getLanguages().length
    );

    const generated = params.map((p) => p.language);

    for (const language of getLanguages()) {
      expect(generated).toContain(language.slug);
    }
  });
});