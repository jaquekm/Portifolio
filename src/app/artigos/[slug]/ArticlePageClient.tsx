"use client";

import { useAppContext } from "@/components/layout/AppProviders";
import { Container } from "@/components/layout/Container";
import type { Article } from "@/types/article";
import ArquiteturaDecisao from "@/content/artigos/arquitetura-decisao.mdx";
import EscalabilidadeEstrutural from "@/content/artigos/escalabilidade-estrutural.mdx";
import EngenhariaDadosFundacao from "@/content/artigos/engenharia-dados-fundacao.mdx";

const articleContent: Record<string, React.ComponentType> = {
  "arquitetura-decisao": ArquiteturaDecisao,
  "escalabilidade-estrutural": EscalabilidadeEstrutural,
  "engenharia-dados-fundacao": EngenhariaDadosFundacao,
};

interface ArticlePageClientProps {
  article: Article;
}

export function ArticlePageClient({ article }: ArticlePageClientProps) {
  const { language } = useAppContext();
  const isPt = language === "pt";
  const Content = articleContent[article.slug];

  return (
    <div className="bg-[color:var(--bg)] pb-24 pt-10 md:pt-12">
      <Container>
        <header className="max-w-3xl pb-10 pt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {isPt ? "Reflexão técnica" : "Technical reflection"}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {isPt ? article.title.pt : article.title.en}
          </h1>
          <p className="mt-3 text-xs text-slate-500">{article.meta.readTime}</p>
          <p className="mt-4 text-sm text-slate-400 md:text-base">
            {isPt ? article.summary.pt : article.summary.en}
          </p>
        </header>

        <article className="prose prose-invert max-w-3xl text-sm text-slate-200 prose-headings:text-slate-50 prose-strong:text-slate-50">
          {Content ? <Content /> : null}
        </article>
      </Container>
    </div>
  );
}

