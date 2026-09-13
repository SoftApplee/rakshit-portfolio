"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Copy, Terminal, ExternalLink, Sparkles, Download, Layers, ShieldCheck } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import Link from "next/link"

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"bert" | "cv" | "metrics">("bert")

  const copyEmail = () => {
    navigator.clipboard.writeText("rakshitpathak115@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Precision ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 text-xs font-mono text-blue-700 dark:text-blue-300 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>B.Tech CSE (2023–2027) · Focus in AI/ML & Full-Stack</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Engineering intelligent models into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                production systems.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              I'm <span className="font-semibold text-slate-900 dark:text-white">Rakshit Pathak</span>, comfortable taking machine learning and computer vision architectures from raw data preprocessing to robust, user-facing web applications.
            </p>

            {/* Quick Metrics Bar */}
            <div className="w-full grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 mb-8 backdrop-blur-sm shadow-sm">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  96%+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  BERT Accuracy
                </div>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-3">
                <div className="text-xl sm:text-2xl font-bold font-display text-blue-600 dark:text-blue-400">
                  5+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  ML / CV Architectures
                </div>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-3">
                <div className="text-xl sm:text-2xl font-bold font-display text-emerald-600 dark:text-emerald-400">
                  8.0
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  CGPA · B.Tech CSE
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 group"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <button
                onClick={copyEmail}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium text-sm transition-all flex items-center gap-2"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href="https://github.com/SoftApplee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rakshit-pathak-08288b2a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive ML Pipeline Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
                    pipeline-inspector.sh
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  STATUS: LIVE
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-900/50 text-[11px]">
                <button
                  onClick={() => setActiveTab("bert")}
                  className={`px-3.5 py-2 border-r border-slate-800 transition-colors flex items-center gap-1.5 ${
                    activeTab === "bert"
                      ? "bg-slate-950 text-blue-400 border-b border-b-blue-500"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  bert_inference.py
                </button>
                <button
                  onClick={() => setActiveTab("cv")}
                  className={`px-3.5 py-2 border-r border-slate-800 transition-colors flex items-center gap-1.5 ${
                    activeTab === "cv"
                      ? "bg-slate-950 text-blue-400 border-b border-b-blue-500"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  kidney_cv.py
                </button>
                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`px-3.5 py-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === "metrics"
                      ? "bg-slate-950 text-blue-400 border-b border-b-blue-500"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <ShieldCheck className="w-3 h-3" />
                  pipeline_stats.json
                </button>
              </div>

              {/* Console Body */}
              <div className="p-4 space-y-3 min-h-[260px] bg-slate-950/95 overflow-x-auto leading-relaxed">
                {activeTab === "bert" && (
                  <>
                    <p className="text-slate-500"># Hugging Face Transformer inference pipeline</p>
                    <p>
                      <span className="text-purple-400">from</span> transformers <span className="text-purple-400">import</span> AutoTokenizer, AutoModelForSequenceClassification
                    </p>
                    <p>
                      <span className="text-blue-400">tokenizer</span> = AutoTokenizer.from_pretrained(<span className="text-emerald-300">"bert-base-uncased"</span>)
                    </p>
                    <p>
                      <span className="text-blue-400">inputs</span> = tokenizer(text, return_tensors=<span className="text-emerald-300">"pt"</span>, truncation=<span className="text-amber-400">True</span>)
                    </p>
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800/80 my-2 space-y-1 font-mono text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Classification Result:</span>
                        <span className="text-emerald-400 font-bold">FRAUD_DETECTION</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Model Confidence:</span>
                        <span className="text-blue-400 font-bold">96.4%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-blue-500 h-full w-[96.4%]" />
                      </div>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      <span className="text-emerald-400">✓</span> Serving real-time inference via Flask REST API
                    </p>
                  </>
                )}

                {activeTab === "cv" && (
                  <>
                    <p className="text-slate-500"># Medical Image Preprocessing & Feature Extraction</p>
                    <p>
                      <span className="text-purple-400">import</span> cv2, numpy <span className="text-purple-400">as</span> np
                    </p>
                    <p>
                      <span className="text-blue-400">denoised</span> = cv2.fastNlMeansDenoising(scan, None, 10, 7, 21)
                    </p>
                    <p>
                      <span className="text-blue-400">edges</span> = cv2.Canny(denoised, threshold1=<span className="text-amber-400">50</span>, threshold2=<span className="text-amber-400">150</span>)
                    </p>
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800/80 my-2 space-y-1 font-mono text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Artifact Noise Reduction:</span>
                        <span className="text-emerald-400 font-bold">Filtered (Gaussian + CLAHE)</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Segmentation Status:</span>
                        <span className="text-blue-400 font-bold">Calculus ROI Isolated</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      <span className="text-emerald-400">✓</span> Fed into scikit-learn classifier pipeline
                    </p>
                  </>
                )}

                {activeTab === "metrics" && (
                  <>
                    <p className="text-slate-500">&#123; /* Production Architecture Metrics */ &#125;</p>
                    <p className="text-blue-300">&#123;</p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-purple-400">"candidate"</span>: <span className="text-emerald-300">"Rakshit Pathak"</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-purple-400">"degree"</span>: <span className="text-emerald-300">"B.Tech Computer Science & Eng"</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-purple-400">"cgpa"</span>: <span className="text-amber-400">8.0</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-purple-400">"core_focus"</span>: [<span className="text-emerald-300">"AI/ML"</span>, <span className="text-emerald-300">"Computer Vision"</span>, <span className="text-emerald-300">"Full-Stack"</span>],
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-purple-400">"verified_certifications"</span>: <span className="text-amber-400">3</span>
                    </p>
                    <p className="text-blue-300">&#125;</p>
                  </>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
                <span>python3 app.py --mode=production</span>
                <span className="text-slate-400">Port: 5000</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
