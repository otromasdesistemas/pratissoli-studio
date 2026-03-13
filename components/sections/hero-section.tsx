'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { HERO, BRAND } from '@/lib/constants'

// Shared animation variant — fadeInUp
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// YouTube SVG icon (not in Lucide)
const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
  </svg>
)

// TikTok SVG icon (not in Lucide)
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)

// Instagram SVG icon (using Lucide-compatible approach via SVG)
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '10px' }}>
      <div className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--blue)]/10 text-[var(--blue)] text-sm font-semibold border border-[var(--blue)]/20">
                {HERO.badge}
              </span>
            </motion.div>

            {/* Headline — 72px+ on desktop */}
            <motion.h1
              variants={fadeInUp}
              className="font-[var(--font-jakarta)] font-extrabold text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[var(--navy)] leading-[1.0]"
              style={{ whiteSpace: 'pre-line' }}
            >
              {HERO.headline}
            </motion.h1>

            {/* Subheadline — max 520px */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--text-muted)] leading-relaxed"
              style={{ maxWidth: '520px' }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* Social icons + proof text */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={BRAND.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-[var(--navy)] hover:text-[var(--blue)] transition-colors duration-200"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[var(--navy)] hover:text-[var(--blue)] transition-colors duration-200"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={BRAND.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-[var(--navy)] hover:text-[var(--blue)] transition-colors duration-200"
                >
                  <TikTokIcon />
                </a>
              </div>
              <span className="text-sm text-[var(--text-muted)]">
                {HERO.socialProof}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {HERO.ctaPrimary}
              </a>
              <a
                href="#portafolio"
                className="btn-secondary"
              >
                {HERO.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Geometric decoration */}
          <div className="relative hidden lg:flex items-center justify-center h-[480px]">
            {/* Outer ring */}
            <div className="animate-float absolute w-96 h-96 rounded-full border-2 border-[var(--blue)]/15" />
            {/* Middle ring */}
            <div className="animate-float-delayed absolute w-72 h-72 rounded-full border border-[var(--navy)]/10" />

            {/* Main square */}
            <div className="animate-float absolute w-52 h-52 rounded-2xl bg-[var(--navy)] shadow-lg relative overflow-hidden">
              <Image
                src="/images/logo negro.png"
                alt="Pratissoli Studio"
                fill
                sizes="208px"
                className="object-contain p-6"
              />
            </div>

            {/* Accent — top right */}
            <div className="animate-float-delayed absolute top-10 right-10 w-16 h-16 rounded-2xl bg-[var(--yellow)]" />

            {/* Accent — bottom left */}
            <div className="animate-float absolute bottom-14 left-14 w-10 h-10 rounded-full bg-[var(--blue)]/25 border-2 border-[var(--blue)]" />

            {/* Dot cluster */}
            <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-[var(--navy)]/20" />
            <div className="absolute top-26 left-26 w-2 h-2 rounded-full bg-[var(--navy)]/15" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
