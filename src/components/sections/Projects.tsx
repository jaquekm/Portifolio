"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { getProjects } from "@/lib/getProjects";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function Projects() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  const projects = getProjects();

  return (
    <section
      id="projetos"
      className="border-b border-slate-800/60 bg-[color:var(--surface-elevated)]/95 py-24 md:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MotionReveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
              {isPt ? "Projetos selecionados" : "Selected projects"}
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              {isPt
                ? "Estruturas que sustentam crescimento"
                : "Structures that sustain growth"}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400 md:text-base">
              {isPt
                ? "Projetos que conectam arquitetura, dados e sistemas distribuídos para lidar com escala, latência e complexidade em ambientes reais."
                : "Projects that connect architecture, data, and distributed systems to handle scale, latency, and complexity in real environments."}
            </p>
          </MotionReveal>
          <Link
            href="/projetos"
            className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-slate-50 hover:underline"
          >
            {isPt ? "Ver todos os estudos de caso" : "View all case studies"}
          </Link>
        </div>

        <div className="mt-10 space-y-5">
          {projects.map((project, index) => (
            <MotionReveal key={project.slug} delay={Math.min(index * 0.04, 0.16)}>
              <Link
                href={`/projetos/${project.slug}`}
                className="block rounded-3xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 px-6 py-5 transition hover:border-slate-500/80 hover:bg-slate-900/80"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {project.stack.join(" · ")}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                      {isPt ? project.title.pt : project.title.en}
                    </h3>
                    <p className="text-xs text-slate-400 md:text-sm">
                      {isPt ? project.summary.pt : project.summary.en}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-3 text-[11px] text-slate-400 md:items-end">
                    {project.highlight && (
                      <p className="rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-emerald-300">
                        {isPt
                          ? project.highlight.pt ?? project.highlight.en
                          : project.highlight.en ?? project.highlight.pt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

