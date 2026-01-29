"use client";

const sections = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Selected Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function HeaderNav() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-30 border-b border-neutral-900/80 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <span className="text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase">
          Jayeetra Bhattacharjee
        </span>
        <div className="flex gap-4 text-[0.75rem] text-neutral-300">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className="uppercase tracking-[0.18em] hover:text-emerald-300 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
