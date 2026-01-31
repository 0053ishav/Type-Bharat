"use client";

import {
  hindiVowels,
  hindiConsonants,
  hindiSecondaryConsonants,
  hindiNumerals,
} from "@/data/hindiLetters";

export default function HindiLetters({
  onInsert,
}: {
  onInsert: (char: string) => void;
}) {
  return (
    <section className="mt-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-(--color-text-heading) mb-4">
        Learn Hindi Letters (Devanagari)
      </h2>

      <p className="text-(--color-text-body) mb-10 max-w-3xl">
        These are the core Hindi (Devanagari) letters. Click any letter to
        insert it directly into the typing editor above.
      </p>

      {/* Vowels */}
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4">Vowels (स्वर)</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {hindiVowels.map(({ letter, sound }) => (
            <button
              key={letter}
              onClick={() => onInsert(letter)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{letter}</div>
              <div className="text-xs text-(--color-text-muted) mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Consonants */}
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4">Consonants (व्यंजन)</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {hindiConsonants.map(({ letter, sound }) => (
            <button
              key={letter}
              onClick={() => onInsert(letter)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{letter}</div>
              <div className="text-xs text-(--color-text-muted) mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Consonants */}
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4">
          Additional Letters (नुक्ता)
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {hindiSecondaryConsonants.map(({ letter, sound }) => (
            <button
              key={letter}
              onClick={() => onInsert(letter)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{letter}</div>
              <div className="text-xs text-(--color-text-muted) mt-1">
                {sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* NUMERALS */}
      <div>
        <h3 className="font-semibold text-xl mb-4">
          Devanagari (Hindi) Numerals
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {hindiNumerals.map(({ en, hi }) => (
            <button
              key={en}
              onClick={() => onInsert(hi)}
              className="card p-4 text-center hover-lift cursor-pointer"
            >
              <div className="text-2xl font-bold">{hi}</div>
              <div className="text-xs text-(--color-text-muted) mt-1">
                {en}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
