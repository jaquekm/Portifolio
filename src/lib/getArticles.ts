import type { Article } from "@/types/article";

const articles: Article[] = [
  {
    slug: "arquitetura-decisao",
    title: {
      pt: "Arquitetura não é sobre tecnologia — é sobre decisões irreversíveis",
      en: "Architecture is not about technology — it’s about irreversible decisions",
    },
    summary: {
      pt: "Exploro como decisões arquiteturais moldam a capacidade futura de evolução de sistemas e por que algumas escolhas são difíceis — ou impossíveis — de desfazer.",
      en: "Explores how architectural decisions shape a system’s capacity to evolve and why some choices are hard — or impossible — to reverse.",
    },
    meta: {
      readTime: "8 min",
    },
  },
  {
    slug: "escalabilidade-estrutural",
    title: {
      pt: "Escalabilidade não é aumento de infraestrutura",
      en: "Scalability is structural, not infrastructural",
    },
    summary: {
      pt: "Discuto diferenças entre escalar verticalmente, horizontalmente e estruturalmente, e como decisões de arquitetura impactam custo, complexidade e previsibilidade.",
      en: "Discusses vertical, horizontal, and structural scalability, and how architectural decisions impact cost, complexity, and predictability.",
    },
    meta: {
      readTime: "7 min",
    },
  },
  {
    slug: "engenharia-dados-fundacao",
    title: {
      pt: "Engenharia de dados como fundação estratégica",
      en: "Data engineering as strategic capability",
    },
    summary: {
      pt: "Reflexão sobre como dados bem estruturados transformam a tomada de decisão e reduzem ruído em organizações operando em alta complexidade.",
      en: "Reflects on how well-structured data transforms decision-making and reduces noise in high-complexity organizations.",
    },
    meta: {
      readTime: "6 min",
    },
  },
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

