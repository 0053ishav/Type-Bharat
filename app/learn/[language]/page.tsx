import { notFound } from "next/navigation";
import type { Metadata } from "next";

import LearnPage from "@/features/learn/components/LearnPage";

import { getLanguage } from "@/lib/languages/loader";
import { createLearnMetadata } from "@/lib/languages/metadata";
import { getLanguages } from "@/lib/languages/loader";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export async function generateStaticParams() {
  return getLanguages().map((language) => ({
    language: language.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { language: slug } = await params;

  const language = getLanguage(slug);

  if (!language) {
    notFound();
  }

  return createLearnMetadata(language);
}

export default async function Page({
  params,
}: Props) {
  const { language: slug } = await params;

  const language = getLanguage(slug);

  if (!language) {
    notFound();
  }

  return <LearnPage language={language} />;
}