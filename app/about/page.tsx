import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Harshita Chavva</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
  I&rsquo;m a <strong className="font-semibold text-foreground">Software Engineer and creative developer</strong> who loves turning ideas into things people can actually use. I&rsquo;m fascinated by the space where <strong className="font-semibold text-foreground">technology, cloud, and design meet</strong>, and I enjoy building experiences that are both thoughtful and functional.
</p>

<p>
  I&rsquo;ve always been drawn to creating things — whether that&rsquo;s building applications, designing interfaces, working with <strong className="font-semibold text-foreground">cloud and DevOps technologies</strong>, experimenting with AI, or exploring a new visual idea. I enjoy moving between <strong className="font-semibold text-foreground">engineering and visual design</strong> to figure out how an idea can become something real.
</p>

<p>
  I&rsquo;m currently pursuing my <strong className="font-semibold text-foreground">B.Tech in Computer Science Engineering</strong>, specializing in Cloud Native Engineering and DevOps. I&rsquo;m constantly learning, building, and experimenting with <strong className="font-semibold text-foreground">cloud infrastructure, AI, software engineering, and UI/UX</strong> — always looking for the next interesting problem to solve.
</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
