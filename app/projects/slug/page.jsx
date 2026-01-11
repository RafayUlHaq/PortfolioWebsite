"use client"

import { projects } from "@/data/projects"
import MotionWrapper from "@/components/MotionWrapper"

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return <p className="text-white p-10">Project not found</p>

  return (
    <section className="min-h-screen bg-gray-950 text-white px-10 py-20">
      <MotionWrapper className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="text-gray-300 text-lg">{project.description}</p>
      </MotionWrapper>
    </section>
  )
}
