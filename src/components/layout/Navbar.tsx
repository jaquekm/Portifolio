"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { useAppContext } from "./AppProviders";

const navItems = [
  { href: "/#sobre", labelPt: "Sobre", labelEn: "About" },
  { href: "/projetos", labelPt: "Projetos", labelEn: "Projects" },
  { href: "/#especialidades", labelPt: "Especialidades", labelEn: "Specialties" },
  { href: "/artigos", labelPt: "Artigos", labelEn: "Articles" },
  { href: "/contato", labelPt: "Contato", labelEn: "Contact" },
];

export function Navbar() {
  const { language, toggleLanguage, theme, toggleTheme } = useAppContext();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-30 transition",
        scrolled
          ? "border-b border-slate-800/60 bg-[color:var(--bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href={isHome ? "#topo" : "/"} className="font-medium tracking-tight">
          <span className="text-sm uppercase text-slate-400">
            Jaqueline Kogh
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-slate-50"
              >
                {language === "pt" ? item.labelPt : item.labelEn}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-full border border-slate-700/80 bg-[color:var(--surface-soft)]/80 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/60 hover:text-slate-50"
            >
              <span
                className={`transition-opacity ${
                  language === "pt" ? "opacity-100" : "opacity-50"
                }`}
              >
                PT
              </span>
              <span className="text-slate-600">/</span>
              <span
                className={`transition-opacity ${
                  language === "en" ? "opacity-100" : "opacity-50"
                }`}
              >
                EN
              </span>
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar modo claro/escuro"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-[color:var(--surface-soft)]/80 text-xs text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/60 hover:text-slate-50"
            >
              <span className="sr-only">
                {theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              </span>
              {theme === "dark" ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M21 14.2A8.2 8.2 0 0 1 9.8 3a6.8 6.8 0 1 0 11.2 11.2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            {/* Social links */}
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs transition hover:text-slate-100"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs transition hover:text-slate-100"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

