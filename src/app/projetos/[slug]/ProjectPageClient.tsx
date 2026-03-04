"use client";

import { useAppContext } from "@/components/layout/AppProviders";
import { Container } from "@/components/layout/Container";
import type { Project } from "@/types/project";
import PlataformaStreaming from "@/content/projetos/plataforma-streaming.mdx";
import ArquiteturaSaas from "@/content/projetos/arquitetura-saas.mdx";
import PipelineDados from "@/content/projetos/pipeline-dados.mdx";
import SistemaDistribuido from "@/content/projetos/sistema-distribuido.mdx";

const projectContent: Record<string, React.ComponentType> = {
  "plataforma-streaming": PlataformaStreaming,
  "arquitetura-saas": ArquiteturaSaas,
  "pipeline-dados": PipelineDados,
  "sistema-distribuido": SistemaDistribuido,
};

interface ProjectPageClientProps {
  project: Project;
}

export function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { language } = useAppContext();
  const isPt = language === "pt";
  const Content = projectContent[project.slug];

  return (
    <div className="bg-[color:var(--bg)] pb-24 pt-10 md:pt-12">
      <Container>
        <header className="max-w-3xl pb-10 pt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {project.stack.join(" · ")}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {isPt ? project.title.pt : project.title.en}
          </h1>
          <p className="mt-4 text-sm text-slate-400 md:text-base">
            {isPt ? project.summary.pt : project.summary.en}
          </p>
          {project.highlight && (
            <p className="mt-4 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-[11px] text-emerald-300">
              {isPt
                ? project.highlight.pt ?? project.highlight.en
                : project.highlight.en ?? project.highlight.pt}
            </p>
          )}
        </header>

        <article className="prose prose-invert max-w-3xl text-sm text-slate-200 prose-headings:text-slate-50 prose-strong:text-slate-50">
          {Content ? <Content /> : null}
        </article>
      </Container>
    </div>
  );
}

