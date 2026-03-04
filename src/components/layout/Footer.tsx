import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[color:var(--bg)]/95 py-8 text-xs text-slate-500">
      <Container className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Jaqueline Kogh. Engenharia de sistemas.</p>
        <div className="flex items-center gap-4">
          <span className="text-slate-600">
            Focado em arquitetura, dados e sistemas distribuídos.
          </span>
        </div>
      </Container>
    </footer>
  );
}

