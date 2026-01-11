"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4">
      {/* FULL-WIDTH FLEX CONTAINER */}
      <div className="flex items-center justify-between px-6 md:px-20 lg:px-40">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-widest text-white/90 hover:text-white transition"
        >
          RAFAY UL HAQ
        </Link>

        {/* Center Floating Nav - Desktop */}
        <div className="hidden md:flex items-center">
          <div
            className="flex items-center gap-1
            bg-black/25 backdrop-blur-md
            border border-white/10
            rounded-full px-3 py-1.5
            shadow-lg"
          >
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} active={isActive(item.href)}>
                {item.label}
              </NavItem>
            ))}
          </div>
        </div>

        {/* CTA - Desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center
          rounded-full border border-white/15
          bg-black/25 backdrop-blur-md
          px-5 py-2 text-sm text-white/90
          hover:bg-black/40 transition
          shadow-[0_0_25px_rgba(255,255,255,0.08)]"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full
                   bg-black/25 backdrop-blur-md border border-white/10"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 mx-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm transition-all
                  ${isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl text-sm text-center
                       bg-[#EA9666] text-white font-medium
                       hover:bg-[#D8A37F] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
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
