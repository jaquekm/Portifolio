"use client";

import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { MotionReveal } from "@/components/ui/MotionReveal";

// Sub-componente para destacar áreas de atuação
function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-800/40 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

export function About() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  return (
    <section id="sobre" className="relative overflow-hidden border-b border-slate-800/60 bg-[color:var(--bg)]/95 py-24 md:py-32">
      {/* Decorativo de fundo: Padrão de Grade sutil */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(black,transparent_70%)]">
        <div className="absolute inset-0 h-full w-full bg-[grid:20px_20px] [bg-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]" />
      </div>

      <Container className="max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <MotionReveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
              {isPt ? "Pensamento sistêmico aplicado à engenharia" : "Systems thinking applied to engineering"}
            </p>

            <h2 className="mt-4 font-[var(--font-serif)] text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              {isPt ? "Sobre" : "About"}
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
              {isPt ? (
                <>
                  <p>
                    Minha trajetória sempre foi guiada por uma pergunta:{" "}
                    <span className="font-medium text-indigo-300">
                      “Como estruturar sistemas que continuem coerentes à medida que escalam?”
                    </span>
                  </p>
                  <p className="text-sm md:text-base">
                    Sou desenvolvedora com perfil analítico, especializada em <strong className="text-slate-100">arquitetura de sistemas e engenharia de dados</strong>. 
                    Projeto estruturas que organizam a complexidade para sustentar o crescimento do negócio.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I approach engineering as <span className="font-medium text-indigo-300">system design</span>, not just feature delivery.
                  </p>
                  <p className="text-sm md:text-base text-slate-400">
                    With a strong analytical mindset, I specialize in distributed architectures and data-intensive systems.
                  </p>
                </>
              )}
            </div>

            {/* Nova seção de Badges para "Scan" rápido */}
            <div className="mt-8 flex flex-wrap gap-2">
              <SkillBadge>Distributed Systems</SkillBadge>
              <SkillBadge>Event-Driven</SkillBadge>
              <SkillBadge>Data Engineering</SkillBadge>
              <SkillBadge>Cloud Native</SkillBadge>
            </div>
          </MotionReveal>

          {/* Coluna Lateral: Um "Quote" ou Stats sutil */}
          <MotionReveal delay={0.2} className="hidden lg:block">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm italic text-slate-400">
                {isPt 
                  ? "Maturidade técnica não está em usar mais tecnologia, mas em escolher com precisão."
                  : "Technical maturity is not about using more technology, but about choosing with precision."}
              </p>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.3}>
          <p className="mt-12 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5 text-sm font-medium text-indigo-200/80 backdrop-blur-sm">
            {isPt
              ? "Complexidade não deve ser eliminada — deve ser organizada."
              : "Complexity should not be eliminated — it should be structured."}
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}