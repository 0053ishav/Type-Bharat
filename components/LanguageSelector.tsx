import Link from "next/link";

import { getLanguages } from "@/lib/languages/loader";

export default function LanguageSelector() {
  const languages = getLanguages();

  return (
    <section className="mt-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="badge badge-gradient mb-4 inline-block">
          🌐 Supported Languages
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
          Choose your language
        </h2>

        <p className="mt-4 text-lg text-(--color-text-muted) max-w-2xl mx-auto">
          Pick a language and start typing instantly. Learn the script,
          practice the alphabet, or jump straight into the typing tool.
        </p>
      </div>

      {/* Language Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.slice(0, 6).map((language) => (
          <div
            key={language.id}
            className="card p-6 hover-lift group relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-radial-orange opacity-20 pointer-events-none" />

            <div className="relative">
              {/* Language identity */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-(--color-text-heading)">
                    {language.name}
                  </h3>

                  <p className="text-2xl mt-1">{language.nativeName}</p>
                </div>

                <span className="badge badge-success text-xs">
                  Available
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-(--color-text-muted) leading-relaxed mb-6">
                {language.typing.intro}
              </p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mb-6">
                {language.capabilities.typing && (
                  <span className="badge badge-gradient">
                    ⌨️ Typing
                  </span>
                )}

                {language.capabilities.learn && (
                  <span className="badge badge-gradient">
                    📖 Learn
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                {language.capabilities.typing && (
                  <Link
                    href={`/typing/${language.slug}`}
                    className="btn-primary text-center"
                  >
                    Start Typing →
                  </Link>
                )}

                {language.capabilities.learn && (
                  <Link
                    href={`/learn/${language.slug}`}
                    className="btn-secondary text-center"
                  >
                    Learn →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expansion message */}
      <div className="mt-10 text-center">
        <div className="card-gradient-orange rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-(--color-text-heading)">
            More Indian languages are coming.
          </p>

          <p className="mt-2 text-sm text-(--color-text-muted)">
            TypeIndian is expanding its language library so you can type,
            learn, and explore more Indian scripts from one place.
          </p>
        </div>
      </div>
    </section>
  );
}