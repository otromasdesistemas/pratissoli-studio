// ============================================================
// PRATISSOLI STUDIO — Utility helpers
// ============================================================

/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx for this project.
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formats a WhatsApp link with an optional pre-filled message.
 */
export const buildWhatsAppLink = (phone: string, message?: string): string => {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${cleanPhone}${encodedMessage}`
}
