"use client"

import MotionWrapper from "@/components/MotionWrapper"

export default function About() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-10 py-20">
      <MotionWrapper className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-gray-300 text-lg">
          I’m a UI/UX designer and software engineer with a passion for creating intuitive, user-centered digital experiences.
        </p>
        <p className="text-gray-300 text-lg">
          I specialize in React, Next.js, and Tailwind CSS. I love turning design ideas into fully functional, interactive web applications.
        </p>
      </MotionWrapper>
    </section>
  )
}
