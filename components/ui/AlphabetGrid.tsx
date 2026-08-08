"use client";

import type { Language } from "@/types/language";

interface Props {
  language: Language;

  interactive?: boolean;

  onInsert?: (char: string) => void;
}

export default function AlphabetGrid({
  language,
  interactive = false,
  onInsert,
}: Props) {
  const { alphabet, labels } = language;

  const renderCharacters = (
    title: string,
    items?: { letter: string; sound: string }[]
  ) => {
    if (!items?.length) return null;

    return (
      <section className="mb-10">
        <h3 className="font-semibold text-xl mb-4">{title}</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {items.map(({ letter, sound }) => (
            <button
              key={letter}
              disabled={!interactive}
              onClick={() => onInsert?.(letter)}
              className="card p-4 text-center hover-lift disabled:cursor-default"
            >
              <div className="text-2xl font-bold">{letter}</div>

              <div className="text-xs text-(--color-text-muted) mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  };

  return (
    <section className="mt-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-(--color-text-heading) mb-4">
        {labels.alphabet.title}
      </h2>

      <p className="text-(--color-text-body) mb-10 max-w-3xl">
        {labels.alphabet.description}
      </p>

      {renderCharacters(labels.alphabet.vowels, alphabet.vowels)}

      {renderCharacters(labels.alphabet.consonants, alphabet.consonants)}

      {alphabet.extensions &&
        renderCharacters(
          labels.alphabet.extensions ?? "",
          alphabet.extensions
        )}

      {alphabet.vowelSigns &&
        renderCharacters(
          labels.alphabet.vowelSigns ?? "",
          alphabet.vowelSigns
        )}

      {alphabet.symbols &&
        renderCharacters(
          labels.alphabet.symbols ?? "",
          alphabet.symbols
        )}

      <section>
        <h3 className="font-semibold text-xl mb-4">
          {labels.alphabet.numerals}
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {alphabet.numerals.map(({ latin, native }) => (
            <button
              key={latin}
              disabled={!interactive}
              onClick={() => onInsert?.(native)}
              className="card p-4 text-center hover-lift disabled:cursor-default"
            >
              <div className="text-2xl font-bold">{native}</div>

              <div className="text-xs text-(--color-text-muted) mt-1">
                {latin}
              </div>
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}