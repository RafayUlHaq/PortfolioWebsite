"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const stats = [
  { value: "200+", label: "Screens Designed" },
  { value: "180+", label: "Hours of Design & Development" },
  { value: "100%", label: "Responsive Builds" },
  { value: "5+", label: "Collaborations" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "100%", label: "User-Centered Design Approach" },
]

const timeline = [
  { years: "2003-2017", title: "Basic Schooling", description: "Lahore Grammar School Wah Cantt" },
  { years: "2017-2020", title: "O'Levels", description: "Lahore Grammar School Wah Cantt" },
  { years: "2020-2022", title: "A'Levels", description: "Lahore Grammar School Wah Cantt" },
  { years: "2022-2026", title: "Bachelors in Software Engineering", description: "FAST NUCES Islamabad" },
]

const experiences = [
  { title: "UI/UX Intern", company: "New Web Order, Bahria Town Phase 7" },
  { title: "Freelancing UI/UX", company: "Assisted a freelancer in designing User Interfaces" },
  { title: "Team Marketing", company: "Fast Music Club" },
  { title: "Team Finance", company: "Fast Adventure Club" },
  { title: "Event Coordinator", company: "Fareeda Basheer Trust" },
  { title: "Event Management Intern", company: "EOTO" },
  { title: "Social Media Management", company: "Instagram @Expressit.giftss" },
]

export default function About() {
  const scrollToBio = () => {
    const bioSection = document.getElementById('full-bio')
    if (bioSection) {
      bioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Left - Photo */}
            <div className="lg:w-[45%]">
              <div className="relative">
                {/* Photo */}
                <img
                  src="/images/about-image.jpeg"
                  alt="Rafay Ul Haq"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%]">
              <p className="text-white text-xl lg:text-2xl leading-relaxed mb-6 font-medium">
                As a <span className="font-bold">Software Engineer</span> with{" "}
                <span className="text-[#EA9666]">strong marketing instincts</span>, I develop
                solutions that align technical execution with business objectives.
              </p>


              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                A passionate UI/UX designer and developer based in Islamabad, crafting impactful digital experiences centered on users.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#EA9666] text-black px-6 py-3 rounded-full text-sm font-semibold
                           hover:bg-[#D8A37F] transition-all"
                >
                  Contact Rafay
                </Link>
                <button
                  onClick={scrollToBio}
                  className="border border-white/40 text-white px-6 py-3 rounded-full text-sm font-semibold
                           hover:bg-white/10 transition-all cursor-pointer"
                >
                  Full Bio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Dark background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#111] py-16 md:py-24 px-6 md:px-12 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full Bio Section - Education Timeline */}
      <motion.div
        id="full-bio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-12 lg:px-20 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Education <span className="text-[#EA9666]">Timeline</span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EA9666] via-[#D8A37F] to-[#EA9666]/30 md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.years}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#EA9666] rounded-full border-4 border-[#0a0a0a] z-10 md:-translate-x-1/2" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-[#EA9666]/5 hover:border-[#EA9666]/30 transition-all">
                    <span className="text-[#EA9666] text-sm font-semibold">{item.years}</span>
                    <h3 className="text-white text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experiences Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              <span className="text-[#EA9666]">Experiences</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-[#EA9666]/5 hover:border-[#EA9666]/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#EA9666]/20 rounded-lg flex items-center justify-center text-[#EA9666] group-hover:bg-[#EA9666] group-hover:text-white transition-all flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{exp.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{exp.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
