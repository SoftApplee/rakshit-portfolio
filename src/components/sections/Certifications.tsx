"use client"

import { motion } from "framer-motion"
import { Award, Calendar, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react"

const certifications = [
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "October 2025",
    status: "Verified Credential",
    badge: "Infrastructure & Routing",
    description:
      "Hands-on configuration of Cisco network devices, subnetting, switching, and routing protocol fundamentals.",
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MathWorks",
    date: "April 2025",
    status: "100% Completed",
    badge: "Applied ML Pipeline",
    description:
      "Complete workflow from importing tabular and sensory data to preprocessing, model training, and performance validation.",
  },
  {
    title: "Introduction to Database Systems",
    issuer: "NPTEL",
    date: "Academic Year",
    status: "Elite Certified",
    badge: "Relational Theory & SQL",
    description:
      "Advanced relational data modeling, query optimization, normalization theory, indexing, and transaction management.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">
            <span>// 04 · VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Certifications & Training
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Official accreditations validating core knowledge across computer networks, machine learning, and relational database systems.
          </p>
        </div>

        {/* 3-Column Credential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-blue-600 dark:text-blue-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40 text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {cert.status}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                  {cert.issuer}
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mt-auto">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300">
                  {cert.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
