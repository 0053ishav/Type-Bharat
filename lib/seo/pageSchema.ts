import { SITE_URL } from "@/lib/config/site";

type PageSchemaOptions = {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage";
};

export function generatePageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: PageSchemaOptions) {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}