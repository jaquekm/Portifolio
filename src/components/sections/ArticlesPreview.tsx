"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { getArticles } from "@/lib/getArticles";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ArticlesPreview() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  const articles = getArticles().slice(0, 3);

  return (
    <section className="border-b border-slate-800/60 bg-[color:var(--bg)] py-24 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MotionReveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
              {isPt ? "Artigos & reflexões técnicas" : "Technical essays & reflections"}
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              {isPt
                ? "Arquitetura como decisão estrutural"
                : "Architecture as structural decision"}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400 md:text-base">
              {isPt
                ? "Recrutadores sênior valorizam clareza de pensamento. Estes textos exploram decisões irreversíveis, escalabilidade e o papel de dados em sistemas complexos."
                : "Senior recruiters value clarity of thought. These essays explore irreversible decisions, scalability, and the role of data in complex systems."}
            </p>
          </MotionReveal>
          <Link
            href="/artigos"
            className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-slate-50 hover:underline"
          >
            {isPt ? "Ver todos os artigos" : "View all essays"}
          </Link>
        </div>

        <div className="mt-10 space-y-5">
          {articles.map((article, index) => (
            <MotionReveal key={article.slug} delay={Math.min(index * 0.04, 0.16)}>
              <Link
                href={`/artigos/${article.slug}`}
                className="block rounded-2xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 px-5 py-4 transition hover:border-slate-500/80 hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-50">
                      {isPt ? article.title.pt : article.title.en}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400">
                      {isPt ? article.summary.pt : article.summary.en}
                    </p>
                  </div>
                  <span className="hidden text-[11px] text-slate-500 sm:inline">
                    {article.meta.readTime}
                  </span>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

