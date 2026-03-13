'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { ABOUT, BRAND } from '@/lib/constants'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// YouTube SVG
const YouTubeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
  </svg>
)

// TikTok SVG
const TikTokIcon = () => (
  <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)

// Instagram SVG
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Label */}
            <motion.p
              variants={fadeInUp}
              className="section-label"
            >
              · {ABOUT.label}
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="font-[var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl text-[var(--navy)] leading-tight"
            >
              {ABOUT.headline}
            </motion.h2>

            {/* Body */}
            <motion.p variants={fadeInUp} className="text-[var(--text-primary)] leading-relaxed">
              {ABOUT.body}
            </motion.p>

            {/* YouTube screenshot */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/images/capturayoutube.png"
                alt="Canal de YouTube"
                width={640}
                height={360}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Muted line */}
            <motion.p variants={fadeInUp} className="text-[var(--text-muted)] text-sm leading-relaxed">
              {ABOUT.bodyMuted}
            </motion.p>

            {/* Social icons */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8">
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
            </motion.div>
          </motion.div>

          {/* Right — Stats */}
          <div className="grid grid-cols-1 gap-4">
            {ABOUT.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm flex flex-col gap-2 border border-gray-200 min-h-[100px] justify-center"
                style={{ padding: '28px 32px' }}
              >
                <span className="font-[var(--font-jakarta)] font-extrabold text-4xl text-[var(--navy)]">
                  {stat.value}
                </span>
                <span className="text-[var(--text-muted)] text-sm leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
