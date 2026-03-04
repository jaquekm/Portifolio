"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { getProjects } from "@/lib/getProjects";

export default function ProjectsPage() {
  const { language } = useAppContext();
  const isPt = language === "pt";
  const projects = getProjects();

  return (
    <div className="bg-[color:var(--bg)] pb-24 pt-10 md:pt-12">
      <Container>
        <header className="max-w-3xl pb-10 pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {isPt ? "Projetos selecionados" : "Selected projects"}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {isPt
              ? "Arquiteturas que organizam complexidade"
              : "Architectures that structure complexity"}
          </h1>
          <p className="mt-4 text-sm text-slate-400 md:text-base">
            {isPt
              ? "Cada projeto aqui representa decisões arquiteturais conscientes em ambientes distribuídos, orientados a dados e com exigência de escala."
              : "Each project represents deliberate architectural decisions in distributed, data-intensive, and scale-sensitive environments."}
          </p>
        </header>

        <div className="space-y-5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="block rounded-3xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 px-6 py-5 transition hover:border-slate-500/80 hover:bg-slate-900/80"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {project.stack.join(" · ")}
                  </p>
                  <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                    {isPt ? project.title.pt : project.title.en}
                  </h2>
                  <p className="text-xs text-slate-400 md:text-sm">
                    {isPt ? project.summary.pt : project.summary.en}
                  </p>
                </div>
                {project.highlight && (
                  <p className="self-start rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-[11px] text-emerald-300">
                    {isPt
                      ? project.highlight.pt ?? project.highlight.en
                      : project.highlight.en ?? project.highlight.pt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

