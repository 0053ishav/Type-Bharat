import { FAQItem } from "@/data/faq";

type FAQProps = {
  items: FAQItem[];
  title?: string;
};

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: FAQProps) {
  return (
    <section className="mt-32 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-[--color-text-heading]">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((faq, index) => (
          <details
            key={index}
            className="group bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all hover:border-orange-300"
          >
            <summary className="cursor-pointer p-6 font-bold text-lg flex items-center justify-between">
              <span>{faq.question}</span>
              <span className="relative w-5 h-5 shrink-0">
                <span className="absolute inset-0 flex items-center justify-center text-2xl leading-none transition-all group-open:opacity-0">
                  +
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-2xl leading-none opacity-0 transition-all group-open:opacity-100">
                  −
                </span>
              </span>
            </summary>

            <div className="px-6 pb-6 text-[--color-text-body] leading-relaxed animate-fade-in">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
