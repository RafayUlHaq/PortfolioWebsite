"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4">
      {/* FULL-WIDTH FLEX CONTAINER */}
      <div className="flex items-center justify-between px-6 md:px-20 lg:px-40">

        {/* Logo — aligned with left red mark */}
        <Link
          href="/"
          className="text-xl font-bold tracking-widest text-white/90 hover:text-white transition"
        >
          RAFAY UL HAQ
        </Link>

        {/* Center Floating Nav */}
        <div className="hidden md:flex items-center">
          <div
            className="flex items-center gap-1
            bg-black/25 backdrop-blur-md
            border border-white/10
            rounded-full px-3 py-1.5
            shadow-lg"
          >
            <NavItem href="/" active={isActive("/")}>Home</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#about">About</NavItem>
          </div>
        </div>

        {/* CTA — aligned with right red mark */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center
          rounded-full border border-white/15
          bg-black/25 backdrop-blur-md
          px-5 py-2 text-sm text-white/90
          hover:bg-black/40 transition
          shadow-[0_0_25px_rgba(255,255,255,0.08)]"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  )
}

function NavItem({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`px-5 py-2 rounded-full text-sm tracking-wide
      transition-all duration-300
      ${
        active
          ? "text-white bg-white/10 shadow-inner"
          : "text-white/60 hover:text-white/90 hover:bg-white/5"
      }`}
    >
      {children}
    </Link>
  )
}
