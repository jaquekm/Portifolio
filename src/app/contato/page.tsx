"use client";

import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";

export default function ContactPage() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  return (
    <div className="bg-[color:var(--bg)] pb-24 pt-10 md:pt-12">
      <Container>
        <header className="max-w-3xl pb-10 pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {isPt
              ? "Projetos complexos exigem arquitetura intencional"
              : "Complex systems require intentional architecture"}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {isPt
              ? "Vamos conversar sobre sistemas que precisam escalar com clareza."
              : "Let’s talk about systems that must scale with clarity."}
          </h1>
          <p className="mt-4 text-sm text-slate-400 md:text-base">
            {isPt
              ? "Estou interessada em desafios que envolvam arquitetura de sistemas complexos, engenharia de dados em escala, ambientes distribuídos de alta criticidade e evolução estrutural de produtos SaaS."
              : "I’m interested in roles and collaborations involving scalable distributed architectures, data-intensive platforms, system evolution in high-growth environments, and engineering maturity."}
          </p>
        </header>

        <div className="space-y-4 rounded-2xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 p-6 text-sm text-slate-200">
          <p>
            {isPt
              ? "Se você está construindo sistemas que precisam permanecer coerentes sob escala e complexidade, posso contribuir em nível de arquitetura."
              : "If you are building systems that must remain coherent under scale and complexity, I can contribute at an architectural level."}
          </p>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Email
            </p>
            <a
              href="mailto:jaquemota040997@icloud.com"
              className="text-sm text-slate-100 underline underline-offset-4 hover:text-slate-50"
            >
              jaquemota040997@icloud.com
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Links
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-slate-50"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-slate-50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

