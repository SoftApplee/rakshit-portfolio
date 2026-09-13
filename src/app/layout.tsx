import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Rakshit Pathak — AI/ML Engineer & Full-Stack Developer",
  description:
    "Final-year B.Tech CSE student (2023–2027) specializing in AI/ML, computer vision, deep learning pipelines, and production full-stack systems.",
  keywords: [
    "Rakshit Pathak",
    "AI/ML Engineer",
    "Computer Vision",
    "Machine Learning",
    "Full-Stack Developer",
    "BERT",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Rakshit Pathak", url: "https://github.com/SoftApplee" }],
  openGraph: {
    title: "Rakshit Pathak — AI/ML Engineer & Full-Stack Developer",
    description:
      "Final-year B.Tech CSE student specializing in AI/ML, computer vision, and full-stack systems. End-to-end ML from data pipeline to deployment.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-[#070b14] selection:bg-blue-500/20 selection:text-blue-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
