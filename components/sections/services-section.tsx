'use client'

import { motion, type Variants } from 'framer-motion'
import { Zap, Star, Shield, Check, ArrowRight } from 'lucide-react'
import { SERVICES, SERVICES_SECTION, BRAND } from '@/lib/constants'

// Map icon name strings to Lucide components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Zap,
  Star,
  Shield,
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeInUp} className="section-label justify-center mb-3">
            · {SERVICES_SECTION.label}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-[var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl text-[var(--navy)] uppercase tracking-tight" style={{ whiteSpace: 'pre-line' }}>
            {SERVICES_SECTION.headline}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-[var(--text-muted)] max-w-xl leading-relaxed" style={{ marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.3rem' }}>
            {SERVICES_SECTION.subheadline}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.1 } },
                }}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-[var(--blue)] transition-colors duration-300 flex flex-col gap-6"
                style={{ padding: '40px' }}
              >
                {/* Icon circle + optional badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                    {Icon && <Icon size={22} className="text-[var(--blue)]" />}
                  </div>
                  {service.badge && (
                    <span className="badge-popular">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & description */}
                <div>
                  <h3 className="font-[var(--font-jakarta)] font-bold text-xl text-[var(--navy)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-2 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-primary)]">
                      <Check size={15} className="text-[var(--blue)] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-blue mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
                >
                  Consultá por este plan
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
