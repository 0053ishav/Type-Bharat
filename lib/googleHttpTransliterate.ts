const LANG_TO_ITC: Record<string, string> = {
  pa: "pa-t-i0-und",
  hi: "hi-t-i0-und",
  ta: "ta-t-i0-und",
  te: "te-t-i0-und",
  bn: "bn-t-i0-und",
};

export async function fetchSuggestions(
  word: string,
  langCode: string,
  max = 5
): Promise<string[]> {
  const itc = LANG_TO_ITC[langCode];
  if (!itc || !word.trim()) return [];

  const url = new URL("https://inputtools.google.com/request");
  url.searchParams.set("text", word);
  url.searchParams.set("itc", itc);
  url.searchParams.set("num", String(max));
  url.searchParams.set("cp", "0");
  url.searchParams.set("cs", "0");
  url.searchParams.set("ie", "utf-8");
  url.searchParams.set("oe", "utf-8");
  url.searchParams.set("app", "demopage");

  const res = await fetch(url.toString());
  const data = await res.json();

  // Google response format: ["SUCCESS", [[original, [s1, s2, ...]]]]
  if (data?.[0] !== "SUCCESS") return [];

  const suggestions = data?.[1]?.[0]?.[1];
  if (!Array.isArray(suggestions)) return [];

  return suggestions;
}
