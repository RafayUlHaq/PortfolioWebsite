"use client"

import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use } from "react"

export default function ProjectPage({ params }) {
  const resolvedParams = use(params)
  const project = projects.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-40 pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#EA9666]/10 text-[#EA9666] px-4 py-1.5 rounded-full text-sm font-medium
                         border border-[#EA9666]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Media */}
          <div className="rounded-2xl overflow-hidden bg-black/20 border border-white/10">
            {project.type === "video" ? (
              <video
                src={project.video}
                className="w-full aspect-video object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            )}
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">About this project</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Links - Dynamic based on project type */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.figmaFile && (
              <a
                href={project.figmaFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full
                         bg-[#EA9666] text-white font-medium
                         hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
                Open Figma File
              </a>
            )}

            {project.linkedinPost && (
              <a
                href={project.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full
                         bg-[#EA9666] text-white font-medium
                         hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View Complete Video
              </a>
            )}

            {project.github && project.live && (
              <>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full
                           bg-white/5 border border-white/10 text-white font-medium
                           hover:bg-white/10 hover:border-[#EA9666]/30 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full
                           bg-[#EA9666] text-white font-medium
                           hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
