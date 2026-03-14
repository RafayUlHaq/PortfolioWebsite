"use client"

import { motion } from "framer-motion"

const services = [
  {
    icon: "design",
    title: "UI/UX Design",
    description: "I design interactive web and mobile interfaces in Figma using components, variables, styles, and Auto Layout.",
  },
  {
    icon: "code",
    title: "Frontend Development",
    description: "I build responsive, high-performance web applications using React, Next.js, and modern frameworks.",
  },
  {
    icon: "GHL",
    title: "Go High Level",
    description: "I create custom code landing pages and funnels to convert most users and enhance business growth.",
  },
  {
    icon: "SQA",
    title: "Software Quality Assurance",
    description: "I ensure flawless software through rigorous testing and quality assurance",
  },
  {
    icon: "webfolios",
    title: "Portfolio Websites",
    description: "I create convering portfolio websites for individuals that make them stand out",
  },
  {
    icon: "management",
    title: "Event Management", 
    description: "I have worked as an Event Coordinator at Fareeda Basheer Trust, Islamabad, and as an Event Management Intern at EOTO.",
  },
]

function ServiceIcon({ type }) {
  const icons = {
    design: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    code: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    GHL: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    SQA: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8h2a2 2 0 012 2v6a2 2 0 01-2 2H9m0-8v8m0-8h6m-6 8h6" />
      </svg>
    ),
    webfolios: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    management: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  }
  return icons[type]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Services() {
  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-40 pt-32 pb-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#EA9666] text-sm tracking-wider mb-3"></p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What I Do Best
          </h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group card-glow bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 
                         hover:bg-[#EA9666]/5 hover:border-[#EA9666]/30 transition-all duration-400
                         relative overflow-hidden shine-effect"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EA9666] to-transparent 
                            scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#EA9666]/20 to-[#8B4513]/10 
                            rounded-2xl flex items-center justify-center text-[#EA9666]
                            group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#EA9666] group-hover:to-[#D8A37F]
                            group-hover:text-white transition-all duration-300
                            group-hover:shadow-lg group-hover:shadow-[#EA9666]/30">
                <ServiceIcon type={service.icon} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#EA9666] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
