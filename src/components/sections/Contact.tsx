"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("rakshitpathak115@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoUrl = `mailto:rakshitpathak115@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoUrl
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">
            <span>// 05 · DIRECT INQUIRIES & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Whether you're exploring full-time recruitment, technical collaborations, or have a question about my research, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels & Quick Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Availability Box */}
              <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/40 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  CURRENT STATUS: OPEN TO ROLES
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Graduating in 2027 with B.Tech CSE. Actively seeking AI/ML engineering, computer vision research, or full-stack software development positions.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-4 mb-8">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200/80 dark:border-slate-700/60">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                      <a
                        href="mailto:rakshitpathak115@gmail.com"
                        className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        rakshitpathak115@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200/80 dark:border-slate-700/60">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Telephone</div>
                    <a
                      href="tel:+918320138884"
                      className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      +91 8320138884
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
                Professional Networks
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/SoftApplee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/rakshit-pathak-08288b2a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <FiLinkedin className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Software Engineering Inquiry / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly describe your project, role opportunity, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message via Email Client
                </button>

                {formSubmitted && (
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Mail client opened!
                  </span>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
