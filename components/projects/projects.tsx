import {
  ArrowRight,
  Bot,
  Layers,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
// import Image from "next/image";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "synapse",
    icon: Bot,
    iconLabel: "Synapse AI",
    title:
      "An AI-powered memory and knowledge system that helps users store, retrieve, and interact with their information.",
    description:
      "I built Synapse as a RAG-based memory system that combines a FastAPI backend with retrieval-augmented generation to turn stored information into contextual AI responses.",
    meta: "AI / Full-Stack Project, 2026",
    imageRatio: 1024 / 768,
    image: "/synapse.jpg",
    imageAlt: "Synapse AI memory and RAG system",
  },
  {
    id: "air-canvas",
    icon: Wand2,
    iconLabel: "Air Canvas",
    title:
      "A computer vision project that lets you draw and interact with a digital canvas using hand gestures.",
    description:
      "I built Air Canvas to explore gesture-based interaction, using computer vision to track hand movements and translate them into real-time digital drawing.",
    meta: "Computer Vision Project, 2026",
    imageRatio: 1024 / 768,
    image: "/aircanvas.jpg",
    imageAlt: "Air Canvas gesture-based drawing application",
  },
  {
    id: "user-authentication",
    icon: Layers,
    iconLabel: "User Authentication System",
    title:
      "A secure user authentication system designed to handle account creation, login, and protected application access.",
    description:
      "I built this project to strengthen my understanding of authentication, authorization, user sessions, and secure access to application resources.",
    meta: "Full-Stack Project, 2026",
    imageRatio: 1024 / 768,
    image: "/userauth.jpg",
    imageAlt: "User authentication system interface",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              A collection of things I&rsquo;ve built while exploring AI, cloud,
  software development, and everything in between.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
     
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            {/* <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2} */}
            {/* /> */}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
