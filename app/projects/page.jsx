"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { projects } from "@/data/projects"

function ProjectCard({ project, index, onVideoHover, onSlideshowHover }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleMouseEnter = () => {
    if (project.type === "video") {
      onVideoHover(project)
    } else if (project.type === "slideshow") {
      onSlideshowHover(project)
      // Start slideshow if multiple images
      if (project.images && project.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
        }, 1000) // Change image every 1 second
        
        // Store interval to clear it later
        project._slideshowInterval = interval
      }
    }
  }

  const handleMouseLeave = () => {
    if (project.type === "video") {
      onVideoHover(null)
    } else if (project.type === "slideshow") {
      onSlideshowHover(null)
      // Clear slideshow interval
      if (project._slideshowInterval) {
        clearInterval(project._slideshowInterval)
        project._slideshowInterval = null
      }
      setCurrentImageIndex(0) // Reset to first image
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden
                 hover:bg-[#EA9666]/5 hover:border-[#EA9666]/20 transition-all duration-400
                 relative"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EA9666] to-[#D8A37F] 
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-400 z-10" />

      {/* Media Container - hover expansion only on this section */}
      <motion.div
        className="relative h-48 overflow-hidden bg-black/20 media-hover"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {project.type === "video" ? (
          <video
            src={project.video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : project.type === "slideshow" ? (
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Play icon overlay for video */}
        {project.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-[#EA9666] flex items-center justify-center">
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Slideshow indicator for slideshow type */}
        {project.type === "slideshow" && project.images && project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {project.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-[#EA9666]' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                      opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-semibold text-white mb-2 hover:text-[#EA9666] transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#EA9666]/10 text-[#EA9666] px-3 py-1 rounded-full text-xs font-medium
                       border border-[#EA9666]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links - Only show for portfolio project */}
        {project.showLinks && (
          <div className="flex gap-3 flex-wrap">
            {project.figmaFile ? (
              <a
                href={project.figmaFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                         bg-[#EA9666] text-white
                         hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
                Open Figma File
              </a>
            ) : project.linkedinPost ? (
              <a
                href={project.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                         bg-[#EA9666] text-white
                         hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Complete Video
              </a>
            ) : (
              <>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                             bg-white/5 border border-white/10 text-gray-300
                             hover:text-white hover:border-[#EA9666] hover:bg-[#EA9666]/10 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                           bg-[#EA9666] text-white
                           hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function SlideshowModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Delay closing to allow moving to modal
    setTimeout(() => {
      if (!isHovering) {
        onClose()
      }
    }, 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onMouseLeave={handleMouseLeave}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Slideshow Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-10 w-[80vw] max-w-4xl pointer-events-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Title */}
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{project.description}</p>
        </div>

        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-[#EA9666]/20">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full aspect-video object-cover"
          />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#EA9666] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#EA9666] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>

        {/* Image Dots */}
        {project.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-[#EA9666]' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#EA9666]/10 text-[#EA9666] px-3 py-1 rounded-full text-xs font-medium
                       border border-[#EA9666]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.showLinks && (
          <div className="flex gap-3 justify-center mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                         bg-white/5 border border-white/10 text-gray-300
                         hover:text-white hover:border-[#EA9666] hover:bg-[#EA9666]/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Code
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       bg-[#EA9666] text-white
                       hover:bg-[#D8A37F] hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function VideoModal({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Video Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-10 w-[80vw] max-w-4xl"
      >
        {/* Title */}
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{project.description}</p>
        </div>

        {/* Video */}
        <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-[#EA9666]/20">
          <video
            src={project.video}
            className="w-full aspect-video object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#EA9666]/10 text-[#EA9666] px-3 py-1 rounded-full text-xs font-medium
                       border border-[#EA9666]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const [hoveredSlideshow, setHoveredSlideshow] = useState(null)

  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-40 pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#EA9666]">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated showcase of web and mobile app design, frontend development, and beyond.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onVideoHover={setHoveredVideo}
              onSlideshowHover={setHoveredSlideshow}
            />
          ))}
        </div>
      </div>

      {/* Video Modal on Hover */}
      <AnimatePresence>
        {hoveredVideo && (
          <VideoModal project={hoveredVideo} onClose={() => setHoveredVideo(null)} />
        )}
      </AnimatePresence>

      {/* Slideshow Modal on Hover */}
      <AnimatePresence>
        {hoveredSlideshow && (
          <SlideshowModal project={hoveredSlideshow} onClose={() => setHoveredSlideshow(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
