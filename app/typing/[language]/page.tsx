import { notFound } from "next/navigation";
import type { Metadata } from "next";

import TypingPage from "@/features/typing/components/TypingPage";

import { getLanguage } from "@/lib/languages/loader";
import { createTypingMetadata } from "@/lib/languages/metadata";
import { languageRegistry } from "@/lib/languages/registry";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

function resolveLanguage(slug: string) {
  const language = getLanguage(slug);

  if (!language) {
    notFound();
  }

  return language;
}

export async function generateStaticParams() {
  return Object.keys(languageRegistry).map((slug) => ({
    language: slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { language: slug } = await params;

  return createTypingMetadata(resolveLanguage(slug));
}

export default async function Page({ params }: Props) {
  const { language: slug } = await params;

  return <TypingPage language={resolveLanguage(slug)} />;
}