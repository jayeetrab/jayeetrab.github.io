"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Jayeetra Bhattacharjee – AI/ML Engineer & Business Analytics",
  description:
    "AI/ML Engineer delivering LLM, NLP, and automation solutions for global enterprises.",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        {/* Hero / Contact */}
        <motion.header
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          {...fadeUp(0)}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              AI / ML · LLM Systems · Analytics
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Jayeetra Bhattacharjee
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-300 md:text-base">
              AI/ML Engineer and MSc Business Analytics student designing{" "}
              <span className="text-[var(--accent)]">
                LLM, analytics, and automation systems
              </span>{" "}
              that improve decision-making, compliance, and operational
              efficiency for global enterprises.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-black/25 px-4 py-4 text-sm text-neutral-200 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur">
            <p>Phone: +44 07438153933</p>
            <p>
              Email:{" "}
              <a
                href="mailto:jayeetra.uk@gmail.com"
                className="underline decoration-[var(--accent)]/60 decoration-2 underline-offset-4 hover:text-[var(--accent)]"
              >
                jayeetra.uk@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com"
                className="underline decoration-[var(--accent)]/60 decoration-2 underline-offset-4 hover:text-[var(--accent)]"
              >
                /in/jayeetra-bhattacharjee
              </a>
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              66 F, Dean&apos;s Court, 3 St George&apos;s Rd, Bristol BS1 5UL, UK
            </p>
            <div className="pt-3">
              <Link
                href="/work"
                className="text-xs uppercase tracking-[0.18em] text-neutral-300 hover:text-[var(--accent)]"
              >
                Selected Work →
              </Link>
            </div>
          </div>
        </motion.header>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Summary */}
        <section
          id="summary"
          className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]"
        >
          <motion.div {...fadeUp(0.05)}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Professional Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-[0.9rem]">
              Consulting-minded AI/ML Engineer with 3+ years&apos; experience in
              technology delivery and client implementation at Tata Consultancy
              Services. I have delivered AI, LLM, NLP, and automation solutions
              for global retail, fashion, and electronics clients, improving
              decision-making, compliance accuracy, and operational efficiency.
              Strong expertise in Python, machine learning, cloud-based
              deployment, model optimisation, data engineering, and
              enterprise-scale automation. Currently pursuing an MSc in Business
              Analytics at the University of Bristol and seeking an Artificial
              Intelligence Engineer role to build purposeful, high-impact AI
              solutions for large UK clients.
            </p>
          </motion.div>

          {/* Snapshot cards */}
          <motion.div
            className="grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-1"
            {...fadeUp(0.12)}
          >
            <div className="rounded-2xl border border-white/5 bg-black/30 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Impact Highlights
              </p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-200">
                <li>
                  Improved decision-making speed by 25% and cut manual effort by
                  30% through AI-driven analytics.
                </li>
                <li>
                  Raised audit accuracy from 60% → 90% and protected £500K+
                  annual revenue with AI-powered audit engines.
                </li>
                <li>
                  Built LLM ensembles achieving 90–95% accuracy and deployed on
                  AWS SageMaker.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-black/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Focus Areas
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                {[
                  "LLM Systems",
                  "NLP & Text Analytics",
                  "Audit & Compliance AI",
                  "Insight Automation",
                  "Cloud ML (AWS)",
                  "Decision Intelligence",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-[0.68rem] uppercase tracking-wide text-neutral-100"
                  >
                    {tag}
                  </span>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <motion.section id="experience" className="mt-12" {...fadeUp(0.1)}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Experience
          </h2>
          <div className="mt-5 space-y-8">
            {/* TCS AI/ML Engineer */}
            <article className="rounded-2xl border border-white/5 bg-[var(--bg-elevated)]/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
              <header className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-50">
                    AI/ML Engineer
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Tata Consultancy Services · Kolkata, India
                  </p>
                </div>
                <p className="text-xs text-neutral-400">
                  Jan 2024 – Sep 2025 · 1 yr 9 mos
                </p>
              </header>
              <ul className="mt-3 space-y-2 text-[0.78rem] text-neutral-200">
                <li>
                  Delivered AI-driven analytics solutions improving
                  decision-making speed by 25% and cutting manual effort by 30%.
                </li>
                <li>
                  Built AI audit-validation engines in Python & LLMs, boosting
                  accuracy from 60% → 90% and preventing £500K+ annual revenue
                  leakage.
                </li>
                <li>
                  Created an AI insight-mining engine using Python and LLMs,
                  automating hypothesis testing and reducing analysis time from 3
                  days → 6 hours.
                </li>
                <li>
                  Developed an LLM ensemble pipeline (GPT-4, Gemini, Claude,
                  Hugging Face ranking), achieving 90–95% accuracy and deploying
                  via AWS SageMaker.
                </li>
                <li>
                  Built AI-powered compliance reporting engines increasing
                  reporting accuracy from 40% → 80% across 5,000+ monthly
                  transactions.
                </li>
                <li>
                  Delivered product listing optimisation using semantic search &
                  keyword ranking, boosting visibility by 35% and conversions by
                  20%.
                </li>
                <li>
                  Created dashboards for AI outputs, increasing adoption among
                  non-technical users by 40%.
                </li>
              </ul>
            </article>

            {/* TCS Java Developer */}
            <article className="rounded-2xl border border-white/5 bg-[var(--bg-elevated)]/90 p-5">
              <header className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-50">
                    Java Developer
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Tata Consultancy Services · Kolkata, India
                  </p>
                </div>
                <p className="text-xs text-neutral-400">
                  Jul 2022 – Dec 2023 · 1 yr 5 mos
                </p>
              </header>
              <ul className="mt-3 space-y-2 text-[0.78rem] text-neutral-200">
                <li>
                  Engineered microservice-driven platforms handling 100K+ daily
                  transactions, supporting enterprise-scale digital
                  transformation.
                </li>
                <li>
                  Streamlined order and payment lifecycle by integrating Hybris,
                  Juspay, and OMS systems for 1M+ annual orders.
                </li>
                <li>
                  Optimised APIs and SQL reporting, reducing data retrieval time
                  by 25%.
                </li>
                <li>
                  Delivered secure payment workflows worth £2M+ annually with
                  enhanced authentication and encryption.
                </li>
              </ul>
            </article>

            {/* Research Roles */}
            <article className="rounded-2xl border border-white/5 bg-[var(--bg-elevated)]/90 p-5">
              <header className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-50">
                    Research Assistant (Level 1)
                  </h3>
                  <p className="text-xs text-neutral-400">
                    University of Bristol · United Kingdom
                  </p>
                </div>
                <p className="text-xs text-neutral-400">
                  Oct 2025 – Present · Part-time
                </p>
              </header>
              <p className="mt-2 text-[0.78rem] text-neutral-200">
                Supporting ML model development (Random Forest, XGBoost) for
                behavioural prediction and performance analytics, and delivering
                dashboards and reports for data-driven decision support in
                maritime research.
              </p>
            </article>

            <article className="rounded-2xl border border-white/5 bg-[var(--bg-elevated)]/90 p-5">
              <header className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-50">
                    Research Support Assistant (Level 1)
                  </h3>
                  <p className="text-xs text-neutral-400">
                    University of Bristol · United Kingdom
                  </p>
                </div>
                <p className="text-xs text-neutral-400">
                  Oct 2025 – Nov 2025 · Part-time
                </p>
              </header>
              <p className="mt-2 text-[0.78rem] text-neutral-200">
                Supported an urban planning research project under Dr. Cheng by
                gathering and organising large geospatial (GIS) datasets,
                cleaning and preprocessing spatial layers, and evaluating
                LLM-generated planning insights through structured prompts and
                validation against ground data.
              </p>
            </article>
          </div>
        </motion.section>

        {/* Projects & Research Highlights */}
        <motion.section
          id="projects"
          className="mt-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Projects & Research Highlights
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: 0.05 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={`/work/${proj.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-black/35 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/70 hover:bg-black/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.8)]"
                >
                  <div>
                    <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      {proj.category}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-neutral-50 group-hover:text-[var(--accent)]">
                      {proj.title}
                    </p>
                    <p className="mt-2 text-[0.78rem] text-neutral-200">
                      {proj.description}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[0.65rem] text-neutral-300">
                    {proj.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2 py-1 uppercase tracking-wide transition-colors group-hover:bg-[var(--accent)] group-hover:text-neutral-950"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Education */}
        <motion.section
          id="skills"
          className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
          {...fadeUp(0.12)}
        >
          {/* Skills */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Skills
            </h2>
            <div className="mt-4 space-y-4 text-[0.8rem] text-neutral-200">
              <SkillGroup
                title="Programming & Frameworks"
                items={[
                  "Python (pandas, NumPy, scikit-learn)",
                  "Java (Spring Boot, Microservices)",
                  "SQL",
                  "REST APIs",
                ]}
              />
              <SkillGroup
                title="Machine Learning & AI"
                items={[
                  "Supervised & Unsupervised Learning",
                  "LLMs (Hugging Face, OpenAI/Gemini)",
                  "NLP (spaCy, Transformers)",
                  "Model Deployment & Optimization",
                ]}
              />
              <SkillGroup
                title="Data Engineering & Databases"
                items={[
                  "Chroma DB",
                  "Relational & NoSQL Databases",
                  "ETL Pipelines",
                  "Cloud Data Solutions (AWS, SageMaker)",
                ]}
              />
              <SkillGroup
                title="Analytics & Business Intelligence"
                items={[
                  "Predictive Analytics",
                  "Text-to-SQL",
                  "Data Visualization (Matplotlib, Seaborn)",
                  "Workflow Automation",
                ]}
              />
              <SkillGroup
                title="DevOps & Cloud Tools"
                items={[
                  "Docker",
                  "CI/CD Basics",
                  "AWS SageMaker",
                  "Cloud ML Pipelines",
                ]}
              />
              <SkillGroup
                title="Languages"
                items={["English (Fluent)", "Hindi (Fluent)", "Bengali (Native)"]}
              />
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Education
            </h2>
            <div className="mt-4 space-y-4 text-[0.8rem] text-neutral-200">
              <div className="rounded-2xl border border-white/5 bg-[var(--bg-elevated)]/90 p-4">
                <p className="text-sm font-semibold text-neutral-50">
                  Master of Science in Business Analytics
                </p>
                <p className="text-xs text-neutral-400">
                  University of Bristol · United Kingdom · 2025–2026
                </p>
                <p className="mt-2 text-[0.78rem] text-neutral-200">
                  Key modules: Data Analytics, Modelling Analytics, Business
                  Analytics Consulting Project.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[var(--bg-elevated)]/90 p-4">
                <p className="text-sm font-semibold text-neutral-50">
                  Bachelor of Technology in Electrical and Electronics
                  Engineering
                </p>
                <p className="text-xs text-neutral-400">
                  Vellore Institute of Technology · Bhopal, India · 2018–2022
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/5 pt-6 text-[0.75rem] text-neutral-500">
          <p>
            Open to AI Engineer, Machine Learning Engineer, and Applied
            Scientist roles in the UK.
          </p>
        </footer>
      </div>
    </main>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {title}
      </p>
      <ul className="mt-2 space-y-1 text-[0.8rem] text-neutral-200">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
