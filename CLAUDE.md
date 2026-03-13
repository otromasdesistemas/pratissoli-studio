# CLAUDE.md — Pratissoli Studio

Este archivo es tu guía de referencia obligatoria. Léelo completo antes de escribir cualquier línea de código. No improvises fuera de estas decisiones.

---

## Quién eres en este proyecto

Sos el desarrollador principal de **Pratissoli Studio**, una agencia argentina que crea landing pages para profesionales (psicólogos, abogados, arquitectos, contadores, kinesiólogos). Tu trabajo es escribir código limpio, moderno y visualmente impecable. El dueño del negocio no toca código — vos ejecutás todo a partir de prompts.

---

## Stack tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Deploy:** Vercel (conectado al repo de GitHub)
- **Iconos:** Lucide React
- **Fuentes:** Google Fonts vía next/font

No agregues dependencias fuera de este stack sin pedirlo explícitamente. Si considerás que una librería extra aporta valor, proponela antes de instalarla.

---

## Paleta de colores

Usá siempre estas variables. No inventes colores fuera de esta paleta.
```css
--background: #F0F0F0       /* fondo principal */
--dot-grid: #CCCCCC         /* puntos del grid de fondo */
--navy: #0A1628             /* textos grandes, navbar, footer */
--blue: #2563EB             /* CTAs secundarios, highlights, links */
--white: #FFFFFF            /* cards, superficies elevadas */
--yellow: #F5C518           /* CTA principal únicamente */
--text-primary: #0A1628     /* cuerpo de texto */
--text-muted: #6B7280       /* textos secundarios */
```

---

## Diseño visual — reglas estrictas

**Fondo:** El fondo de toda la web es un grid de puntos SVG sobre `#F0F0F0`. Implementalo como patrón SVG en el `body` o en un wrapper global. El patrón es: círculos de 1px en `#CCCCCC`, repetidos cada 24px en x e y.

**Tipografía:**
- Headlines: **Plus Jakarta Sans** — bold, uppercase en heroes, tracking amplio
- Cuerpo: **Inter** — regular 400/500, tamaño base 16px
- Nunca uses más de estas dos fuentes

**Bordes y radios:**
- Cards: `rounded-2xl` (16px)
- Botones: `rounded-full`
- Sin bordes decorativos genéricos — si hay borde, que tenga intención

**Sombras:** Sutiles. Preferí `shadow-sm` sobre `shadow-lg`. Evitá el estilo "flotando en el aire".

**Animaciones con Framer Motion:**
- Entradas: `fadeInUp` con `duration: 0.5` y `ease: "easeOut"`
- Nunca animes más de 3 elementos simultáneamente en la misma sección
- El scroll reveal es estándar en todas las secciones (`whileInView`, `once: true`)

---

## Estructura del proyecto
```
/app
  /page.tsx              ← homepage de la agencia
  /layout.tsx            ← layout global con metadata SEO
  /globals.css           ← variables CSS y estilos base
/components
  /ui                    ← componentes genéricos (Button, Badge, Card)
  /sections              ← secciones de la homepage (Hero, Services, Portfolio, etc.)
  /layout                ← Navbar, Footer
/lib
  /constants.ts          ← textos, datos de servicios, etc.
  /utils.ts              ← helpers
/public
  /images                ← assets estáticos
```

---

## Secciones de la homepage (en orden)

1. **Navbar** — logo "Pratissoli Studio" a la izquierda, links al centro (Servicios, Portafolio, Proceso, Contacto), CTA "Hablemos" en amarillo a la derecha. Sticky, con blur de fondo al hacer scroll.

2. **Hero** — Headline grande en navy, subtítulo en muted, dos CTAs (primario amarillo, secundario outline azul). Badge superior tipo "Disponible para nuevos proyectos". Elemento decorativo 3D o geométrico flotante (usar CSS o SVG, no Three.js).

3. **Social proof bar** — franja oscura (#0A1628) con logos o texto de los nichos que atienden: "Psicólogos · Abogados · Arquitectos · Contadores · Kinesiólogos". Scroll infinito suave (marquee).

4. **Servicios** — Cards con los 3 paquetes o tipos de entregable. Ícono, título, descripción corta, precio o "desde $X".

5. **Portafolio** — Grid de 5 cards, una por nicho. Por ahora con placeholder elegante que diga "Próximamente" con el nombre del nicho. Dejar estructura lista para cuando se agreguen las demos reales.

6. **Proceso** — Timeline horizontal o vertical con los pasos: Brief → Diseño → Revisión → Deploy. Numerado, con ícono y descripción breve.

7. **Testimonios** — Sección preparada con 3 cards vacías/placeholder. Comentario, nombre, profesión, foto circular. Lista para llenar después.

8. **CTA final** — Sección de cierre con headline directo, subtítulo, botón amarillo grande y dato de contacto (WhatsApp o email).

9. **Footer** — Logo, links, redes, copyright "© 2026 Pratissoli Studio".

---

## Convenciones de código

- Todos los componentes en PascalCase
- Todos los archivos de componentes en kebab-case: `hero-section.tsx`
- Usá `const` arrow functions para componentes: `const Hero = () => {}`
- No uses `any` en TypeScript — tipá todo
- Los textos y copies van en `/lib/constants.ts`, nunca hardcodeados en JSX
- Comentarios en inglés, commits en español

---

## SEO

En `/app/layout.tsx` incluí siempre:
- `title` y `description` con metadata de Next.js
- Open Graph básico
- `lang="es"` en el html

---

## Lo que NO hacés sin que te lo pidan

- No agregás CMS ni panel de admin
- No montás base de datos
- No creás rutas adicionales más allá de la homepage en la fase inicial
- No usás Three.js ni WebGL — el peso no lo justifica para este proyecto
- No instalás librerías de UI como shadcn, MUI o Chakra — el diseño es 100% custom con Tailwind

---

## Cómo trabajamos

Recibís un prompt con una tarea específica. Ejecutás esa tarea completa, incluyendo todos los archivos necesarios. Cuando terminés una fase, indicá claramente qué archivos creaste o modificaste y cuál es el próximo paso lógico.
