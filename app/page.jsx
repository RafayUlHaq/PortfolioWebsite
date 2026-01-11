"use client"

import MotionWrapper from "@/components/MotionWrapper"

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-20 lg:px-40">
        {/* Hero Content */}
        <div className="relative z-10 flex-1 w-full flex flex-col justify-center max-w-3xl pt-32 md:pt-72">
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight">
            <span className="text-[#EA9666]">Rafay Ul Haq</span>
            <br />
            <span className="text-[#D8A37F] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Software Engineer
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-4 sm:mt-6 md:mt-8 max-w-md text-gray-300 text-sm sm:text-base md:text-lg">
          Daytime designer. Nighttime vibecoder.
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute right-6 md:right-40 top-[65%] -translate-y-1/2 z-20">
          <a
            href="#contact"
            className="rounded-full bg-black/60 border border-white/20 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white shadow-[0_0_30px_rgba(234,150,102,0.4)] hover:bg-black/80 transition"
          >
            Book a Call
          </a>
        </div>

      {/* Tags container */}
  <div className="absolute bottom-12 left-0 w-full overflow-hidden">
    <div className="flex animate-scroll gap-6 w-max">
    {[...Array(2)].flatMap(() => [
      // Primary Skills - highlighted / main focus
      { name: "Frontend Dev", icon: "🌐" },
      { name: "UI Design", icon: "🎨" },
      { name: "User Experience", icon: "✏️" },
      { name: "Wireframing", icon: "📐" },
      { name: "Prototyping", icon: "🛠️" },
      { name: "User Research", icon: "👥" },

      // Secondary / supporting skills
      { name: "Figma", icon: "🎛️" },

      // Extra / value-added skills
      { name: "Marketing", icon: "📣" },
      { name: "Social Media", icon: "🤳" },
      { name: "Branding", icon: "🛡️" },

      // Additional skills for duplication / seamless scroll
      { name: "Web App", icon: "🌐" },
      { name: "UX Design", icon: "✏️" },
      { name: "Mobile App", icon: "📱" },
    ]).map((item, idx) => (
      <span
        key={idx}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base text-white border border-white/20 bg-black/30"
      >
        <span className="text-[#EA9666] text-base sm:text-lg">{item.icon}</span>
        {item.name}
      </span>
    ))}
    </div>  
  </div>


        {/* Decorative element */}
        <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-8 z-20">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white text-sm sm:text-base">
            N
          </div>
        </div>
      </section>
    </>
  )
}
