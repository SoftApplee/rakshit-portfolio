"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, ArrowUpRight, FileText } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-5 py-3.5 flex items-center justify-between border ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5"
            : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-800/40"
        }`}
      >
        {/* Brand identity */}
        <Link href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            RP
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              Rakshit Pathak
            </span>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for roles
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900/80 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action icons & theme switch */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://github.com/SoftApplee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rakshit-pathak-08288b2a8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <a
            href="#contact"
            className="ml-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm shadow-blue-500/20 transition-colors flex items-center gap-1"
          >
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/SoftApplee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rakshit-pathak-08288b2a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
