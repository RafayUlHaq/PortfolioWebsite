"use client"

import { motion } from "framer-motion"

const services = [
  {
    icon: "design",
    title: "UI/UX Design",
    description: "I interactive web and mobile interfaces in Figma using components, variables, styles, and Auto Layout.",
  },
  {
    icon: "code",
    title: "Frontend Development",
    description: "I build responsive, high-performance web applications using React, Next.js, and modern frameworks.",
  },
  {
    icon: "marketing",
    title: "Digital Marketing",
    description: "Executed a marketing campaign for a sponsor of Fast Music Club to increase brand awareness.",
  },
  {
    icon: "socialMedia",
    title: "Social Media Management",
    description: "I manage social media pages, from creating engaging content to successful order conversions.",
  },
  {
    icon: "event",
    title: "Event Management",
    description: "I have worked as an Event Coordinator at Fareeda Basheer Trust, Islamabad, and as an Event Management Intern at EOTO.",
  },
  {
    icon: "requirements",
    title: "Software Requirement Elicitation",
    description: "I have experience in gathering, analyzing, and documenting software requirements through stakeholder communication.",
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
    marketing: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    socialMedia: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    event: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    requirements: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
