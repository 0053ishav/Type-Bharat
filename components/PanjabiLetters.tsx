"use client";

import {
  panjabiVowels,
  panjabiConsonants,
  panjabiSecondaryConsonants,
  panjabiNumerals,
} from "@/data/panjabiLetters";

export default function PanjabiLetters({
  onInsert,
}: {
  onInsert?: (char: string) => void;
}) {
  return (
    <section className="mt-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-[--color-text-heading] mb-4">
        Learn Panjabi Letters (Gurmukhi)
      </h2>

      <p className="text-[--color-text-body] mb-10 max-w-3xl">
        If you&apos;re new to Panjabi typing, these are the core Gurmukhi
        letters. Click any letter to insert it directly into the typing box.
      </p>

      {/* Vowels */}
      <div className="mb-10 ">
        <h3 className="font-semibold text-xl mb-4">Vowels (ਸਵਰ)</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {panjabiVowels.map(({ letter, sound }) => (
            <button
              key={letter}
              onClick={() => onInsert?.(letter)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{letter}</div>
              <div className="text-xs text-[--color-text-muted] mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Consonants */}
      <div>
        <h3 className="font-semibold text-xl mb-4">Consonants (ਵਿਆਂਜਨ)</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {panjabiConsonants.map(({ letter, sound }) => (
            <button
              key={letter}
              onClick={() => onInsert?.(letter)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{letter}</div>
              <div className="text-xs text-[--color-text-muted] mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Consonants */}
      <div className="mt-10 mb-10">
        <h3 className="font-semibold text-xl mb-2">
          Secondary Consonants (ਵਿਸ਼ੇਸ਼ ਅੱਖਰ)
        </h3>

        <p className="text-sm text-[--color-text-muted] mb-4 max-w-3xl">
          These letters are used for sounds borrowed from Persian, Arabic, and
          modern usage. They are common in names and everyday Panjabi words.
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {panjabiSecondaryConsonants.map(({ letter, sound }) => (
            <button
              key={letter}
              onClick={() => onInsert?.(letter)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{letter}</div>
              <div className="text-xs text-[--color-text-muted] mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* NUMERALS */}
      <div>
        <h3 className="font-semibold text-xl mb-4">
          Gurmukhi (Panjabi) Numerals
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {panjabiNumerals.map(({ en, pa }) => (
            <button
              key={en}
              onClick={() => onInsert?.(pa)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{pa}</div>
              <div className="text-xs text-(--color-text-muted) mt-1">{en}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}