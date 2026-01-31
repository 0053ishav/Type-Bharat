import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* Error Code */}
        <div className="text-7xl font-extrabold text-gradient-orange hero-glow mb-4">
          404
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-(--color-text-heading) mb-4">
          This page doesn’t exist
        </h1>

        <p className="text-lg text-(--color-text-body) mb-8">
          The page you’re looking for might have been moved, renamed,
          or never existed. But don’t worry — you can still type in Indian
          languages instantly.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-3">
            Go to Home
          </Link>

          <Link href="/panjabi-typing" className="btn-secondary px-8 py-3">
            Start Typing in Panjabi
          </Link>
        </div>

        {/* Secondary links */}
        <div className="mt-8 text-sm text-(--color-text-muted)">
          Or try:
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/hindi-typing" className="hover:underline">
              Hindi Typing
            </Link>
            <Link href="/learn/panjabi" className="hover:underline">
              Learn Panjabi
            </Link>
            <Link href="/learn/hindi" className="hover:underline">
              Learn Hindi
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
