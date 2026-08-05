export interface TransliterationEngine {
  transliterate(
    text: string,
    language: string
  ): Promise<string>;
}