'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Palette, CheckCircle, Rocket } from 'lucide-react'
import { PROCESS_STEPS, PROCESS_SECTION } from '@/lib/constants'

// Map icon name strings to Lucide components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare,
  Palette,
  CheckCircle,
  Rocket,
}

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="section-label justify-center mb-3">· {PROCESS_SECTION.label}</p>
          <h2 className="font-[var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl text-[var(--navy)] uppercase tracking-tight" style={{ whiteSpace: 'pre-line' }}>
            {PROCESS_SECTION.headline}
          </h2>
          <p className="text-center text-[var(--text-muted)] max-w-xl leading-relaxed" style={{ marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.3rem' }}>
            {PROCESS_SECTION.subheadline}
          </p>
        </motion.div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">

          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--blue)]/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-6 px-4"
                >
                  {/* Number + icon circle */}
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-white shadow-sm border-2 border-[var(--blue)]/20 flex items-center justify-center">
                      {Icon && <Icon size={28} className="text-[var(--navy)]" />}
                    </div>
                    <span className="font-[var(--font-jakarta)] font-extrabold text-[var(--blue)] tracking-widest uppercase" style={{ fontSize: '0.975rem' }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex flex-col">
                    <h3 className="font-[var(--font-jakarta)] font-bold text-[var(--navy)] text-lg mt-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-2 mb-0">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
