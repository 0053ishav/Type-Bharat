import { notFound } from "next/navigation";
import type { Metadata } from "next";

import TypingPage from "@/features/typing/components/TypingPage";

import { getLanguage, getLanguages } from "@/lib/languages/loader";
import { createTypingMetadata } from "@/lib/languages/metadata";

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
  return getLanguages().map((language) => ({
      language: language.slug,
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