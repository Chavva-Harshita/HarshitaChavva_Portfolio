import {
  Bot,
  Github,
  Layers,
  Wand2,
} from "lucide-react";
import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";

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
  githubUrl: string;
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
    githubUrl: "https://github.com/Chavva-Harshita/synapse-ai",
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
    githubUrl: "https://github.com/Chavva-Harshita/aircanvas",
  },

  {
    id: "flexywork",
    icon: Layers,
    iconLabel: "FlexyWork",
    title:
      "A cooperative gig services platform that intelligently connects gig workers with service seekers based on skills, availability, location, and requirements.",
    description:
      "I built FlexyWork to simplify gig hiring through intelligent worker matching, secure authentication, worker profiles, availability management, gig applications, attendance tracking, and role-based workflows. The platform is designed to create a more transparent and efficient experience for both gig workers and service seekers.",
    meta: "Full-Stack Project, 2026",
    imageRatio: 1024 / 768,
    image: "/flexywork.png",
    imageAlt: "FlexyWork cooperative gig services platform interface",
    githubUrl: "https://github.com/Soumya1-byte/FlexyWork",
  },

  {
    id: "clearlift",
    icon: Layers,
    iconLabel: "ClearLift",
    title:
      "An AI-powered platform designed to automate and streamline business workflows through intelligent agents and secure service integrations.",
    description:
      "I built ClearLift to explore AI-driven workflow automation, multi-agent systems, and scalable backend architecture. The platform uses specialized AI agents to analyze tasks, coordinate workflows, and deliver actionable results through a full-stack application.",
    meta: "AI & Full-Stack Project, 2026",
    imageRatio: 1024 / 768,
    image: "/clearlift.png",
    imageAlt:
      "ClearLift AI-powered workflow automation platform interface",
    githubUrl: "https://github.com/Chavva-Harshita/CLEARLIFT",
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
              A collection of things I&rsquo;ve built while exploring AI,
              cloud, software development, and everything in between.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
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

        {/* Project Header */}
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon
              className="h-3.5 w-3.5 text-foreground"
              aria-hidden="true"
            />
          </span>

          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        {/* Project Image */}
        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner absolute inset-0">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>

          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        {/* Project Meta + GitHub Button */}
        <div className="flex items-center justify-between gap-3 px-1 pb-2">
          <p className="text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/10 bg-foreground/4 px-3.5 py-2 text-[12px] font-medium tracking-tight text-foreground transition-all duration-200 hover:bg-foreground/8 hover:border-foreground/20"
            //onClick={(e) => e.stopPropagation()}
          >
            <Github
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />
            View GitHub
          </a>
        </div>
      </article>
    </FadeIn>
  );
}