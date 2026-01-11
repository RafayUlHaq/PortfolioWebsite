"use client"

import { motion } from "framer-motion"

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function Contact() {
  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-40 py-20 bg-[#0a0a0a] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              LET'S
              <br />
              COLLABORATE
              <br />
              TOGETHER!
            </h1>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/RafayUlHaq"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 
                         flex items-center justify-center text-gray-400
                         hover:bg-[#EA9666]/10 hover:border-[#EA9666]/30 hover:text-[#EA9666]
                         transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com/in/rafayulhaq"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 
                         flex items-center justify-center text-gray-400
                         hover:bg-[#EA9666]/10 hover:border-[#EA9666]/30 hover:text-[#EA9666]
                         transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href="mailto:r.haq026@gmail.com"
              className="group flex items-center gap-5 p-5 rounded-2xl
                       bg-white/5 backdrop-blur-sm border border-white/10
                       hover:bg-[#EA9666]/5 hover:border-[#EA9666]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EA9666]/10 flex items-center justify-center
                            text-[#EA9666] group-hover:bg-[#EA9666] group-hover:text-white transition-all">
                <EmailIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white font-medium">r.haq026@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+923082688826"
              className="group flex items-center gap-5 p-5 rounded-2xl
                       bg-white/5 backdrop-blur-sm border border-white/10
                       hover:bg-[#EA9666]/5 hover:border-[#EA9666]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EA9666]/10 flex items-center justify-center
                            text-[#EA9666] group-hover:bg-[#EA9666] group-hover:text-white transition-all">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-white font-medium">+92 308 2688826</p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Islamabad,Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl
                       bg-white/5 backdrop-blur-sm border border-white/10
                       hover:bg-[#EA9666]/5 hover:border-[#EA9666]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EA9666]/10 flex items-center justify-center
                            text-[#EA9666] group-hover:bg-[#EA9666] group-hover:text-white transition-all">
                <LocationIcon />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white font-medium">Islamabad, Pakistan</p>
              </div>
            </a>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="mailto:r.haq026@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#EA9666] px-8 py-4 
                         text-white font-medium hover:bg-[#D8A37F] 
                         hover:shadow-lg hover:shadow-[#EA9666]/30 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
