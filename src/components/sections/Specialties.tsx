"use client";

import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { MotionReveal } from "@/components/ui/MotionReveal";

const specialties = [
  {
    key: "systems",
    titlePt: "Arquitetura de Sistemas",
    titleEn: "Systems Architecture",
    descPt:
      "Design orientado a domínio, arquitetura orientada a eventos, microsserviços e evolução responsável de monólitos.",
    descEn:
      "Domain-Driven Design, event-driven systems, modular decomposition, and responsible monolith-to-microservices evolution.",
  },
  {
    key: "data",
    titlePt: "Engenharia de Dados",
    titleEn: "Data Engineering",
    descPt:
      "Modelagem analítica, pipelines de streaming, governança e qualidade de dados, estruturação de Data Lakes.",
    descEn:
      "Streaming pipelines, analytical modeling, data governance, and high-volume processing architectures.",
  },
  {
    key: "distributed",
    titlePt: "Sistemas Distribuídos",
    titleEn: "Distributed Systems",
    descPt:
      "Consistência eventual, resiliência, tolerância a falhas, comunicação assíncrona e estratégias de escalabilidade.",
    descEn:
      "Eventual consistency, resilience patterns, horizontal scalability, and asynchronous communication.",
  },
  {
    key: "cloud",
    titlePt: "Cloud & Escalabilidade",
    titleEn: "Cloud & Scalability",
    descPt:
      "Infraestrutura como código, containers, orquestração e estratégias multi-região guiadas por métricas.",
    descEn:
      "Infrastructure as Code, container orchestration, multi-region deployment, and metrics-driven capacity planning.",
  },
  {
    key: "observability",
    titlePt: "Observabilidade & Performance",
    titleEn: "Observability & Performance",
    descPt:
      "Monitoramento estruturado, tracing distribuído, análise de gargalos e otimização baseada em métricas.",
    descEn:
      "Structured monitoring, distributed tracing, bottleneck analysis, and metrics-driven optimization.",
  },
];

export function Specialties() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  return (
    <section
      id="especialidades"
      className="border-y border-slate-800/60 bg-[color:var(--surface-muted)]/90 py-24 md:py-28"
    >
      <Container>
        <MotionReveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {isPt ? "Especialidades técnicas" : "Core technical expertise"}
          </p>
          <h2 className="mt-4 font-[var(--font-serif)] text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            {isPt ? "Arquitetura, dados e sistemas distribuídos" : "Architecture, data, and distributed systems"}
          </h2>
          <p className="mt-4 text-sm text-slate-400 md:text-base">
            {isPt
              ? "Atuo na convergência entre arquitetura de sistemas, engenharia de dados e ambientes distribuídos, com decisões estruturais que sustentam crescimento."
              : "I work at the convergence of systems architecture, data engineering, and distributed environments, focusing on structural decisions that sustain growth."}
          </p>
        </MotionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, index) => (
            <MotionReveal key={item.key} delay={Math.min(index * 0.03, 0.18)}>
              <div className="group rounded-2xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 p-6 transition hover:border-slate-500/80 hover:bg-slate-900/70">
                <h3 className="text-sm font-medium text-slate-50">
                  {isPt ? item.titlePt : item.titleEn}
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  {isPt ? item.descPt : item.descEn}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

