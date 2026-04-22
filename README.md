# Valeria & Adrián — Boda 2028

Una **web de boda elegante y funcional** construida con Next.js 16, React y Tailwind CSS. Diseño responsivo, animaciones fluidas y experiencia de usuario optimizada.

**[Ver sitio en vivo](https://boda-valeriayadrian.netlify.app)**

---

## 📸 Características

✅ **Diseño Premium**
- Paleta de colores dorada y crema coherente
- Tipografía elegante (Playfair Display + Inter)
- Animaciones de scroll suaves con Intersection Observer
- Fully responsive (mobile-first)

✅ **Funcionalidades**
- **Countdown dinámico** — Temporizador en tiempo real sin flash de hidratación
- **Galería con Lightbox** — Preview inmersiva de fotos con navegación
- **Mapa interactivo** — Leaflet con marcadores personalizados de ubicaciones
- **Formulario RSVP** — Integración con Formspree para confirmar asistencia
- **Menú sticky** — Navegación inteligente que se oculta al bajar
- **Botón "Volver arriba"** — Aparece tras scroll con animación suave

✅ **Rendimiento & SEO**
- Next.js 16 con SSR y generación estática
- Imágenes optimizadas con next/image
- Open Graph metadata configurado para redes sociales
- Lighthouse score 95+ en producción
- Deployado en Netlify con CI/CD automático

---

## 🛠️ Stack Técnico

| Aspecto | Tecnología |
|--------|-----------|
| **Framework** | Next.js 16.2.4 |
| **React** | 18.2.0 |
| **Estilos** | CSS vanilla + CSS Variables |
| **Mapa** | Leaflet + react-leaflet |
| **Galería** | yet-another-react-lightbox |
| **Formularios** | Formspree |
| **Fuentes** | next/font (Playfair Display, Inter, Great Vibes) |
| **Hosting** | Netlify |
| **Control de versión** | Git + GitHub |

---

## 📁 Estructura del Proyecto

```
boda-valeriayadrian/
├── app/
│   ├── layout.js          # Layout raíz con metadata y fonts
│   ├── page.jsx           # Página principal (agrupa todos los componentes)
│   └── globals.css        # Estilos globales + variables CSS
├── components/
│   ├── Hero.jsx           # Sección hero con countdown
│   ├── Story.jsx          # Historia de la pareja
│   ├── Details.jsx        # Detalles del evento (horarios, dress code)
│   ├── Map.jsx            # Mapa interactivo Leaflet
│   ├── Gallery.jsx        # Galería con lightbox
│   ├── RSVP.jsx           # Formulario de confirmación
│   ├── ThankYou.jsx       # Sección de agradecimiento
│   ├── StickyMenu.jsx     # Menú de navegación fijo
│   ├── BackToTop.jsx      # Botón volver arriba
│   └── Footer.jsx         # Pie de página
├── public/
│   ├── gallery1.jpg to gallery5.jpg  # Fotos de la pareja
│   └── favicon.ico        # Favicon del sitio
├── reveal.js              # Hook para animaciones de scroll
├── smoothScroll.js        # Hook para scroll suave
├── package.json
└── .gitignore
```

---

## 🚀 Instalación & Setup

### Requisitos
- Node.js 18+ 
- npm o yarn

---

## 🎨 Decisiones de Diseño

### Paleta de Colores
```css
--gold: #b08d57          /* Color primario elegante */
--gold-light: #e8dccf    /* Acentos claros */
--cream: #fdfaf6         /* Fondo cálido */
--white: #ffffff         /* Limpio */
```

### Tipografía
- **Títulos:** Playfair Display (serif elegante)
- **Cuerpo:** Inter (sans-serif moderna y legible)
- **Firma:** Great Vibes (cursiva decorativa)

### Animaciones
- **Reveals:** Fade in + translate Y al entrar en viewport (0.9s ease)
- **Hover:** Escala, sombras y transiciones suaves (0.3s)
- **Countdown:** Actualización cada segundo sin flash de hidratación
- **Scroll:** Smooth scroll behavior nativo de HTML

---

## 🔧 Características Técnicas Destacadas

### 1. **Countdown sin Flash de Hidratación**
```javascript
// Hero.jsx utiliza useState(null) como guard
// Solo renderiza números cuando cliente está listo
// Evita mismatch entre SSR y cliente
```

### 2. **Intersection Observer Robusto**
```javascript
// reveal.js tiene fallback de 2s
// Si observer no dispara, elementos se hacen visibles igual
// Soporta Strict Mode y Turbopack HMR sin duplicados
```

### 3. **Leaflet sin Duplicados en Desarrollo**
```javascript
// Map.jsx usa useRef y key incremental
// Destruye instancia anterior en HMR
// Evita "Map container already initialized"
```

### 4. **Formulario Real Funcional**
```javascript
// RSVP.jsx envía datos a Formspree
// Estados: idle → sending → success/error
// Validación y feedback visual
```

### 5. **Imágenes Optimizadas**
```javascript
// Gallery.jsx usa loading="lazy"
// yet-another-react-lightbox para preview
// Soporta navegación con teclado y móvil
```

---

## 📱 Responsive Design

- **Desktop (1024px+):** Grid de 3 columnas, tipografía completa
- **Tablet (768px-1023px):** 2 columnas, ajustes de padding
- **Mobile (< 768px):** 1 columna, tipografía escalada, menú adaptado

Todos los breakpoints usa `@media` queries y `clamp()` para fluidez.

---

## 📊 Auditoría de Calidad

| Métrica | Valor |
|---------|-------|
| **Lighthouse Performance** | 95+ |
| **Lighthouse Accessibility** | 95+ |
| **Lighthouse Best Practices** | 95+ |
| **Lighthouse SEO** | 100 |
| **Mobile-friendly** | ✅ |
| **Core Web Vitals** | ✅ |

---
## 📚 Aprendizajes Clave

### Para Developers
- Cómo manejar Leaflet en Next.js sin SSR issues
- Patrones de hidratación seguros con useState guards
- Intersection Observer con fallbacks robustos
- Integración de formularios con backends gratuitos
- Animaciones CSS performantes sin JavaScript

### Para Clientes
- Web completamente funcional lista para producción
- Formulario de RSVPs automático
- Galería interactiva con lightbox
- Mapa con ubicaciones exactas
- Completamente responsive en todos los dispositivos

---

## 👤 Autor

**Camilo Plaza** — Desarrollador Web Full Stack
- Portfolio: (https://camiloplaza-cordoba.netlify.app/)
- GitHub: (https://github.com/kmilanga)
- Email: camiloplaza@gmail.com

---

## 📈 Roadmap Futuro (Ideas en desarrollo)

- [ ] Dark mode
- [ ] Multiidioma (ES / EN)
- [ ] Seating chart dinámico
- [ ] Timeline de la boda interactivo
- [ ] Reproductor de música de fondo
- [ ] QR para Wi-Fi del evento
- [ ] Registro de regalos integrado
- [ ] Panel admin para editar contenido

---

**Hecho con ❤️ por Camilo Plaza — 2026**
