import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-[#070b14] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 dark:text-white">Rakshit Pathak</span>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
          <span>·</span>
          <span>Built with Next.js & Tailwind</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SoftApplee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rakshit-pathak-08288b2a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rakshitpathak115@gmail.com"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <Link
            href="#top"
            className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
