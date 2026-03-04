import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    slug: "plataforma-streaming",
    title: {
      pt: "Plataforma de processamento de dados em tempo real",
      en: "Real-time event processing platform",
    },
    summary: {
      pt: "Migração de um sistema batch (6h de latência) para uma arquitetura orientada a eventos com processamento em tempo real para dashboards operacionais e modelos preditivos.",
      en: "Migration from a 6-hour batch system to an event-driven architecture with real-time processing for operational dashboards and predictive models.",
    },
    stack: ["Kafka", "Flink", "PostgreSQL", "Kubernetes"],
    highlight: {
      pt: "Latência reduzida de 6h para 1.8s em milhões de eventos/dia.",
      en: "Latency reduced from 6h to 1.8s across millions of events/day.",
    },
  },
  {
    slug: "arquitetura-saas",
    title: {
      pt: "Arquitetura de microsserviços para plataforma SaaS",
      en: "SaaS platform migration to microservices",
    },
    summary: {
      pt: "Evolução de um monólito acoplado para uma arquitetura baseada em bounded contexts, comunicação assíncrona e API Gateway, reduzindo gargalos de deploy e aumentando previsibilidade.",
      en: "Evolution of a tightly coupled monolith into a domain-based architecture with bounded contexts, event-based communication, and an API Gateway to reduce deployment bottlenecks and increase predictability.",
    },
    stack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Kubernetes"],
    highlight: {
      pt: "Ciclo de deploy reduzido em ~60% com escalabilidade por domínio.",
      en: "Deployment cycle reduced by ~60% with per-domain scalability.",
    },
  },
  {
    slug: "pipeline-dados",
    title: {
      pt: "Pipeline de dados para analytics estratégico",
      en: "Data engineering pipeline for strategic analytics",
    },
    summary: {
      pt: "Estruturação de Data Lake em camadas, modelagem analítica para BI e orquestração de pipelines com governança e qualidade de dados.",
      en: "Layered Data Lake design, analytical modeling for BI, and orchestrated pipelines with data quality and governance.",
    },
    stack: ["Python", "Airflow", "Snowflake", "dbt", "AWS"],
    highlight: {
      pt: "Tempo de geração de relatórios reduzido em ~70% com dados confiáveis.",
      en: "Reporting time reduced by ~70% with reliable, auditable data.",
    },
  },
  {
    slug: "sistema-distribuido",
    title: {
      pt: "Sistema distribuído de alta disponibilidade",
      en: "Highly available distributed system",
    },
    summary: {
      pt: "Desenho de arquitetura multi-região com replicação ativa-passiva, estratégias de failover e cache distribuído para cumprir SLAs globais exigentes.",
      en: "Multi-region architecture with active-passive replication, failover strategies, and distributed cache to meet demanding global SLAs.",
    },
    stack: ["AWS", "Kubernetes", "NGINX", "Redis Cluster", "PostgreSQL"],
    highlight: {
      pt: "SLA elevado para 99.98% com redução de ~80% em downtime.",
      en: "SLA raised to 99.98% with ~80% reduction in downtime.",
    },
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

