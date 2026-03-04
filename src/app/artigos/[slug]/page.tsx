import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/getArticles";
import { ArticlePageClient } from "./ArticlePageClient";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: article.title.pt,
    description: article.summary.pt,
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticlePageClient article={article} />;
}

