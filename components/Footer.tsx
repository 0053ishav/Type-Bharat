import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-(--color-border) mt-24 py-12 bg-(--color-bg-card) bg-mesh"
    >
      <div className="max-w-6xl mx-auto px-6 text-sm text-(--color-text-muted)">
        {/* Existing content — unchanged */}
        <div className="mb-4 text-gradient-orange text-lg font-bold">
          TypeBharat
        </div>

        <p className="max-w-3xl">
          English to Indian language typing tool.
          Built for lyric writers, students, creators, and everyday users who
          want to write naturally in their own language.
        </p>

        <p className="mt-3">
          Supports Panjabi • Hindi • Gujarati (soon).
          More Indian languages coming soon.
        </p>

        <p className="mt-3 font-medium text-(--color-text-body)">
          No login. No tracking. Free forever.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-4 text-sm">
          {/* Typing tools */}
          <div>
            <h4 className="font-semibold text-(--color-text-heading) mb-3">
              Typing Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/panjabi-typing" className="hover:underline">
                  Panjabi Typing
                </Link>
              </li>
              <li>
                <Link href="/hindi-typing" className="hover:underline">
                  Hindi Typing
                </Link>
              </li>
              <li className="opacity-60 cursor-not-allowed">
                Gujarati (coming soon)
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-(--color-text-heading) mb-3">
              Learn
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn/panjabi" className="hover:underline">
                  Learn Panjabi Typing
                </Link>
              </li>
              <li>
                <Link href="/learn/hindi" className="hover:underline">
                  Learn Hindi Typing
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-(--color-text-heading) mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About TypeBharat
                </a>
              </li>
              <li className="opacity-60">
                Offline support (planned)
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-semibold text-(--color-text-heading) mb-3">
              Trust & Privacy
            </h4>
            <ul className="space-y-2">
              <li>No user accounts</li>
              <li>No analytics tracking</li>
              <li>No data storage</li>
              <li>Browser-only processing</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-(--color-border) flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} TypeBharat. All rights reserved.
          </div>

          <div className="text-center md:text-right text-(--color-text-muted)">
            Type in English. Write in your language.
          </div>
        </div>
      </div>
    </footer>
  );
}
