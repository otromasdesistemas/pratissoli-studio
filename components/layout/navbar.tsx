'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS, NAV_CTA } from '@/lib/constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add blur/shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo-transparent.png"
            alt="Pratissoli Studio"
            width={160}
            height={40}
            className="h-10"
            style={{ width: 'auto' }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--navy)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-[var(--yellow)] text-[var(--navy)] text-base font-bold hover:brightness-110 transition-all duration-200"
          style={{ padding: '12px 32px', boxShadow: '0 0 16px rgba(245, 197, 24, 0.45), 0 0 6px rgba(245, 197, 24, 0.25)' }}
        >
          {NAV_CTA}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--navy)] hover:bg-black/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <nav className="container mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--blue)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 inline-flex justify-center items-center px-7 py-4 rounded-full bg-[var(--yellow)] text-[var(--navy)] text-base font-bold hover:brightness-110 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {NAV_CTA}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
