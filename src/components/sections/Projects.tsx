"use client";

import Link from "next/link";
import Image from "next/image";
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
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
              {isPt ? "Projetos selecionados" : "Selected projects"}
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              {isPt
                ? "Estruturas que sustentam crescimento"
                : "Structures that sustain growth"}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              {isPt
                ? "Projetos que conectam arquitetura, dados e sistemas distribuídos para lidar com escala, latência e complexidade em ambientes reais."
                : "Projects that connect architecture, data, and distributed systems to handle scale, latency, and complexity in real environments."}
            </p>
          </MotionReveal>
          <Link
            href="/projetos"
            className="group flex items-center gap-2 text-sm font-medium text-slate-300 underline-offset-4 hover:text-indigo-400 transition-colors"
          >
            {isPt ? "Ver todos os estudos de caso" : "View all case studies"}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Aqui mudamos de space-y-5 (lista) para grid (grade) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <MotionReveal key={project.slug} delay={Math.min(index * 0.1, 0.3)}>
              <Link
                href={`/projetos/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/50 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* ÁREA DA IMAGEM 
                  Aqui usamos um placeholder. Se os seus dados em 'getProjects' tiverem 
                  uma propriedade 'image', troque o src para: src={project.image}
                */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm group-hover:scale-105 transition-transform duration-500">
                      {/* Substitua esta div pela tag <Image /> do Next.js quando tiver as fotos reais */}
                      [Imagem do Projeto: {project.slug}]
                   </div>
                   {/* Exemplo de como ficará com a imagem real:
                   <Image 
                      src={`/${project.slug}.png`} 
                      alt={project.title.pt} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                   /> 
                   */}
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-400/80">
                      {project.stack.slice(0, 3).join(" • ")}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-50 group-hover:text-indigo-300 transition-colors">
                      {isPt ? project.title.pt : project.title.en}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {isPt ? project.summary.pt : project.summary.en}
                    </p>
                  </div>
                  
                  {project.highlight && (
                    <div className="mt-6 inline-flex w-fit items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                      {isPt
                        ? project.highlight.pt ?? project.highlight.en
                        : project.highlight.en ?? project.highlight.pt}
                    </div>
                  )}
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}