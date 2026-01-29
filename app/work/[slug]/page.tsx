// app/work/[slug]/page.tsx
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) {
    return { title: "Project – Jayeetra Bhattacharjee" };
  }
  return {
    title: `${project.title} – Jayeetra Bhattacharjee`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm text-neutral-400">Project not found.</p>
          <Link
            href="/work"
            className="mt-4 inline-block text-xs uppercase tracking-[0.18em] text-emerald-300"
          >
            Back to selected work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/work"
          className="text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-emerald-300"
        >
          ← Selected work
        </Link>
        <header className="mt-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            {project.category}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            {project.title}
          </h1>
        </header>

        <section className="mt-6 space-y-4 text-[0.9rem] text-neutral-200">
          <p>{project.longDescription}</p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Impact
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {project.impact.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Keywords
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[0.7rem] text-neutral-300">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-800 px-2 py-1 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
