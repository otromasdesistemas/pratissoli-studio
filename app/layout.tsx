import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { BRAND } from '@/lib/constants'

// --- Fonts ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — Landing pages para profesionales`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    'Diseñamos landing pages que generan confianza y convierten visitantes en clientes. Para psicólogos, abogados, arquitectos, contadores y kinesiólogos.',
  keywords: [
    'landing page',
    'diseño web profesional',
    'páginas web Argentina',
    'web para psicólogos',
    'web para abogados',
    'web para arquitectos',
  ],
  authors: [{ name: BRAND.name }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://pratissolistudio.com',
    siteName: BRAND.name,
    title: `${BRAND.name} — Landing pages para profesionales`,
    description:
      'Diseñamos landing pages que generan confianza y convierten visitantes en clientes.',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — Landing pages para profesionales`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} — Landing pages para profesionales`,
    description:
      'Diseñamos landing pages que generan confianza y convierten visitantes en clientes.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// --- Root Layout ---
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
