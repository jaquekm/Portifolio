import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/60 bg-white/95 dark:bg-[color:var(--bg)]/95 py-8 text-xs text-slate-500">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-slate-600 dark:text-slate-500 font-medium">
          © {new Date().getFullYear()} Jaqueline Kogh. Engenharia de Sistemas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <span className="text-slate-500 dark:text-slate-600 hidden md:block">
            Focado em arquitetura, dados e sistemas distribuídos.
          </span>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jaquekm"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 dark:text-slate-400 transition hover:text-indigo-600 dark:hover:text-slate-100"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jaqueline-kogh-mota-514869239"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 dark:text-slate-400 transition hover:text-indigo-600 dark:hover:text-slate-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}