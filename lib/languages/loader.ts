import { languageRegistry } from "./registry";

export function getLanguage(id: string) {
  return languageRegistry[id as keyof typeof languageRegistry];
}

export function getLanguages() {
  return Object.values(languageRegistry);
}