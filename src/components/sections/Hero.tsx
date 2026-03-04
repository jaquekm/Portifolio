"use client";

import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import Link from "next/link";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function Hero() {
  const { language } = useAppContext();

  const headingPt =
    "Engenharia de sistemas orientada a dados para ambientes complexos e escaláveis.";
  const headingEn =
    "Systems architecture & data engineering for scalable, distributed environments.";

  const subPt =
    "Estruturo arquiteturas escaláveis, organizo complexidade e projeto sistemas resilientes para crescimento sustentável.";
  const subEn =
    "I design and evolve resilient systems that sustain growth, complexity, and scale.";

  const detailPt =
    "Atuo na interseção entre engenharia de software, arquitetura distribuída e engenharia de dados, estruturando soluções que permanecem robustas mesmo sob crescimento e complexidade.";
  const detailEn =
    "My work sits at the intersection of software architecture, distributed systems, and data engineering — structuring solutions that remain coherent under pressure.";

  const isPt = language === "pt";

  return (
    <section id="topo" className="border-b border-slate-800/60 bg-[color:var(--bg)]">
      <Container className="grid min-h-[70vh] items-center gap-12 py-24 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:py-32 lg:py-36">
        <MotionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            {isPt
              ? "Engenharia de sistemas orientada a dados"
              : "Systems architecture & data engineering"}
          </p>

          <h1 className="mt-4 text-balance font-[var(--font-serif)] text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
            {isPt ? headingPt : headingEn}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base text-slate-400 md:text-lg">
            {isPt ? subPt : subEn}
          </p>

          <p className="mt-4 max-w-xl text-sm text-slate-500 md:text-base">
            {isPt ? detailPt : detailEn}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-2.5 text-sm font-medium text-slate-50 shadow-sm transition hover:bg-[color:var(--accent-soft)]"
            >
              {isPt ? "Ver projetos" : "View work"}
            </Link>
            <Link
              href="/artigos"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-[color:var(--surface-soft)]/70 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-slate-50"
            >
              {isPt ? "Ler artigos técnicos" : "Read technical essays"}
            </Link>
          </div>
        </MotionReveal>

        <MotionReveal className="hidden md:block" delay={0.05}>
          <div className="relative h-80 w-full rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950 shadow-[0_0_0_1px_rgba(148,163,184,0.15)]">
            <div className="pointer-events-none absolute inset-8 rounded-2xl border border-slate-800/80">
              <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
              <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent" />
              <div className="absolute inset-12 rounded-2xl border border-slate-800/70" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)]" />
            <div className="absolute inset-6 flex flex-col justify-between p-4 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
                  {isPt ? "Estrutura sob complexidade" : "Clarity under complexity"}
                </span>
                <span className="text-[10px] text-slate-500">
                  {isPt ? "Arquiteturas distribuídas" : "Distributed architectures"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[11px]">
                <div className="rounded-xl border border-slate-800/70 bg-slate-950/60 p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {isPt ? "Camadas" : "Layers"}
                  </p>
                  <p className="mt-1 text-slate-200">
                    {isPt
                      ? "Ingestão · processamento · exposição."
                      : "Ingestion · processing · serving."}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/70 bg-slate-950/60 p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {isPt ? "Escala" : "Scale"}
                  </p>
                  <p className="mt-1 text-slate-200">
                    {isPt
                      ? "Milhões de eventos/dia com latência controlada."
                      : "Millions of events/day with controlled latency."}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/70 bg-slate-950/60 p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {isPt ? "Resiliência" : "Resilience"}
                  </p>
                  <p className="mt-1 text-slate-200">
                    {isPt
                      ? "Falhas esperadas, recuperações projetadas."
                      : "Failures expected, recovery designed."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

