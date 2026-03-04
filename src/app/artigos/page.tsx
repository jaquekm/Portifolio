"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { getArticles } from "@/lib/getArticles";

export default function ArticlesPage() {
  const { language } = useAppContext();
  const isPt = language === "pt";
  const articles = getArticles();

  return (
    <div className="bg-[color:var(--bg)] pb-24 pt-10 md:pt-12">
      <Container>
        <header className="max-w-3xl pb-10 pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {isPt ? "Artigos & reflexões técnicas" : "Technical essays & reflections"}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {isPt
              ? "Pensando arquitetura além da tecnologia"
              : "Thinking about architecture beyond technology"}
          </h1>
          <p className="mt-4 text-sm text-slate-400 md:text-base">
            {isPt
              ? "Textos que articulam decisões arquiteturais, escalabilidade estrutural e o papel da engenharia de dados em sistemas complexos."
              : "Essays articulating architectural decisions, structural scalability, and the role of data engineering in complex systems."}
          </p>
        </header>

        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="block rounded-2xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 px-5 py-4 transition hover:border-slate-500/80 hover:bg-slate-900/80"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-sm font-medium text-slate-50">
                    {isPt ? article.title.pt : article.title.en}
                  </h2>
                  <p className="mt-2 text-xs text-slate-400">
                    {isPt ? article.summary.pt : article.summary.en}
                  </p>
                </div>
                <span className="hidden text-[11px] text-slate-500 sm:inline">
                  {article.meta.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

