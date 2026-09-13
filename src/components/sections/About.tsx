"use client"

import { motion } from "framer-motion"
import { GraduationCap, Brain, Compass, Music, Palette, Activity } from "lucide-react"

export default function About() {
  const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning",
    "Design & Analysis of Algorithms",
    "Computer Organization & Architecture",
  ]

  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Computer Vision",
    "Backend Development",
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">
            <span>// 01 · BACKGROUND & FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive snapshot of my academic foundation, engineering philosophy, and technical direction.
          </p>
        </div>

        {/* Perfectly Aligned Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Narrative Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 text-blue-600 dark:text-blue-400">
                <Brain className="w-6 h-6" />
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Engineering Philosophy
                </h3>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a final-year Computer Science Engineering student with hands-on experience spanning machine learning, computer vision, and modern full-stack web engineering.
                </p>
                <p>
                  My driving motivation is closing the loop between machine learning research and real-world utility. Instead of treating algorithms as isolated notebooks, I focus on building complete pipelines: from raw data cleaning and image preprocessing to model training, evaluation, and deploying them behind clean REST APIs and interactive frontends.
                </p>
                <p>
                  Whether isolating calculi in noisy kidney ultrasound scans, filtering fraudulent job postings with BERT transformers, or enhancing degraded marine imagery, I prioritize performance, accuracy, and intuitive end-user experiences.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                End-to-end delivery focus
              </span>
              <span>Based in India · Open to remote & onsite</span>
            </div>
          </motion.div>

          {/* Card 2: Education & Academic Performance (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-6 h-6" />
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Academic Background
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    B. Tech in Computer Science & Engineering
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
                    CGPA: 8.0
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  2023 — 2027 · Final Year Undergraduate
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Core Areas of Interest (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
              <Compass className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Specialized Interests
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
              Fields where I concentrate my independent research, model experimentation, and engineering bandwidth.
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Creative Hobbies (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 text-indigo-600 dark:text-indigo-400">
                <Palette className="w-5 h-5" />
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Creative Pursuits & Balance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                Creative disciplines outside of terminal sessions that nurture patience, spatial intuition, and lateral problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <Music className="w-5 h-5 text-indigo-500 mx-auto mb-1.5" />
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Guitar</div>
                <div className="text-[10px] text-slate-400 font-mono">Acoustic & Electric</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <Activity className="w-5 h-5 text-rose-500 mx-auto mb-1.5" />
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Dancing</div>
                <div className="text-[10px] text-slate-400 font-mono">Rhythm & Energy</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <Palette className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Sketching</div>
                <div className="text-[10px] text-slate-400 font-mono">Visual & Spatial</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
