import Image from 'next/image'
import { Instagram, Mail, MessageCircle } from 'lucide-react'
import { BRAND, FOOTER, FOOTER_LINKS } from '@/lib/constants'

// YouTube SVG
const YouTubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
  </svg>
)

// TikTok SVG
const TikTokIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container mx-auto max-w-6xl" style={{ padding: '64px 48px' }}>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10" style={{ paddingBottom: '48px', marginBottom: '40px' }}>

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/">
              <Image
                src="/images/logo-transparent.png"
                alt="Pratissoli Studio"
                width={160}
                height={40}
                className="h-10"
                style={{ width: 'auto' }}
              />
            </a>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              {FOOTER.description}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
              Navegación
            </p>
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
              Contacto
            </p>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              <MessageCircle size={15} />
              {BRAND.whatsapp}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              <Mail size={15} />
              {BRAND.email}
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={BRAND.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <YouTubeIcon />
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
