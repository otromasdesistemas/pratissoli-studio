// ============================================================
// PRATISSOLI STUDIO — Site-wide content constants
// All copy lives here. Never hardcode text in JSX.
// ============================================================

// --- BRAND ---
export const BRAND = {
  name: 'Pratissoli Studio',
  tagline: 'Landing pages para profesionales',
  email: 'hola@pratissolistudio.com',
  whatsapp: '+54 9 11 XXXX-XXXX',
  whatsappLink: 'https://wa.me/5491155551234',
  youtube: 'https://www.youtube.com/@otromasdesistemas',
  instagram: 'https://www.instagram.com/otromasdesistemas/',
  tiktok: 'https://www.tiktok.com/@otromasdesistemas',
}

// --- NAVBAR ---
export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const NAV_CTA = 'Quiero mi web'

// --- HERO ---
export const HERO = {
  badge: '✦ Disponible para nuevos proyectos',
  headline: 'MÁS CLIENTES\nEN 7 DÍAS.',
  subheadline:
    'Diseñamos tu landing page desde cero. Vos no tocás nada — nosotros nos encargamos del diseño, el código y el deploy. En una semana, tu web está online y generando consultas.',
  socialProof: 'Desarrollador. Educador. +200k personas siguen mi trabajo.',
  ctaPrimary: 'Quiero mi web →',
  ctaSecondary: 'Ver portafolio',
}

// --- MARQUEE ---
export const MARQUEE_ITEMS = [
  'Psicólogos',
  'Abogados',
  'Arquitectos',
  'Contadores',
  'Kinesiólogos',
  'Nutricionistas',
  'Odontólogos',
  'Diseñadores',
]

// --- ABOUT ---
export const ABOUT = {
  label: 'SOBRE PRATISSOLI STUDIO',
  headline: 'Desarrollado por alguien que realmente entiende la web.',
  body: 'Soy Ezequiel Pratissoli, desarrollador con +4 años construyendo productos digitales. Cada web que entregamos es código limpio, diseño a medida y deploy real — sin plantillas, sin intermediarios, sin vueltas.',
  bodyMuted: 'Desarrollador. Educador. Más de 200k personas siguen mi trabajo.',
  stats: [
    { value: '+200k', label: 'personas siguen mi trabajo en redes' },
    { value: '7 días', label: 'de brief a web online, garantizado' },
    { value: '100%', label: 'código a medida, nunca plantillas' },
  ],
}

// --- SERVICES SECTION HEADER ---
export const SERVICES_SECTION = {
  label: 'SERVICIOS',
  headline: 'UNA WEB QUE TRABAJA\nPOR VOS.',
  subheadline:
    'Sin reuniones eternas. Sin decisiones técnicas de tu parte. Vos nos contás qué hacés — nosotros construimos el resto.',
}

// --- SERVICES ---
export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
  badge?: string
}

export const SERVICES: Service[] = [
  {
    icon: 'Zap',
    title: 'Landing Esencial',
    description:
      'Todo lo que necesitás para que un potencial cliente llegue a tu web y te escriba. Sin distracciones, sin fricción, con foco total en la conversión.',
    features: [
      'Diseño custom a medida de tu profesión',
      'Formulario de contacto directo',
      'Botón de WhatsApp integrado',
      'SEO básico para aparecer en Google',
      '100% optimizada para mobile',
      'Deploy incluido — entregamos la URL',
    ],
  },
  {
    icon: 'Star',
    title: 'Landing Pro',
    badge: 'Más elegido',
    description:
      'Para el profesional que quiere diferenciarse en serio. Más secciones, más confianza, más chances de que el visitante te elija a vos sobre tu competencia.',
    features: [
      'Todo lo del plan Esencial',
      'Sección de testimonios lista para llenar',
      'Blog o artículos para posicionarte como experto',
      'Google Analytics configurado',
      'Integración con Calendly para turnos online',
      '2 rondas de revisiones incluidas',
    ],
  },
  {
    icon: 'Shield',
    title: 'Mantenimiento mensual',
    description:
      'Tu web siempre actualizada, segura y funcionando. Vos te ocupás de lo tuyo — nosotros del resto.',
    features: [
      'Hasta 4 cambios de contenido por mes',
      'Soporte directo por WhatsApp',
      'Backups mensuales automáticos',
      'Dominio y hosting gestionados por nosotros',
    ],
  },
]

// --- PORTFOLIO SECTION HEADER ---
export const PORTFOLIO_SECTION = {
  label: 'PORTAFOLIO',
  headline: 'DEMOS POR NICHO.',
  subheadline:
    'Cada profesión tiene su propio lenguaje visual. Diseñamos con foco en el perfil exacto de cliente que querés atraer.',
}

// --- PORTFOLIO ---
export interface PortfolioItem {
  niche: string
  icon: string
  description: string
  status: 'live' | 'coming-soon'
  url?: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    niche: 'Psicólogos',
    icon: 'Brain',
    description: 'Webs que transmiten calidez y confianza desde el primer segundo.',
    status: 'live',
    url: 'https://pratissoli-demo-psicologa.vercel.app/',
  },
  {
    niche: 'Abogados',
    icon: 'Scale',
    description: 'Diseño serio y formal que refuerza autoridad y credibilidad profesional.',
    status: 'coming-soon',
  },
  {
    niche: 'Arquitectos',
    icon: 'Building2',
    description: 'Portafolios visuales que hablan por sí solos.',
    status: 'coming-soon',
  },
  {
    niche: 'Contadores',
    icon: 'Calculator',
    description: 'Claridad y orden que comunican confianza y profesionalismo.',
    status: 'coming-soon',
  },
  {
    niche: 'Kinesiólogos',
    icon: 'Activity',
    description: 'Webs dinámicas que reflejan movimiento, energía y salud.',
    status: 'coming-soon',
  },
]

// --- PROCESS SECTION HEADER ---
export const PROCESS_SECTION = {
  label: 'PROCESO',
  headline: 'DE CERO A ONLINE\nEN 4 PASOS.',
  subheadline: 'Sin reuniones eternas ni decisiones técnicas de tu parte.',
}

// --- PROCESS ---
export interface ProcessStep {
  number: string
  icon: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    icon: 'MessageSquare',
    title: 'Brief',
    description:
      'Completás un formulario corto sobre tu profesión, tu público y tus objetivos. 15 minutos de tu tiempo, nada más.',
  },
  {
    number: '02',
    icon: 'Palette',
    title: 'Diseño',
    description:
      'Creamos el diseño completo en base al brief. Te mostramos un mockup antes de escribir una línea de código. Vos aprobás.',
  },
  {
    number: '03',
    icon: 'CheckCircle',
    title: 'Revisión',
    description:
      'Tenés hasta dos rondas de cambios. Ajustamos textos, colores y estructura hasta que estés 100% conforme.',
  },
  {
    number: '04',
    icon: 'Rocket',
    title: 'Deploy',
    description:
      'Publicamos tu sitio, configuramos el dominio y te dejamos todo listo para empezar a recibir clientes. Vos no tocás nada.',
  },
]

// --- TESTIMONIALS SECTION HEADER ---
export const TESTIMONIALS_SECTION = {
  label: 'TESTIMONIOS',
  headline: 'LO QUE DICEN\nNUESTROS CLIENTES.',
}

// --- TESTIMONIALS ---
export interface Testimonial {
  quote: string
  name: string
  profession: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Desde que lancé mi landing page, las consultas por semana se triplicaron. El diseño transmite exactamente la calidez que quería proyectar."',
    name: 'Valentina Ríos',
    profession: 'Psicóloga Clínica',
    avatar: '',
  },
  {
    quote:
      '"Profesionalismo absoluto. Me entregaron exactamente lo que pedí, en tiempo y forma. Mis clientes me preguntan quién me hizo el sitio."',
    name: 'Rodrigo Méndez',
    profession: 'Abogado Corporativo',
    avatar: '',
  },
  {
    quote:
      '"La sección de proyectos quedó espectacular. Por fin tengo un lugar donde mostrar mi trabajo como merece."',
    name: 'Camila Ferreyra',
    profession: 'Arquitecta',
    avatar: '',
  },
]

// --- CTA FINAL ---
export const CTA_SECTION = {
  headline: '¿SEGUÍS PERDIENDO CLIENTES\nPOR NO TENER WEB?',
  subheadline:
    'Trabajamos con un número limitado de proyectos por mes para garantizar calidad. Si hay lugar disponible, arrancamos esta semana.',
  ctaButton: 'Quiero mi web →',
  ctaSubtext: 'Sin compromiso. Respondemos en menos de 24hs.',
}

// --- FOOTER ---
export const FOOTER = {
  description:
    'Landing pages para profesionales que quieren generar confianza y captar más clientes.',
  city: 'Buenos Aires, Argentina',
  copyright: '© 2026 Pratissoli Studio. Hecho con cuidado en Buenos Aires, Argentina.',
}

export const FOOTER_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]
