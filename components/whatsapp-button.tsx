'use client'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491145678910"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* Tooltip — oculto en mobile, visible en hover en desktop */}
      <span
        className="
          pointer-events-none absolute right-16
          hidden sm:block
          whitespace-nowrap rounded-md bg-[var(--navy)] px-3 py-2
          text-[13px] font-medium text-white
          opacity-0 transition-opacity duration-200
          group-hover:opacity-100
        "
      >
        ¡Hablemos!
      </span>

      {/* Botón circular */}
      <span
        className="
          flex h-14 w-14 items-center justify-center rounded-full
          bg-[#25D366] shadow-lg
          transition-transform duration-200
          group-hover:scale-110
        "
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.836L.057 23.617a.75.75 0 00.921.921l5.781-1.465A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.207-1.367l-.374-.214-3.878.983.999-3.778-.233-.389A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </span>
    </a>
  )
}

export default WhatsAppButton
