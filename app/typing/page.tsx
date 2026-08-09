import Link from "next/link";
import type { Metadata } from "next";
import { getLanguages } from "@/lib/languages/loader";

export const metadata: Metadata = {
  title: "Typing Tools – TypeBharat",
  description:
    "Free Indian language typing tools. Type in English and instantly write in Hindi, Panjabi, and more Indian languages using phonetic transliteration.",
};

const typingTools = [
  {
    name: "Hindi Typing",
    native: "हिन्दी",
    description:
      "Type English and instantly write in Hindi using the Devanagari script.",
    href: "/typing/hindi",
    status: "Live",
    color: "orange",
  },
  {
    name: "Panjabi Typing",
    native: "ਪੰਜਾਬੀ",
    description:
      "Fast English to Panjabi typing using the Gurmukhi script.",
    href: "/typing/panjabi",
    status: "Live",
    color: "green",
  },
  {
    name: "Gujarati Typing",
    native: "ગુજરાતી",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Marathi Typing",
    native: "मराठी",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Tamil Typing",
    native: "தமிழ்",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Telugu Typing",
    native: "తెలుగు",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Kannada Typing",
    native: "ಕನ್ನಡ",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Malayalam Typing",
    native: "മലയാളം",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Bengali Typing",
    native: "বাংলা",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Odia Typing",
    native: "ଓଡ଼ିଆ",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Assamese Typing",
    native: "অসমীয়া",
    status: "Coming Soon",
    color: "gray",
  },
  {
    name: "Urdu Typing",
    native: "اردو",
    status: "Coming Soon",
    color: "gray",
  },
];

const features = [
  "Real-time transliteration",
  "Session board",
  "Smart suggestions",
  "Paste & convert",
  "Privacy-first",
  "No login required",
];

export default function TypingIndexPage() {
  const languages = getLanguages();
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto">
        <span className="badge badge-gradient mb-6">
          Indian Language Typing Platform
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-(--color-text-heading)">
          Typing Tools
        </h1>

        <p className="mt-8 text-xl text-(--color-text-body)">
          Type naturally in English and instantly write in Indian languages.
          Fast, accurate phonetic typing that works directly in your browser.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/typing/panjabi"
            className="btn-primary text-lg px-8 py-4"
          >
            Start Typing
          </Link>

          <Link
            href="/learn"
            className="btn-secondary text-lg px-8 py-4"
          >
            Learn First
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-4 gap-6">
        <div className="card p-6 text-center">
          <div className="text-4xl font-bold">12+</div>
          <p className="text-sm text-(--color-text-muted)">
            Planned Languages
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="text-4xl font-bold">{languages.length}</div>
          <p className="text-sm text-(--color-text-muted)">
            Available Today
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="text-4xl font-bold">100%</div>
          <p className="text-sm text-(--color-text-muted)">
            Browser Based
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="text-4xl font-bold">Free</div>
          <p className="text-sm text-(--color-text-muted)">
            Forever
          </p>
        </div>
      </section>

      {/* Tools */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-(--color-text-heading)">
              Available Languages
            </h2>

            <p className="text-(--color-text-muted) mt-2">
              Choose a language and start typing instantly.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {typingTools.map((tool) => (
            <div
              key={tool.name}
              className="card hover-lift p-6 flex flex-col"
            >
              <div className="flex justify-between items-start">
                <div className="text-4xl mb-4">
                  {tool.native}
                </div>

                {tool.status === "Live" ? (
                  <span className="badge badge-success">
                    Live
                  </span>
                ) : (
                  <span className="badge">
                    Soon
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold">
                {tool.name}
              </h3>

              {tool.description && (
                <p className="mt-3 text-sm text-(--color-text-muted) flex-1">
                  {tool.description}
                </p>
              )}

              <div className="mt-6">
                {tool.status === "Live" ? (
                  <Link
                    href={tool.href!}
                    className="btn-primary w-full text-center"
                  >
                    Open Tool →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="btn-secondary w-full opacity-60 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">
          Every typing tool includes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="card p-6 flex items-center gap-4"
            >
              <div className="icon-box icon-box-green">
                ✓
              </div>

              <span className="font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="card-gradient-orange rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="icon-box icon-box-orange mx-auto mb-6">
              1
            </div>

            <h3 className="font-bold text-xl mb-3">
              Type in English
            </h3>

            <p>
              Use your normal keyboard.
            </p>
          </div>

          <div className="text-center">
            <div className="icon-box icon-box-green mx-auto mb-6">
              2
            </div>

            <h3 className="font-bold text-xl mb-3">
              Press Space
            </h3>

            <p>
              Words convert automatically.
            </p>
          </div>

          <div className="text-center">
            <div className="icon-box icon-box-blue mx-auto mb-6">
              3
            </div>

            <h3 className="font-bold text-xl mb-3">
              Copy Anywhere
            </h3>

            <p>
              WhatsApp, Documents, Social Media, Email.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="card p-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to start?
          </h2>

          <p className="text-lg text-(--color-text-body) mb-8">
            Choose a language and begin typing in seconds.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/typing/panjabi"
              className="btn-primary"
            >
              Panjabi
            </Link>

            <Link
              href="/typing/hindi"
              className="btn-secondary"
            >
              Hindi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}