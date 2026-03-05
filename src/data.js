import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;


export const listTools = [
  { id: 1,  gambar: "/portofolio/assets/tools/python.png",   nama: "Python",             ket: "pandas, NumPy, scikit-learn",        dad: "100"  },
  { id: 2,  gambar: "/portofolio/assets/tools/ML.png",        nama: "Machine Learning",   ket: "Supervised & Unsupervised",          dad: "200"  },
  { id: 3,  gambar: "/portofolio/assets/tools/ai.jpg",        nama: "LLMs & NLP",         ket: "GPT-4, Gemini, Claude, HuggingFace", dad: "300"  },
  { id: 4,  gambar: "/portofolio/assets/tools/aws.png",       nama: "AWS SageMaker",      ket: "Cloud ML Deployment",                dad: "400"  },
  { id: 5,  gambar: "/portofolio/assets/tools/java.png",      nama: "Java & Spring Boot", ket: "Microservices, REST APIs",           dad: "500"  },
  { id: 6,  gambar: "/portofolio/assets/tools/SQL.jpg",       nama: "SQL & NoSQL",        ket: "Databases, ETL, Text-to-SQL",        dad: "600"  },
  { id: 7,  gambar: "/portofolio/assets/tools/firebase.png",  nama: "Firebase",           ket: "Firestore, Auth",                    dad: "700"  },
  { id: 8,  gambar: "/portofolio/assets/tools/github.png",    nama: "GitHub",             ket: "Version Control",                    dad: "800"  },
  { id: 9,  gambar: "/portofolio/assets/tools/docker.png",    nama: "Docker & CI/CD",     ket: "DevOps & Deployment",                dad: "900"  },
  { id: 10, gambar: "/portofolio/assets/tools/data.png",      nama: "Data Visualisation", ket: "Matplotlib, Seaborn, Dashboards",    dad: "1000" },
  { id: 11, gambar: "/portofolio/assets/tools/tailwind.png",  nama: "Tailwind CSS",       ket: "UI Framework",                       dad: "1100" },
  { id: 12, gambar: "/portofolio/assets/tools/reactjs.png",   nama: "React & Vite",       ket: "Frontend Framework",                 dad: "1200" },
];

export const listProyek = [
  {
    id: 1,
    title: "AI-Powered Audit Validation Engine | Titan",
    subtitle: "LLM-driven transaction validation for retail clients.",
    fullDescription:
      "Developed a Large Language Model-based transaction validation engine for a retail client, improving audit accuracy from 60% to 90% and preventing over £500K in annual revenue leakage.",
    gradient: "linear-gradient(90deg, #3B82F6, #6366F1)",
    url: "https://github.com/jayeetrab",
    dad: "100",
  },
  {
    id: 2,
    title: "AI Compliance Reporting Engine | Marks and Spencer",
    subtitle: "Automated classification and anomaly checks.",
    fullDescription:
      "Built an AI + rule-based system that increased compliance reporting accuracy from 40% to 80% across 5,000+ monthly transactions by automating data checks and anomaly detection.",
    gradient: "linear-gradient(90deg, #10B981, #059669)",
    url: "https://github.com/jayeetrab",
    dad: "200",
  },
  {
    id: 3,
    title: "LLM Insight-Mining Engine | H&M",
    subtitle: "Automated business hypothesis testing.",
    fullDescription:
      "Created an LLM-driven system using GPT-4, Gemini, Claude, and Hugging Face models that automated hypothesis testing and reduced analysis time from 3 days to 6 hours.",
    gradient: "linear-gradient(90deg, #8B5CF6, #6366F1)",
    url: "https://github.com/jayeetrab",
    dad: "300",
  },
  {
    id: 4,
    title: "LLM Ensemble on AWS SageMaker | Primark",
    subtitle: "Production-ready multi-model LLM pipeline.",
    fullDescription:
      "Designed a multi-model LLM ensemble with ranking and evaluation, achieving 90–95% accuracy and deploying it end-to-end on AWS SageMaker for scalable client use.",
    gradient: "linear-gradient(90deg, #F59E0B, #EF4444)",
    url: "https://github.com/jayeetrab",
    dad: "400",
  },
  {
    id: 5,
    title: 'Text-to-SQL "Talk-to-Data" System | TFG',
    subtitle: "Natural language interface for SQL databases.",
    fullDescription:
      "Built a FastAPI + LLM backend that lets non-technical users query SQL databases using natural language, returning validated SQL and insights.",
    gradient: "linear-gradient(90deg, #06B6D4, #3B82F6)",
    url: "https://github.com/jayeetrab",
    dad: "500",
  },
  {
    id: 6,
    title: "POS Automation & Revenue Protection | Tata Tanishq",
    subtitle: "Automated POS validation to protect revenue.",
    fullDescription:
      "Automated POS transaction validation for a jewellery brand, increasing accuracy from 60% to 90% and preventing over £500K in annual revenue leakage.",
    gradient: "linear-gradient(90deg, #10B981, #06B6D4)",
    url: "https://github.com/jayeetrab",
    dad: "600",
  },
];
