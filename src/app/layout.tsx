import type { ReactNode } from "react";

// A página inicial é o HTML estático em public/portfolio.html (ver next.config.ts).
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
