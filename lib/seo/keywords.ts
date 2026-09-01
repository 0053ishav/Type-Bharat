export const GLOBAL_KEYWORDS: string[] = [
  "Indian language typing",
  "Indian language typing tool",
  "English transliteration",
  "phonetic typing",
  "transliteration tool",
  "online typing",
  "TypeIndian",
];

export function mergeKeywords(...groups: readonly string[][]) {
  return [...new Set(groups.flat())];
}