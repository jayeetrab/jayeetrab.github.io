import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <header className="flex items-baseline justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Selected Work
            </h1>
            <p className="mt-2 max-w-xl text-sm text-neutral-300">
              A selection of AI, LLM, analytics, and automation projects delivered
              across retail, e-commerce, compliance, urban planning, and maritime
              research.
            </p>
          </div>
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-emerald-300"
          >
            Back to profile
          </Link>
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((proj) => (
            <Link
              key={proj.slug}
              href={`/work/${proj.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl"
            >
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  {proj.category}
                </p>
                <h2 className="mt-2 text-sm font-semibold text-neutral-50 group-hover:text-emerald-300">
                  {proj.title}
                </h2>
                <p className="mt-2 text-[0.8rem] text-neutral-200">
                  {proj.description}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[0.65rem] text-neutral-300">
                {proj.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-800 px-2 py-1 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
