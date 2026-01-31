import LanguageTagline from "@/components/LanguageTagline";
import LanguageSelector from "@/components/LanguageSelector";
import FAQ from "@/components/FAQ";
import { COMMON_FAQ } from "@/data/faq";


import {
  LightningIcon,
  DocumentIcon,
  DeviceIcon,
  CopyIcon,
  UploadIcon,
  SparkIcon,
} from "@/components/icons/FeatureIcons";

const features = [
  {
    color: "orange",
    title: "Real-time conversion",
    desc: "See words transform as you type. No waiting, no processing delays—instant feedback with every keystroke.",
    icon: LightningIcon,
  },
  {
    color: "green",
    title: "Session board",
    desc: "Collect and organize your favorite phrases during your session. Perfect for building lyrics sheets or reference documents.",
    icon: DocumentIcon,
  },
  {
    color: "blue",
    title: "Works everywhere",
    desc: "Desktop, mobile, or tablet—TypeBharat works seamlessly in any modern browser without installation.",
    icon: DeviceIcon,
  },
  {
    color: "purple",
    title: "Easy copy-paste",
    desc: "One click to copy your text. Use it anywhere—messaging apps, documents, social media, or presentations.",
    icon: CopyIcon,
  },
  {
    color: "pink",
    title: "Paste & convert",
    desc: "Already have text written? Paste entire paragraphs and convert them instantly with a single click.",
    icon: UploadIcon,
  },
  {
    color: "yellow",
    title: "Smart suggestions",
    desc: "Get intelligent word suggestions as you type to ensure accurate transliteration every time.",
    icon: SparkIcon,
  },
];

const steps = [
  {
    title: "Think of the word in your language",
    desc: "Picture how the word sounds when you speak it naturally.",
  },
  {
    title: "Type it phonetically in English",
    desc: "Write the word using English letters exactly as it sounds.",
  },
  {
    title: "Press the space bar",
    desc: "Watch as your English text transforms into perfect native script.",
  },
];


const SectionDivider = () => (
  <div className="my-32 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />
);

export default function Home() {
  return (
    <div className="relative bg-mesh">
      {/* Decorative gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial-orange" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial-green" />
      </div>

      <main className="relative max-w-6xl mx-auto px-6 py-14">
        {/* HERO */}
        <section className="text-center">
          <LanguageTagline />

          <h1 className="mt-12 text-4xl md:text-5xl lg:text-6xl font-bold hero-glow text-(--color-text-heading)">
            Type in English.{" "}
            <span className="text-gradient">Write in your language.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-(--color-text-body)">
            The simplest way to type Indian languages. No keyboards. No learning
            curve. Just type.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/panjabi-typing" className="btn-primary text-lg px-10 py-4">
              Start typing in Panjabi →
            </a>
            <a href="/hindi-typing" className="btn-secondary text-lg px-10 py-4">
              Try Hindi
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-(--color-text-muted)">
            <span className="badge badge-success">100% Free</span>
            <span className="badge badge-success">No Login</span>
            <span className="badge badge-success">Privacy-first</span>
          </div>

          <div className="mt-6">
            <span className="badge badge-gradient">
              Panjabi • Hindi • More coming soon
            </span>
          </div>
        </section>
        <LanguageSelector />
        <SectionDivider />

        {/* Live demo card */}
        <section className="max-w-5xl mx-auto">
          <div className="card hover-lift">
            <div className="bg-linear-to-r from-orange-500 to-green-600 px-6 py-4 text-white font-medium">
              See it in action
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-(--color-text-muted) mb-2">
                  You type
                </p>
                <div className="input-base font-mono border-dashed">
                  sat sri akaal
                </div>
              </div>

              <div>
                <p className="text-sm text-(--color-text-muted) mb-2">
                  You get
                </p>
                <div className="card-gradient-orange p-4 text-3xl font-bold">
                  ਸਤ ਸ੍ਰੀ ਅਕਾਲ
                </div>
              </div>
            </div>

            <p className="pb-6 text-center text-sm text-(--color-text-muted)">
              Press space after each word
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* How it works */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
              Three steps to perfect typing
            </h2>
            <p className="mt-4 text-lg text-(--color-text-body)">
              Start writing in seconds, no tutorials needed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card hover-scale p-8">
              <div className="icon-box icon-box-orange w-14 h-14 mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Type in English</h3>
              <p className="text-(--color-text-muted) leading-relaxed">
                Use your regular keyboard. Type words naturally using English
                letters, just as you would pronounce them.
              </p>
            </div>

            <div className="card hover-scale p-8">
              <div className="icon-box icon-box-green w-14 h-14 mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Press space</h3>
              <p className="text-(--color-text-muted) leading-relaxed">
                Hit the space bar and watch the magic happen. Words instantly
                transform into beautiful native script.
              </p>
            </div>

            <div className="card hover-scale p-8">
              <div className="icon-box icon-box-blue w-14 h-14 mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Copy & use</h3>
              <p className="text-(--color-text-muted) leading-relaxed">
                Copy your text anywhere—WhatsApp, social media, documents. Save
                favorite phrases to your session board.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Use Cases */}
        <section className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
              Perfect for every occasion
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card card-gradient-orange p-6">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-bold text-lg mb-2">Social Media Posts</h3>
              <p className="text-sm text-(--color-text-muted)">
                Write authentic captions, tweets, and status updates in your
                mother tongue
              </p>
            </div>

            <div className="card card-gradient-green p-6">
              <div className="text-2xl mb-3">🎵</div>
              <h3 className="font-bold text-lg mb-2">Song Lyrics</h3>
              <p className="text-sm text-(--color-text-muted)">
                Type lyrics accurately for your music collection, YouTube
                videos, or personal archives
              </p>
            </div>

            <div className="card card-gradient-blue p-6">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">WhatsApp Messages</h3>
              <p className="text-sm text-(--color-text-muted)">
                Chat with family and friends in your native language, making
                conversations more personal
              </p>
            </div>

            <div className="card p-6">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="font-bold text-lg mb-2">Creative Writing</h3>
              <p className="text-sm text-(--color-text-muted)">
                Compose poetry, stories, or personal journals in beautiful
                native scripts
              </p>
            </div>

            <div className="card p-6">
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-bold text-lg mb-2">Professional Work</h3>
              <p className="text-sm text-(--color-text-muted)">
                Create documents, presentations, and emails for bilingual work
                environments
              </p>
            </div>

            <div className="card p-6">
              <div className="text-2xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-lg mb-2">Teaching Kids</h3>
              <p className="text-sm text-(--color-text-muted)">
                Help children learn to read and write their heritage language
                with ease
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* WHAT IS TYPEBHARAT */}
        <section className="mt-32 max-w-4xl mx-auto"  id="about">
          <h2 className="text-3xl font-bold mb-8 text-(--color-text-heading)">
            What is TypeBharat?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-(--color-text-body) leading-relaxed text-lg">
              TypeBharat is a free, browser-based typing tool designed to make
              writing in Indian languages as natural as speaking. Instead of
              memorizing complex keyboard layouts or installing special
              software, you simply type the way words sound in English, and
              TypeBharat instantly converts them into the correct script.
            </p>

            <p className="mt-6 text-(--color-text-body) leading-relaxed text-lg">
              Whether you&apos;re reconnecting with your heritage, teaching your
              children their mother tongue, or staying connected with loved ones
              back home, TypeBharat removes the technical barriers to authentic
              communication.
            </p>

            <div className="mt-8 card card-gradient-orange p-6 border-l-4 border-(--color-primary)">
              <p className="font-medium text-(--color-text-body)">
                <strong>Privacy first:</strong> Everything you type stays in
                your browser. We don&apos;t store, track, or transmit your
                content. What you write is yours alone.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* KEY FEATURES */}
        <section className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
              Built for simplicity and speed
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map(({ color, title, desc, icon: Icon }) => (
              <div key={title} className="flex gap-4">
                <div className={`icon-box icon-box-${color} w-14 h-14 p-4`}>
                  <Icon />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-(--color-text-muted)">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* How to Type */}
        <section className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-(--color-text-heading)">
            How to type Indian languages using English
          </h2>

          <div className="card p-8">
            <p className="text-lg text-(--color-text-body) mb-6">
              You don&apos;t need to learn a new keyboard layout or install
              special fonts. The process is remarkably simple and intuitive:
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="badge badge-primary w-8 h-8 flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-(--color-text-muted)">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-gradient-orange p-6 rounded-xl">
              <h4 className="font-bold mb-3">💡 Example</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-(--color-text-muted) mb-2">Type</p>
                  <div className="input-base font-mono">namaste duniya</div>
                </div>
                <div>
                  <p className="text-sm text-(--color-text-muted) mb-2">Get</p>
                  <div className="input-base text-2xl">नमस्ते दुनिया</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* TRANSLITERATION VS TRANSLATION */}
        <section className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-(--color-text-heading)">
            Understanding transliteration vs translation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Transliteration */}
            <div className="card card-gradient-green p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-green w-12 h-12">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Transliteration</h3>
              </div>

              <p className="text-(--color-text-body) mb-4">
                Converts the <strong>sound</strong> of words from one script to
                another. The meaning and pronunciation stay exactly the same.
              </p>

              <div className="card p-4">
                <p className="text-sm font-semibold mb-2">Example</p>
                <p className="font-mono text-sm mb-1">namaste</p>
                <p className="text-2xl">नमस्ते</p>
                <p className="text-xs text-(--color-text-muted) mt-2">
                  Same word, different script
                </p>
              </div>
            </div>

            {/* Translation */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box w-12 h-12 bg-gray-200 text-gray-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Translation</h3>
              </div>

              <p className="text-(--color-text-body) mb-4">
                Converts the <strong>meaning</strong> of words from one language
                to another. The words and sounds change completely.
              </p>

              <div className="card p-4">
                <p className="text-sm font-semibold mb-2">Example</p>
                <p className="font-mono text-sm mb-1">hello</p>
                <p className="text-2xl">नमस्ते</p>
                <p className="text-xs text-(--color-text-muted) mt-2">
                  Different words, same meaning
                </p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="mt-8 card card-gradient-blue p-6 border-l-4 border-blue-500">
            <h4 className="font-bold mb-2 text-(--color-text-heading)">
              Why this matters
            </h4>
            <p className="text-(--color-text-body)">
              TypeBharat is a <strong>transliteration</strong> tool, which makes
              it ideal for song lyrics, proper names, captions, and personal
              messages where preserving exact pronunciation matters. You&apos;re
              not translating thoughts — you&apos;re expressing them in their
              authentic written form.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ */}
        <FAQ items={COMMON_FAQ} />

        <SectionDivider />

        {/* Final CTA */}
        <section className="mt-32">
          <div className="card-gradient-orange p-12 text-center rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start typing today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              No sign-up. No friction. Just type.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/panjabi-typing" className="btn-primary text-lg px-10 py-4">
                Panjabi
              </a>
              <a href="/hindi-typing" className="btn-secondary text-lg px-10 py-4">
                Hindi
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
