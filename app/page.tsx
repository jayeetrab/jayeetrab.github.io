// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayeetra Bhattacharjee – AI/ML Engineer & Business Analytics",
  description:
    "AI/ML Engineer delivering LLM, NLP, and analytics solutions for global enterprises. Currently pursuing MSc Business Analytics at the University of Bristol.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Header */}
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Jayeetra Bhattacharjee
            </h1>
            <p className="mt-2 max-w-xl text-sm text-neutral-300 md:text-base">
              AI/ML Engineer & MSc Business Analytics student designing{" "}
              <span className="text-emerald-400">
                LLM, analytics, and automation systems
              </span>{" "}
              that improve decision-making, compliance, and operational efficiency.
            </p>
          </div>
          <div className="text-sm text-neutral-300 space-y-1">
            <p>Phone: +44 07438153933</p>
            <p>
              Email:{" "}
              <a
                href="mailto:jayeetra.uk@gmail.com"
                className="underline decoration-emerald-400/60 decoration-2 underline-offset-4 hover:text-emerald-300"
              >
                jayeetra.uk@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com"
                className="underline decoration-emerald-400/60 decoration-2 underline-offset-4 hover:text-emerald-300"
              >
                /in/jayeetra-bhattacharjee
              </a>
            </p>
            <p className="text-xs text-neutral-400">
              66 F, Dean&apos;s Court, 3 St George&apos;s Rd, Bristol BS1 5UL, UK
            </p>
          </div>
        </header>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800" />

        {/* Summary */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Professional Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200 md:text-[0.9rem]">
              Consulting-minded AI/ML Engineer with 3+ years&apos; experience delivering
              AI, LLM, NLP, and automation solutions for global retail, fashion, and
              electronics clients at Tata Consultancy Services. I specialise in Python,
              machine learning, cloud-based deployment, and enterprise-scale automation
              to improve decision-making, compliance accuracy, and operational efficiency.
              Currently pursuing an MSc in Business Analytics at the University of
              Bristol, I am seeking an Artificial Intelligence Engineer role where I can
              build purposeful, high-impact AI systems for large UK organisations.
            </p>
          </div>

          {/* Snapshot cards */}
          <div className="grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Impact Highlights
              </p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-200">
                <li>
                  Improved decision-making speed by 25% and cut manual effort by 30%
                  through AI-driven analytics.
                </li>
                <li>
                  Raised audit accuracy from 60% → 90% and protected £500K+ annual
                  revenue.
                </li>
                <li>
                  Deployed LLM ensemble pipelines achieving 90–95% accuracy via AWS
                  SageMaker.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Focus Areas
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                {[
                  "LLM Systems",
                  "NLP & Text Analytics",
                  "Audit & Compliance AI",
                  "Insight Automation",
                  "Decision Intelligence",
                  "Cloud ML (AWS)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-800 px-2.5 py-1 text-[0.68rem] uppercase tracking-wide text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Experience
          </h2>
          <div className="mt-5 space-y-8">
            {/* TCS AI/ML Engineer */}
            <article className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
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
                  Delivered AI-driven analytics solutions improving decision-making speed
                  by 25% and cutting manual effort by 30%.
                </li>
                <li>
                  Built AI-powered audit validation engines using Python and LLMs,
                  raising audit accuracy from 60% → 90% and preventing £500K+ annual
                  revenue leakage.
                </li>
                <li>
                  Developed LLM insight-mining engines that automated hypothesis testing
                  and reduced analysis time from 3 days → 6 hours.
                </li>
                <li>
                  Created an LLM ensemble pipeline (GPT-4, Gemini, Claude, Hugging Face
                  ranking), achieving 90–95% accuracy and deploying via AWS SageMaker.
                </li>
                <li>
                  Built compliance reporting engines increasing reporting accuracy from
                  40% → 80% across 5,000+ monthly transactions.
                </li>
                <li>
                  Delivered product listing optimisation using semantic search and keyword
                  ranking, boosting visibility by 35% and conversions by 20%.
                </li>
                <li>
                  Created dashboards for AI outputs, increasing adoption among
                  non-technical users by 40%.
                </li>
              </ul>
            </article>

            {/* TCS Java Developer */}
            <article className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
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
                  transactions to support enterprise-scale digital transformation.
                </li>
                <li>
                  Streamlined order and payment lifecycle by integrating Hybris, Juspay,
                  and OMS systems for 1M+ annual orders.
                </li>
                <li>
                  Optimised APIs and SQL reporting, reducing data retrieval time by 25%.
                </li>
                <li>
                  Delivered secure payment workflows worth £2M+ annually with enhanced
                  authentication and encryption.
                </li>
              </ul>
            </article>

            {/* Research Roles */}
            <article className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
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
                Supporting ML model development (Random Forest, XGBoost) for behavioural
                prediction and performance analytics, and delivering dashboards and
                reports for data-driven decision support in maritime research.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
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
                Supported urban planning analytics by gathering and organising large
                geospatial datasets, cleaning and preprocessing spatial layers, and
                evaluating LLM-generated planning insights through prompt refinement and
                validation against ground data.
              </p>
            </article>
          </div>
        </section>

        {/* Projects & Research Highlights */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Projects & Research Highlights
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {projects.map((proj) => (
              <article
                key={proj.title}
                className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
              >
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
                    {proj.category}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-neutral-50">
                    {proj.title}
                  </p>
                  <p className="mt-2 text-[0.78rem] text-neutral-200">
                    {proj.description}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.65rem] text-neutral-300">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-800 px-2 py-1 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Education */}
        <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
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
                  "CI/CD basics",
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
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Education
            </h2>
            <div className="mt-4 space-y-4 text-[0.8rem] text-neutral-200">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                <p className="text-sm font-semibold text-neutral-50">
                  MSc Business Analytics
                </p>
                <p className="text-xs text-neutral-400">
                  University of Bristol · United Kingdom · 2025–2026
                </p>
                <p className="mt-2 text-[0.78rem] text-neutral-200">
                  Key modules: Data Analytics, Modelling Analytics, Business Analytics
                  Consulting Project.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                <p className="text-sm font-semibold text-neutral-50">
                  B.Tech in Electrical and Electronics Engineering
                </p>
                <p className="text-xs text-neutral-400">
                  Vellore Institute of Technology · Bhopal, India · 2018–2022
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-neutral-800 pt-6 text-[0.75rem] text-neutral-500">
          <p>
            Open to AI Engineer, Machine Learning Engineer, and Applied Scientist roles
            in the UK.
          </p>
        </footer>
      </div>
    </main>
  );
}

type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Urban Planning Analytics & LLM Support",
    category: "Research · Urban Planning & LLMs",
    description:
      "Supported an urban planning initiative by gathering and organising GIS datasets (zoning, land-use, transport), performing spatial data cleaning, and evaluating LLM-generated planning insights via prompt refinement and validation.",
    tags: ["GIS", "LLMs", "Data Cleaning", "Urban Planning"],
  },
  {
    title: "AI-Powered Audit Validation Engine",
    category: "AI for Audit & Compliance",
    description:
      "Developed a Python + LLM transaction validation engine for a retail client, improving audit accuracy from 60% → 90% and preventing over £500K in annual revenue leakage.",
    tags: ["Python", "LLMs", "Compliance", "Revenue Protection"],
  },
  {
    title: "AI-Powered Compliance Reporting Engine",
    category: "Compliance Automation",
    description:
      "Built an AI + rule-based system that increased compliance reporting accuracy from 40% → 80% across 5,000+ monthly transactions by automating data checks, classification, and anomaly detection.",
    tags: ["Automation", "NLP", "Rules Engine", "Compliance"],
  },
  {
    title: "LLM Insight-Mining Engine",
    category: "Decision Intelligence",
    description:
      "Created an LLM-driven system (GPT-4, Gemini, Claude, Hugging Face models) that automated business hypothesis testing, reducing analysis time from 3 days → 6 hours.",
    tags: ["LLMs", "Hypothesis Testing", "Analytics", "Python"],
  },
  {
    title: "LLM Ensemble Pipeline (AWS SageMaker)",
    category: "LLM Systems Engineering",
    description:
      "Designed a multi-model LLM ensemble with ranking and evaluation achieving 90–95% accuracy, deployed end-to-end on AWS SageMaker for scalable production use.",
    tags: ["AWS SageMaker", "LLM Ensemble", "MLOps"],
  },
  {
    title: "Text-to-SQL “Talk-to-Data” System",
    category: "Self-Service Analytics",
    description:
      "Built a FastAPI + LLM backend enabling natural-language querying of SQL databases, helping non-technical teams extract insights without writing queries.",
    tags: ["FastAPI", "LLMs", "Text-to-SQL", "APIs"],
  },
  {
    title: "Product Listing Automation Pipeline",
    category: "E-commerce Intelligence",
    description:
      "Automated catalogue enrichment workflows using NLP, clustering, and metadata optimisation to enhance product listing quality, visibility, and conversion.",
    tags: ["NLP", "Clustering", "E-commerce"],
  },
  {
    title: "POS Transaction Automation & Revenue Protection",
    category: "Retail AI & Automation",
    description:
      "Automated POS transaction validation for a jewellery brand, raising accuracy from 60% → 90% and protecting £500K+ in annual revenue.",
    tags: ["Automation", "Retail", "Revenue Protection"],
  },
  {
    title: "HyPACT 2.0 Maritime Analytics",
    category: "Maritime Behavioural Modelling",
    description:
      "Contributed to maritime behavioural modelling using Random Forest, XGBoost, and ensemble techniques, supporting preprocessing, simulation modelling, and system-level analytics.",
    tags: ["Random Forest", "XGBoost", "Ensembles", "Simulation"],
  },
];

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
