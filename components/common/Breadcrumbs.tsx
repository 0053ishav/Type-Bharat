import Link from "next/link";
import Script from "next/script";

import { generateBreadcrumbSchema } from "@/lib/seo/breadcrumbSchema";
import { BreadcrumbItem } from "@/types/breadcrumb";

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-(--color-text-muted)">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.path}-${item.name}`}
                className="flex items-center gap-2"
              >
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-(--color-primary)"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-(--color-text-muted) hover:text-(--color-text-heading) hover:underline"
                  >
                    {item.name}
                  </Link>
                )}

                {!isLast && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>

      <Script
        id={`breadcrumb-schema-${items.map((item) => item.path).join("-")}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
