import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/layout/AppProviders";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-editorial-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaqueline Kogh | Engenharia de Sistemas",
  description:
    "Arquitetura de sistemas, engenharia de dados e sistemas distribuídos para ambientes complexos e escaláveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased bg-[color:var(--bg)] text-[color:var(--fg)]`}
      >
        <AppProviders>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
