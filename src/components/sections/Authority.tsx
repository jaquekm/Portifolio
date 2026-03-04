"use client";

import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";

export function Authority() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  const metrics = isPt
    ? [
        {
          label: "Eventos processados por dia",
          value: "Milhões+",
        },
        {
          label: "SLA em sistemas distribuídos",
          value: "99.98%",
        },
        {
          label: "Redução de latência",
          value: "6h → 1.8s",
        },
        {
          label: "Relatórios executivos",
          value: "-70% tempo",
        },
      ]
    : [
        {
          label: "Events processed per day",
          value: "Millions+",
        },
        {
          label: "Distributed systems SLA",
          value: "99.98%",
        },
        {
          label: "Latency reduction",
          value: "6h → 1.8s",
        },
        {
          label: "Executive reporting time",
          value: "-70%",
        },
      ];

  return (
    <section className="border-b border-slate-800/60 bg-[color:var(--bg)]/95">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-xs uppercase tracking-[0.22em] text-slate-500">
            {isPt
              ? "Experiência em ambientes de alta exigência"
              : "Experience in high-demand environments"}
          </p>
          <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 px-4 py-3"
              >
                <p className="text-xs text-slate-400">{metric.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

