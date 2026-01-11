'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  // Hide footer on home, services, and projects pages
  if (pathname === '/' || pathname === '/services' || pathname === '/projects') {
    return null
  }

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://github.com/RafayUlHaq", label: "GitHub" },
    { href: "https://linkedin.com/in/rafayulhaq", label: "LinkedIn" },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-20 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-widest text-white/90 hover:text-white transition">
              RAFAY UL HAQ
            </Link>
            <p className="text-gray-400 text-sm mt-3 max-w-xs">
              Software Engineer & UI/UX Designer. Daytime designer. Nighttime vibecoder.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#EA9666] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#EA9666] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:r.haq026@gmail.com" className="hover:text-[#EA9666] transition">
                  r.haq026@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923082688826" className="hover:text-[#EA9666] transition">
                  +92 308 2688826
                </a>
              </li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Rafay Ul Haq. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-gray-400 text-sm hover:text-[#EA9666] transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
