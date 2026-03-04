"use client";

import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="border-b border-slate-200 dark:border-slate-800/60 bg-white dark:bg-[color:var(--bg)] py-24 md:py-32">
      <Container className="max-w-4xl">
        <MotionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Pensamento sistêmico aplicado à engenharia
          </p>
          
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Sua Foto Redonda */}
            <div className="shrink-0">
              <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-800 shadow-sm">
                <Image 
                  src="/perfil.jpg" 
                  alt="Jaqueline Kogh" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Seus Textos */}
            <div className="space-y-6 text-base md:text-lg text-slate-700 dark:text-slate-300">
              <p>
                Minha trajetória em tecnologia sempre foi guiada por uma pergunta central: <span className="text-slate-900 dark:text-slate-50 font-medium">"Como estruturar sistemas que continuem coerentes à medida que escalam?"</span>
              </p>
              
              <p>
                Sou desenvolvedora com perfil analítico, especializada em arquitetura de sistemas, engenharia de dados e ambientes distribuídos. Meu foco não é apenas implementar funcionalidades, mas projetar estruturas que organizem a complexidade e sustentem crescimento.
              </p>
              
              <p>
                Tenho experiência desenhando arquiteturas orientadas a eventos, pipelines de dados em larga escala, microsserviços resilientes e estratégias de observabilidade para ambientes críticos.
              </p>
              
              <p>
                Minha abordagem combina pensamento sistêmico, clareza estrutural, decisões técnicas fundamentadas e foco em impacto mensurável. Acredito que maturidade técnica não está em usar mais tecnologia, mas em escolher com precisão.
              </p>

              <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
                <p className="text-center font-medium text-slate-900 dark:text-slate-200 italic">
                  "Complexidade não deve ser eliminada — deve ser organizada."
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}