"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, Cpu, Database, Eye, Globe2, ShieldAlert, Sparkles } from "lucide-react"
import { FiGithub } from "react-icons/fi"

const projects = [
  {
    id: "fake-job",
    title: "Fake Job Posting Detection",
    type: "Team Engineering Project · Production Web App",
    category: "Natural Language Processing (NLP)",
    icon: <ShieldAlert className="w-5 h-5 text-blue-500" />,
    hook: "A Flask web app built around a fine-tuned Hugging Face BERT classifier, detecting fraudulent job postings with 96%+ accuracy.",
    accuracyBadge: "96%+ Model Accuracy",
    tech: ["Python", "Hugging Face Transformers (BERT)", "Flask", "PyTorch", "Tailwind CSS"],
    bullets: [
      "Collaborated on a Flask web app built around a fine-tuned Hugging Face BERT classifier, detecting fraudulent job postings with 96%+ accuracy.",
      "Contributed to the text preprocessing pipeline and the prediction interface, including confidence scores and a recent-prediction history dashboard.",
    ],
    github: "https://github.com/SoftApplee/FAKE-JOB-POSTING-DETECTION-",
    featured: true,
  },
  {
    id: "kidney-stone",
    title: "Kidney Stone Detection using AI/ML",
    type: "Medical Diagnostics Pipeline",
    category: "Computer Vision & Medical ML",
    icon: <Eye className="w-5 h-5 text-emerald-500" />,
    hook: "End-to-end ML pipeline to detect kidney stones from medical scans, optimizing classifier accuracy through noise filtration.",
    tech: ["Python", "scikit-learn", "Image Processing", "NumPy", "OpenCV"],
    bullets: [
      "Built a machine learning pipeline to detect kidney stones from medical images, covering preprocessing, feature extraction, and classification.",
      "Applied image preprocessing techniques to improve classifier accuracy on noisy medical scans.",
    ],
    github: null,
    featured: false,
  },
  {
    id: "aqua-lens",
    title: "Aqua Lens – Marine Image Enhancer",
    type: "Desktop GUI Application",
    category: "Digital Image Processing & GUI",
    icon: <Cpu className="w-5 h-5 text-cyan-500" />,
    hook: "Comprehensive desktop software specialized in restoring underwater imagery and applying multi-stage visual filters.",
    tech: ["Python", "Tkinter", "OpenCV", "NumPy"],
    bullets: [
      "Developed a desktop GUI application for marine image enhancement, implementing grayscale conversion, blurring, edge detection, and histogram comparison.",
      "Integrated face detection into the image-processing pipeline using OpenCV.",
    ],
    github: null,
    featured: false,
  },
  {
    id: "huntington",
    title: "Huntington's Disease Detection Web App",
    type: "Clinical Prediction Platform",
    category: "Supervised ML & Web App",
    icon: <Database className="w-5 h-5 text-indigo-500" />,
    hook: "Interactive medical web interface serving an image-based Random Forest classifier for early neurological detection.",
    tech: ["Flask", "Random Forest", "Python", "scikit-learn"],
    bullets: [
      "Built a Flask web application that serves an image-based Random Forest classifier for Huntington's disease prediction.",
      "Designed the end-to-end flow from image upload to model inference and result display.",
    ],
    github: null,
    featured: false,
  },
  {
    id: "satellite",
    title: "Satellite-Based Natural Disaster Detection",
    type: "Geospatial AI & Remote Sensing",
    category: "Satellite Imagery Analysis",
    icon: <Globe2 className="w-5 h-5 text-amber-500" />,
    hook: "Pattern extraction pipeline processing multi-spectral satellite imagery to monitor and detect active volcanic anomalies.",
    tech: ["Python", "Machine Learning", "Satellite Imagery", "NumPy"],
    bullets: [
      "Designed an ML-based system to detect volcanic activity from satellite imagery.",
      "Processed and analyzed satellite image data to identify disaster-relevant patterns.",
    ],
    github: null,
    featured: false,
  },
]

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const gridProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">
            <span>// 03 · FEATURED ENGINEERING SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Projects & Research
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real implementations demonstrating end-to-end capability from model architecture and training to functional user applications.
          </p>
        </div>

        {/* 1. Featured Spotlight Card (Fake Job Posting Detection) */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Details */}
              <div className="lg:col-span-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
                      Featured Project
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {featuredProject.accuracyBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                    {featuredProject.hook}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-3 mb-8">
                    {featuredProject.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech chips & links */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold shadow-sm transition-all"
                    >
                      <FiGithub className="w-4 h-4" />
                      View on GitHub
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Architectural Preview Widget */}
              <div className="lg:col-span-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Pipeline Architecture
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-[10px]">
                    BERT Fine-Tuned
                  </span>
                </div>

                <div className="space-y-3 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">01. Preprocessing</div>
                    <div className="text-slate-700 dark:text-slate-300">Clean text · Stopword filter · Tokenization</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">02. Sequence Classifier</div>
                    <div className="text-slate-700 dark:text-slate-300">Hugging Face BERT transformer weights</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40">
                    <div className="text-blue-600 dark:text-blue-400 text-[10px] uppercase font-bold mb-1">03. Inference Output</div>
                    <div className="flex justify-between items-center text-slate-900 dark:text-white font-bold">
                      <span>Fraud Probability</span>
                      <span className="text-emerald-600 dark:text-emerald-400">96.4% Conf.</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">04. Prediction Dashboard</div>
                    <div className="text-slate-700 dark:text-slate-300">Recent history log · Confidence radar</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* 2. Grid for the other 4 projects (2x2 perfectly aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group"
            >
              <div>
                {/* Category & Type */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {project.hook}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
