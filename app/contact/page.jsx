"use client"

import MotionWrapper from "@/components/MotionWrapper"

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-10 py-20">
      <MotionWrapper className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-300 text-lg">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        <form className="flex flex-col space-y-4 mt-6">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white border border-gray-700" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white border border-gray-700" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white border border-gray-700" rows="5"></textarea>
          <button type="submit" className="bg-[#EA9666] px-6 py-3 rounded-lg font-medium hover:bg-[#D57E45] transition">
            Send Message
          </button>
        </form>
      </MotionWrapper>
    </section>
  )
}
