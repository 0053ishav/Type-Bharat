import Link from "next/link";

export default function LanguageSelector() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-[--color-text-heading]">
        Choose your language
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Panjabi */}
        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-2">
            Panjabi Typing Tool
          </h3>
          <p className="text-sm text-[--color-text-muted] mb-4">
            Type in English → Write in ਪੰਜਾਬੀ
          </p>
          <Link href="/panjabi-typing" className="btn-primary">
            Start Panjabi Typing →
          </Link>
        </div>

        {/* Hindi */}
        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-2">
            Hindi Typing Tool
          </h3>
          <p className="text-sm text-[--color-text-muted] mb-4">
            Type in English → Write in हिन्दी
          </p>
          <Link href="/hindi-typing" className="btn-primary">
            Start Hindi Typing →
          </Link>
        </div>

        {/* Gujarati */}
        <div className="border rounded-lg p-6 bg-gray-50 opacity-70">
          <h3 className="text-lg font-semibold mb-2">
            Gujarati Typing Tool
          </h3>
          <p className="text-sm text-[--color-text-muted] mb-4">
            Type in English → Write in ગુજરાતી
          </p>
          <button
            disabled
            className="px-4 py-2 rounded bg-gray-200 text-gray-500 cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
