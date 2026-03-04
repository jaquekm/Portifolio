import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/getProjects";
import { ProjectPageClient } from "./ProjectPageClient";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.title.pt,
    description: project.summary.pt,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}

