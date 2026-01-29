export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    slug: "urban-planning-llm-support",
    title: "Urban Planning Analytics & LLM Support",
    category: "Research · Urban Planning & LLMs",
    description:
      "GIS data preparation and LLM-supported insight generation for urban planning.",
    longDescription:
      "Supported an urban planning research initiative by gathering and organising GIS datasets (zoning, land-use, transport layers). Assisted with spatial data cleaning and preprocessing, and contributed to LLM experimentation via prompt refinement and evaluation of model-generated planning insights against ground data.",
    tags: ["GIS", "LLMs", "Data Cleaning", "Urban Planning"],
    impact: [
      "Enabled structured experimentation with LLM-generated planning insights.",
      "Improved quality and reliability of spatial data used in decision-making.",
    ],
  },
  {
    slug: "ai-audit-validation-engine",
    title: "AI-Powered Audit Validation Engine",
    category: "AI for Audit & Compliance",
    description:
      "LLM-based transaction validation engine for retail audit accuracy and revenue protection.",
    longDescription:
      "Developed a Python + LLM transaction validation engine for a retail client, improving audit accuracy from 60% → 90% and preventing over £500K in annual revenue leakage.",
    tags: ["Python", "LLMs", "Compliance", "Revenue Protection"],
    impact: [
      "Raised audit accuracy from 60% → 90%.",
      "Protected £500K+ annual revenue through early anomaly detection.",
    ],
  },
  {
    slug: "ai-compliance-reporting-engine",
    title: "AI-Powered Compliance Reporting Engine",
    category: "Compliance Automation",
    description:
      "AI + rules system automating compliance reporting for high-volume transactions.",
    longDescription:
      "Built an AI + rule-based system that increased compliance reporting accuracy from 40% → 80% across 5,000+ monthly transactions by automating data checks, classification, and anomaly detection.",
    tags: ["Automation", "NLP", "Rules Engine", "Compliance"],
    impact: [
      "Doubled compliance reporting accuracy from 40% → 80%.",
      "Reduced manual review workload on compliance teams.",
    ],
  },
  {
    slug: "llm-insight-mining-engine",
    title: "LLM Insight-Mining Engine",
    category: "Decision Intelligence",
    description:
      "LLM-driven hypothesis testing engine for faster analytics cycles.",
    longDescription:
      "Created an LLM-driven system (GPT-4, Gemini, Claude, Hugging Face models) that automated business hypothesis testing, reducing analysis time from 3 days → 6 hours.",
    tags: ["LLMs", "Hypothesis Testing", "Analytics", "Python"],
    impact: [
      "Reduced insight turnaround time from 3 days → 6 hours.",
      "Enabled data teams to focus on high-value investigations.",
    ],
  },
  {
    slug: "llm-ensemble-sagemaker",
    title: "LLM Ensemble Pipeline (AWS SageMaker)",
    category: "LLM Systems Engineering",
    description:
      "Production-grade LLM ensemble with ranking and evaluation on SageMaker.",
    longDescription:
      "Designed a multi-model LLM ensemble with ranking and evaluation, achieving 90–95% accuracy, and deployed it end-to-end on AWS SageMaker for scalable production use.",
    tags: ["AWS SageMaker", "LLM Ensemble", "MLOps"],
    impact: [
      "Achieved 90–95% answer quality across key use-cases.",
      "Delivered scalable, monitored LLM stack suitable for enterprise workloads.",
    ],
  },
  {
    slug: "text-to-sql-talk-to-data",
    title: "Text-to-SQL “Talk-to-Data” System",
    category: "Self-Service Analytics",
    description:
      "Natural language interface for SQL databases using LLMs and FastAPI.",
    longDescription:
      "Built a FastAPI + LLM backend enabling natural-language querying of SQL databases, helping non-technical teams extract insights without writing queries.",
    tags: ["FastAPI", "LLMs", "Text-to-SQL", "APIs"],
    impact: [
      "Unlocked self-service analytics for non-technical stakeholders.",
      "Reduced dependency on data teams for routine queries.",
    ],
  },
  {
    slug: "product-listing-automation",
    title: "Product Listing Automation Pipeline",
    category: "E-commerce Intelligence",
    description:
      "Automated catalogue enrichment using NLP and clustering for better listings.",
    longDescription:
      "Automated catalogue enrichment workflows using NLP, clustering, and metadata optimisation to enhance product listing quality, visibility, and conversion.",
    tags: ["NLP", "Clustering", "E-commerce"],
    impact: [
      "Boosted listing visibility by 35%.",
      "Increased conversions by 20% through better metadata.",
    ],
  },
  {
    slug: "pos-transaction-automation",
    title: "POS Transaction Automation & Revenue Protection",
    category: "Retail AI & Automation",
    description:
      "Automated POS validation to improve accuracy and prevent leakage.",
    longDescription:
      "Automated POS transaction validation for a jewellery brand, raising accuracy from 60% → 90% and preventing £500K+ in annual revenue leakage.",
    tags: ["Automation", "Retail", "Revenue Protection"],
    impact: [
      "Improved POS accuracy from 60% → 90%.",
      "Prevented £500K+ annual revenue leakage.",
    ],
  },
  {
    slug: "hypact-maritime-analytics",
    title: "HyPACT 2.0 Maritime Analytics",
    category: "Maritime Behavioural Modelling",
    description:
      "Behaviour modelling using ensemble ML for maritime research.",
    longDescription:
      "Contributed to maritime behavioural modelling using Random Forest, XGBoost, and ensemble techniques, supporting preprocessing, simulation modelling, and system-level analytics.",
    tags: ["Random Forest", "XGBoost", "Ensembles", "Simulation"],
    impact: [
      "Improved understanding of maritime behavioural patterns.",
      "Enabled more robust system-level maritime analytics.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
