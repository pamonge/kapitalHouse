# Bitácora del Proyecto – Kapital House

> **Última actualización:** 2 de marzo de 2025  
> Este documento debe mantenerse actualizado con cada avance, cambio o decisión relevante del proyecto.

---

## 1. Descripción del proyecto

### Propósito
Sitio web corporativo para **Kapital House**, empresa dedicada a servicios hipotecarios y de crédito para vivienda en España. El proyecto busca presentar la oferta de servicios, generar leads mediante un formulario de contacto y cumplir con requisitos legales (políticas de privacidad, aviso legal, cookies).

### Alcance
- Landing page informativa con secciones de servicios y proceso hipotecario.
- Páginas estáticas: Inicio, Nosotros, Hipotecas, Contacto.
- Páginas legales: Política de Privacidad, Aviso Legal, Política de Cookies.
- Formulario de contacto con validación e integración EmailJS.
- SEO básico (meta tags, Open Graph, Twitter Cards).
- Diseño responsive con Tailwind CSS.

### Objetivo general
Ofrecer una presencia web profesional, optimizada para SEO y conversión, que permita a los usuarios conocer los servicios de Kapital House y solicitar información de forma sencilla.

---

## 2. Estado actual

### Implementado
- [x] **robots.txt y sitemap.xml:** Archivos SEO en `public/` para indexación por buscadores
- [x] **Formulario de contacto con solapas:** Particulares y Empresas (misma lógica EmailJS, mismos campos)
- [x] **Formulario particulares con tipo de consulta:** Desplegable con opciones; modal Sí/No para simulador
- [x] **Simulador de crédito:** Página `/cred-simulator` con campos completos y envío de datos por correo
- [x] **Estructura base:** React 18 + TypeScript + Vite
- [x] **Estilos:** Tailwind CSS v4 con tema personalizado (paleta Kapital House)
- [x] **Enrutado:** React Router DOM v7 con rutas principales
- [x] **Páginas:**
  - `/` – Inicio (Hero, servicios, proceso, “hazlo posible”)
  - `/us` – Nosotros
  - `/mortgage` – Hipotecas (proceso, servicios)
  - `/cred-simulator` – Simulador de crédito (tipo vivienda, capital, plazo, etc.)
  - `/contact` – Contacto con formulario (solapas Particulares / Empresas)
  - `/privacypolicy` – Política de Privacidad
  - `/legal` – Aviso Legal
  - `/cookies` – Política de Cookies
- [x] **Componentes:**
  - Simulador de crédito (`CreditSimulatorComponent`)
  - Contacto con solapas (`ContactTabsContainer`, `FormComponent` con variant, `SimulatorModal`)
  - Navegación (NavBar, LinkComponent)
  - Hero, textos rotativos, tarjetas (WhiteCard, LongCard, CardContainer)
  - Banners (BlueBanner)
  - Formulario de contacto con validación
  - Footer, Copyright
  - SEO (react-helmet)
- [x] **Formulario:** Validación, envío vía EmailJS, estados de carga/éxito/error
- [x] **SEO:** Componente SEO con meta tags, OG, Twitter, canonical, locale
- [x] **Páginas legales:** Aviso Legal, Política de Privacidad y Política de Cookies con textos adaptados a la legislación española (LSSI, RGPD, LOPDGDD), enlaces cruzados y componente SEO (noindex)
- [x] **Datos:** `grlData.ts` con contenido para proceso hipotecario y servicios

### En progreso
- Ninguno registrado actualmente.

### Pendiente por implementar
- [ ] Mover credenciales de EmailJS a variables de entorno
- [ ] Revisar y corregir typos en el código (ver apartado Lecciones aprendidas)
- [ ] Verificar que el template de EmailJS coincida con los campos del formulario

### Obstáculos o dependencias relevantes
- **EmailJS:** Servicio externo; requiere configurar template con claves `{{name}}`, `{{email}}`, `{{title}}` (teléfono), `{{message}}`
- **Dominio:** URL base definida como `https://kapitalhouse.es`

---

## 3. Lecciones aprendidas

### Errores encontrados y soluciones aplicadas
| Problema | Solución |
|----------|----------|
| Uso de `title` para teléfono en FormData (poco intuitivo) | Se mantiene por compatibilidad con EmailJS; documentar en código que `title` = teléfono |
| Credenciales de EmailJS en código fuente | Pendiente: mover a `VITE_EMAILJS_*` en `.env` |

### Buenas prácticas identificadas
- Uso de `useCallback` en el formulario para optimizar renders
- Validación en tiempo real (blur) y al enviar
- Accesibilidad: `aria-invalid`, `aria-describedby`, `id` para mensajes de error
- Interfaz `FormErrors` alineada con `FormData`
- Componente SEO reutilizable con valores por defecto

### Errores que no deben repetirse
- **Typo en CSS:** `'Poppins-Regular';` tiene doble punto y coma en `index.css`
- **Typo en componente:** `HomeContainerComponet` debería ser `HomeContainerComponent`
- No dejar credenciales sensibles en el repositorio

---

## 4. Pendientes y próximos pasos

| Prioridad | Tarea | Contexto |
|-----------|-------|----------|
| Media | Variables de entorno para EmailJS | Seguridad y portabilidad |
| Media | Corregir typos (componente, CSS) | Mantenibilidad |
| Baja | Revisar/mejorar README.md | Actualmente usa contenido genérico de Vite |
| Baja | Añadir tests unitarios o E2E | Si el proyecto crece |

---

## 5. Notas adicionales

### Stack técnico
- **Frontend:** React 18, TypeScript, Vite 7
- **Estilos:** Tailwind CSS v4, tema con `@theme`
- **Enrutado:** React Router DOM v7
- **SEO:** react-helmet
- **Formularios:** @emailjs/browser
- **Animaciones:** react-animate-components-ts

### Estructura de carpetas relevante
```
public/
├── robots.txt        # Directivas para buscadores
└── sitemap.xml       # Mapa del sitio (URLs indexables)

src/
├── components/
│   ├── common/       # SEO
│   ├── contact/      # Formulario, TalkToAssistance, SimulatorModal
│   ├── footer/       # Footer, Copyright
│   ├── general/      # Cards, Banners, Description
│   ├── homecomponents/
│   ├── mortgage/
│   ├── navigation/
│   ├── simulator/    # CreditSimulatorComponent
│   └── us/
├── data/             # grlData.ts
├── pages/            # Una por ruta
├── styles/           # Estilos específicos
└── types/            # grlInterfaces.ts

docs/
└── project-log.md    # Bitácora del proyecto
```

### SEO: robots.txt y sitemap.xml
- **robots.txt** (`public/robots.txt`): Permite a todos los crawlers (`User-agent: *`, `Allow: /`). Indica la ubicación del sitemap.
- **sitemap.xml** (`public/sitemap.xml`): Lista todas las URL públicas con prioridad y frecuencia de cambio.
- Ambos se sirven en la raíz del dominio tras el build (`https://kapitalhouse.es/robots.txt`, `https://kapitalhouse.es/sitemap.xml`).

### Cómo retomar el desarrollo
1. `npm install` para dependencias
2. `npm run dev` para entorno de desarrollo
3. Revisar `docs/project-log.md` y sección de pendientes
4. Comprobar que EmailJS esté configurado correctamente si se trabaja en contacto

---

*Documento creado como bitácora del proyecto. Actualizar en cada iteración relevante.*
