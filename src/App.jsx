import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import { listTools, listProyek } from "./data";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";



function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Aurora — fixed, full screen, always behind everything */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HERO ── */}
        <div className="hero grid md:grid-cols-2 items-center pt-1 l:gap-0 gap-4 grid-cols-1 min-h-screen">

          {/* Left */}
          <div className="animate__animated animate__fadeInUp flex flex-col gap-6">

            {/* Badge */}
            <div className="flex items-center gap-3 bg-white/[0.05] w-fit px-4 py-3 rounded-2xl border border-white/[0.08] backdrop-blur-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-sm text-zinc-300 italic">"Turning data into decisions, models into impact"</span>
            </div>

            {/* Heading */}
            <div>
              <p className="text-zinc-400 text-xs font-mono mb-3 tracking-[0.25em] uppercase">AI / ML Engineer</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Hi, I'm<br />
                <ShinyText text="Jayeetra" disabled={false} speed={3} className="custom-class" />
              </h1>
            </div>

            {/* Description */}
            <BlurText
              text="Consulting-minded AI/ML Engineer with 3+ years' experience delivering AI, LLM, NLP, and automation solutions for global clients. I build scalable, production-ready systems that improve decision-making, compliance accuracy, and operational efficiency."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-zinc-400 text-base leading-relaxed max-w-lg"
            />

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="./assets/JayeetraCV1.1.pdf"
                download="JayeetraBhattacharjeeCV.pdf"
                className="font-semibold bg-white text-black px-6 py-3 rounded-full
                  hover:bg-zinc-200 hover:-translate-y-0.5
                  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                  hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
              >
                Download CV
              </a>
              <a
                href="#project"
                className="font-semibold border border-white/20 text-white px-6 py-3 rounded-full
                  hover:border-white/50 hover:bg-white/[0.06] hover:-translate-y-0.5
                  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                Explore Projects →
              </a>
            </div>
          </div>

          {/* Right — Profile Card */}
          <div className="md:ml-auto animate__animated animate__fadeInUp">
            <ProfileCard
              name="Jayeetra Bhattacharjee"
              title="AI / ML Engineer"
              handle="jayeetra"
              status="Open to work"
              contactText="Contact Me"
              avatarUrl="./assets/jay1.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              showBehindGradient={false}
              innerGradient="linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 100%)"
              onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div className="mt-20 mx-auto w-full" id="about" ref={aboutRef}>

          {/* Header */}
          <div className="mb-16" data-aos="fade-up">
            <p className="text-zinc-500 text-xs font-mono tracking-[0.25em] uppercase mb-3">Who I am</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-none">About Me</h2>
          </div>

          {/* ROW 1: Bio + Stats */}
          <div
            className="grid md:grid-cols-2 gap-px bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06] mb-3"
            data-aos="fade-up" data-aos-delay="80"
          >
            {/* Bio */}
            <div className="bg-black/30 backdrop-blur-md p-8 md:p-10">
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed tracking-tight">
                I build <span className="text-white font-semibold">AI systems</span> that solve{" "}
                <span className="text-white font-semibold">real business problems</span> -
                not prototypes, but production-ready engines that generate measurable impact.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-zinc-400">Available for AI/ML roles · Bristol, UK</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
              {[
                { value: "3+",      label: "Years in production AI", sub: "Not just research" },
                { value: "51+",     label: "Projects shipped",        sub: "End to end" },
                { value: "£500K+",  label: "Revenue protected",       sub: "Via ML systems" },
                { value: "90–95%",  label: "Model accuracy",          sub: "Across deployments" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-black/30 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between
                    hover:bg-white/[0.06] transition-all duration-500 ease-out group"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </span>
                  <div>
                    <p className="text-xs text-zinc-300 font-medium mt-3">{stat.label}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Experience */}
          <div
            className="bg-black/30 backdrop-blur-md border border-white/[0.06] rounded-3xl overflow-hidden mb-3"
            data-aos="fade-up" data-aos-delay="100"
          >
            <div className="border-b border-white/[0.06] px-8 md:px-10 py-5 flex items-center justify-between">
              <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Experience</p>
              <span className="text-xs text-zinc-600">3 roles · 3+ years</span>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {[
                {
                  role: "AI/ML Engineer",
                  company: "Tata Consultancy Services",
                  period: "Jan 2024 – Sep 2025",
                  location: "Kolkata, India",
                  desc: "Delivered AI-driven analytics improving decision-making speed by 25% and cutting manual effort by 30%. Built LLM pipelines, audit engines, and compliance systems.",
                  logo: "./assets/tcs.png",
                  tags: ["LLM", "Python", "NLP", "Compliance AI"],
                  current: false,
                },
                {
                  role: "Java Developer",
                  company: "Tata Consultancy Services",
                  period: "Jul 2022 – Dec 2023",
                  location: "Kolkata, India",
                  desc: "Engineered microservice platforms handling 100K+ daily transactions. Integrated Hybris, Juspay & OMS for 1M+ annual orders worth £2M+ annually.",
                  logo: "./assets/tcs.png",
                  tags: ["Java", "Microservices", "Hybris", "OMS"],
                  current: false,
                },
                {
  role: "Research Assistant (Level 1)",
  company: "University of Bristol",
  period: "Oct 2025 – Present",
  location: "Bristol, UK · Part Time",
  desc: "Supported an urban planning research project under Dr. Cheng by gathering and organising large geospatial (GIS) datasets. Contributed to data cleaning, preprocessing, and spatial layer preparation. Assisted in evaluating LLM-generated planning insights by refining prompts and validating outputs against ground data.",
  logo: "./assets/uob.jpg",
  tags: ["GIS", "LLM", "Urban Planning", "Data Cleaning"],
  current: true,
  supervisor: "Dr. Qixiu Cheng",
},
{
  role: "Research Support Assistant (Level 1)",
  company: "University of Bristol",
  period: "Oct 2025 – Nov 2025",
  location: "Bristol, UK · Part Time",
  desc: "Supported ML model development (Random Forest, XGBoost) for behavioural prediction and performance analytics. Delivered dashboards and data-driven reports for decision support in maritime research.",
  logo: "./assets/uob.jpg",
  tags: ["XGBoost", "Random Forest", "Dashboards", "Maritime"],
  current: false,
  supervisor: "Dr. Jie Zhang",
},

              ].map((job, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row md:items-start gap-6 px-8 md:px-10 py-7
                    hover:bg-white/[0.03] transition-all duration-500 ease-out"
                >
                  {/* Period */}
                  <div className="md:w-44 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-1">
                      {job.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                      <span className="text-xs font-mono text-zinc-500">{job.period}</span>
                    </div>
                    <p className="text-xs text-zinc-600">{job.location}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] overflow-hidden flex items-center justify-center flex-shrink-0">
                        <img src={job.logo} alt={job.company} className="w-6 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm leading-none mb-0.5">{job.role}</h4>
                        <p className="text-zinc-500 text-xs">{job.company}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-zinc-500 border border-white/[0.07] px-2.5 py-1 rounded-full
                            group-hover:border-white/20 group-hover:text-zinc-300
                            transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-zinc-500 text-sm">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3: Education + Expertise */}
          <div className="grid md:grid-cols-2 gap-3" data-aos="fade-up" data-aos-delay="120">

            {/* Education */}
            <div className="bg-black/30 backdrop-blur-md border border-white/[0.06] rounded-3xl overflow-hidden">
              <div className="border-b border-white/[0.06] px-8 py-5">
                <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Education</p>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {[
                  { school: "University of Bristol", degree: "MSc Business Analytics",             period: "2025–2026", logo: "./assets/uob.jpg" },
                  { school: "VIT Bhopal",             degree: "BTech Electrical & Electronics Eng.", period: "2018–2022", logo: "./assets/vit.png" },
                ].map((edu, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-8 py-6
                      hover:bg-white/[0.03] transition-all duration-500 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img src={edu.logo} alt={edu.school} className="w-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-medium leading-snug">{edu.degree}</h4>
                      <p className="text-zinc-500 text-xs mt-0.5">{edu.school}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-600">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Expertise */}
            <div className="bg-black/30 backdrop-blur-md border border-white/[0.06] rounded-3xl overflow-hidden">
              <div className="border-b border-white/[0.06] px-8 py-5">
                <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Core Expertise</p>
              </div>
              <div className="p-8 flex flex-wrap gap-2">
                {[
                  "Machine Learning","LLM Engineering","NLP",
                  "Python","MLOps","Data Analytics",
                  "Business Intelligence","Cloud Deployment",
                  "XGBoost","Random Forest","Automation",
                  "Compliance AI","Consulting",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-zinc-400 border border-white/[0.07] px-3 py-1.5 rounded-full
                      hover:border-white/30 hover:text-white hover:bg-white/[0.05]
                      transition-all duration-400 ease-out cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TOOLS ── */}
        <div className="mt-32">
          <p className="text-zinc-500 text-xs font-mono tracking-[0.25em] uppercase mb-3" data-aos="fade-up">Stack</p>
          <h1 className="text-4xl font-bold mb-2 text-white" data-aos="fade-up">Tools & Technologies</h1>
          <p className="text-base text-zinc-400 mb-14 max-w-sm" data-aos="fade-up" data-aos-delay="80">My professional skills and daily tools.</p>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up" data-aos-delay={tool.dad}
                className="flex items-center gap-4 p-4 border border-white/[0.07] rounded-2xl bg-black/25 backdrop-blur-md
                  hover:border-white/20 hover:bg-white/[0.06]
                  hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0
                  border border-white/[0.07] group-hover:border-white/20
                  transition-all duration-500 overflow-hidden">
                  <img
                    src={tool.gambar} alt={tool.nama}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <ShinyText text={tool.nama} disabled={false} speed={3} className="text-base font-semibold block truncate" />
                  <p className="text-xs text-zinc-500 truncate mt-0.5">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROJECTS ── */}
        <div className="mt-32 pb-10" id="project">
          <p className="text-zinc-500 text-xs font-mono tracking-[0.25em] uppercase mb-3" data-aos="fade-up">Work</p>
          <h1 className="text-4xl font-bold mb-2 text-white" data-aos="fade-up">Projects</h1>
          <p className="text-base text-zinc-400 mb-14 max-w-lg" data-aos="fade-up" data-aos-delay="80">
            Real-world AI/ML systems delivering measurable business impact.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {listProyek.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                data-aos="fade-up" data-aos-delay={project.dad}
                className="group relative flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-black/25 backdrop-blur-md
                  hover:border-white/20 hover:bg-white/[0.06]
                  hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]
                  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: project.gradient }}
                />

                <span className="text-xs font-mono text-zinc-600 mb-4 block group-hover:text-zinc-400 transition-colors duration-500">
                  {String(project.id).padStart(2, '0')}
                </span>

                <h3 className="text-base font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors duration-500 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-6">
                  {project.subtitle}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500">
                  <span className="text-xs text-zinc-400 font-medium group-hover:text-white transition-colors duration-300">
                    View Details →
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTACT ── */}
        <div className="mt-32 pb-24" id="contact">
          <p className="text-zinc-500 text-xs font-mono tracking-[0.25em] uppercase mb-3" data-aos="fade-up">Get in touch</p>
          <h1 className="text-4xl font-bold mb-2 text-white" data-aos="fade-up">Let's Connect</h1>
          <p className="text-base text-zinc-400 mb-12 max-w-md" data-aos="fade-up" data-aos-delay="80">
            Open to AI/ML roles, collaborations, and interesting conversations.
          </p>

          <div className="flex flex-col md:flex-row gap-6">

            {/* Left info */}
            <div className="flex flex-col gap-4 md:w-1/3">
              {[
                { icon: "ri-mail-line",        label: "Email",    value: "jayeetra.uk@gmail.com",  href: "mailto:jayeetra.uk@gmail.com" },
                { icon: "ri-linkedin-box-line", label: "LinkedIn", value: "Connect with me",        href: "https://www.linkedin.com/in/jayeetrabhattacharjee/" },
                { icon: "ri-map-pin-line",      label: "Location", value: "Bristol, United Kingdom", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up" data-aos-delay={i * 70}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-black/25 backdrop-blur-md
                    hover:border-white/20 hover:bg-white/[0.06]
                    hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0
                    group-hover:bg-white/[0.1] group-hover:border-white/20 transition-all duration-500">
                    <i className={`${item.icon} text-zinc-300 text-lg`} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Right form */}
            <form
              action="https://formsubmit.co/jayeetra.uk@gmail.com"
              method="POST"
              autoComplete="off"
              data-aos="fade-up" data-aos-delay="120"
              className="flex-1 bg-black/25 backdrop-blur-md p-8 rounded-2xl border border-white/[0.07]
                hover:border-white/[0.14] transition-all duration-500 ease-out"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-300">Full Name</label>
                  <input
                    type="text" name="Name" placeholder="Your name" required
                    className="bg-white/[0.04] border border-white/[0.08] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10
                      p-3 rounded-xl text-sm text-white placeholder-zinc-600 transition-all duration-300 ease-out"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-300">Email</label>
                  <input
                    type="email" name="Email" placeholder="your@email.com" required
                    className="bg-white/[0.04] border border-white/[0.08] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10
                      p-3 rounded-xl text-sm text-white placeholder-zinc-600 transition-all duration-300 ease-out"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-300">Message</label>
                  <textarea
                    name="message" rows={6} placeholder="What would you like to discuss?" required
                    className="bg-white/[0.04] border border-white/[0.08] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10
                      p-3 rounded-xl text-sm text-white placeholder-zinc-600 transition-all duration-300 ease-out resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 rounded-xl font-semibold text-black bg-white
                    hover:bg-zinc-100 hover:-translate-y-0.5
                    hover:shadow-[0_0_32px_rgba(255,255,255,0.15)]
                    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </div>

      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
