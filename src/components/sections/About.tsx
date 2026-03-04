"use client";

import { Container } from "@/components/layout/Container";
import { useAppContext } from "@/components/layout/AppProviders";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function About() {
  const { language } = useAppContext();
  const isPt = language === "pt";

  return (
    <section
      id="sobre"
      className="border-b border-slate-800/60 bg-[color:var(--bg)]/95 py-24 md:py-28"
    >
      <Container className="max-w-3xl">
        <MotionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {isPt
              ? "Pensamento sistêmico aplicado à engenharia"
              : "Systems thinking applied to engineering"}
          </p>

          <h2 className="mt-4 font-[var(--font-serif)] text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            {isPt ? "Sobre" : "About"}
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-300 md:text-base">
            {isPt ? (
              <>
                <p>
                  Minha trajetória em tecnologia sempre foi guiada por uma
                  pergunta central:{" "}
                  <span className="text-slate-100">
                    “Como estruturar sistemas que continuem coerentes à medida que
                    escalam?”
                  </span>
                </p>
                <p>
                  Sou desenvolvedora com perfil analítico, especializada
                  em arquitetura de sistemas, engenharia de dados e ambientes
                  distribuídos. Meu foco não é apenas implementar funcionalidades,
                  mas projetar estruturas que organizem a complexidade e sustentem
                  crescimento.
                </p>
                <p>
                  Tenho experiência desenhando arquiteturas orientadas a eventos,
                  pipelines de dados em larga escala, microsserviços resilientes e
                  estratégias de observabilidade para ambientes críticos.
                </p>
                <p>
                  Minha abordagem combina pensamento sistêmico, clareza
                  estrutural, decisões técnicas fundamentadas e foco em impacto
                  mensurável. Acredito que maturidade técnica não está em usar
                  mais tecnologia, mas em escolher com precisão.
                </p>
              </>
            ) : (
              <>
                <p>
                  I approach engineering as{" "}
                  <span className="text-slate-100">system design</span>, not
                  feature delivery.
                </p>
                <p>
                  With a strong analytical mindset, I specialize in distributed
                  architectures, data-intensive systems, event-driven design and
                  cloud-native infrastructure. My focus is not simply on building
                  software — but on structuring complexity in a way that enables
                  sustainable evolution.
                </p>
                <p>
                  I value architectural clarity, technical rigor, and decisions
                  that scale beyond immediate requirements. Mature engineering is
                  not about adding complexity — it’s about organizing it.
                </p>
              </>
            )}
          </div>

          <p className="mt-8 rounded-xl border border-slate-800/70 bg-[color:var(--surface-soft)]/80 p-5 text-sm text-slate-200">
            {isPt
              ? "Complexidade não deve ser eliminada — deve ser organizada."
              : "Complexity should not be eliminated — it should be structured."}
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}

