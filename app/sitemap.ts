import { SITE_URL } from "@/lib/config/site";
import { getLanguages } from "@/lib/languages/loader";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = getLanguages();
  const basePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/typing`,
    },
    {
      url: `${SITE_URL}/learn`,
    },
  ];

  const languagePages = languages.flatMap((language) => {
    const pages: MetadataRoute.Sitemap = [];

    if (language.capabilities.typing) {
      pages.push({
        url: `${SITE_URL}/typing/${language.slug}`,
      });
    }

    if (language.capabilities.learn) {
      pages.push({
        url: `${SITE_URL}/learn/${language.slug}`,
      });
    }
    return pages;
  });

  return [...basePages, ...languagePages];
}