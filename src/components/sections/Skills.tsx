"use client"

import { motion } from "framer-motion"
import { Code2, BrainCircuit, Globe, Wrench, Network, Cpu, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "AI / ML & Computer Vision",
    icon: <BrainCircuit className="w-5 h-5 text-blue-500" />,
    description: "Model architecture, predictive training, and visual pipelines",
    skills: [
      "Supervised Learning",
      "Random Forest",
      "NLP (BERT basics)",
      "Image Processing",
      "scikit-learn",
      "MATLAB",
    ],
  },
  {
    title: "Web Development",
    icon: <Globe className="w-5 h-5 text-indigo-500" />,
    description: "Full-stack web applications, microservices, and modern UI",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    description: "Core programming and database query languages",
    skills: ["Python", "C", "C++", "SQL", "JavaScript"],
  },
  {
    title: "Libraries & Tools",
    icon: <Wrench className="w-5 h-5 text-amber-500" />,
    description: "Scientific computing, computer vision, and app frameworks",
    skills: ["NumPy", "Pandas", "OpenCV", "Tkinter", "Flask"],
  },
  {
    title: "Core Computer Science",
    icon: <Cpu className="w-5 h-5 text-rose-500" />,
    description: "Foundational computer science theory and system architecture",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Networking",
    icon: <Network className="w-5 h-5 text-cyan-500" />,
    description: "Cisco verified networking infrastructure and protocols",
    skills: [
      "Networking Devices & Initial Configuration (Cisco)",
      "Routing & Switching Fundamentals",
    ],
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-5 h-5 text-violet-500" />,
    description: "Collaborative Git workflows, CI/CD, and repository management",
    skills: ["Git", "GitHub"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">
            <span>// 02 · TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A structured breakdown of my competencies across languages, machine learning, systems, and full-stack engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {category.skills.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
