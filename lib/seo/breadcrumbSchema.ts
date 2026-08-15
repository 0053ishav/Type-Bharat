import { SITE_URL } from "@/lib/config/site";
import { BreadcrumbItem } from "@/types/breadcrumb";

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const position = index + 1;

      return {
        "@type": "ListItem",
        position,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      };
    }),
  };
}