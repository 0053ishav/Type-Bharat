import Script from "next/script";

import { generatePageSchema } from "@/lib/seo/pageSchema";

type Props = {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage";
};

export default function PageSchema(props: Props) {
  const schema = generatePageSchema(props);

  return (
    <Script
      id={`page-schema-${props.path.replace(
        /[^a-zA-Z0-9]/g,
        "-",
      )}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}