import Link from "next/link";

export default function LearnTypingLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 mt-6">
      <div className="flex items-center justify-between gap-4 rounded-xl border bg-white p-4 hover-lift">
        <div>
          <p className="text-sm text-[--color-text-muted]">
            {description ?? "New here?"}
          </p>
          <p className="font-semibold text-[--color-text-heading]">
            {label}
          </p>
        </div>

        <Link
          href={href}
          className="btn-secondary whitespace-nowrap"
        >
          Learn →
        </Link>
      </div>
    </div>
  );
}
