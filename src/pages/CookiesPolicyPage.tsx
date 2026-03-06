import React from 'react'
import SEO from '../components/common/SEO'
import { Link } from 'react-router-dom'

export const CookiesPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Política de Cookies"
        description="Información sobre el uso de cookies en el sitio web de Kapital House."
        url="/cookies"
        noindex
      />
      <article className="flex flex-col gap-5 p-6 md:p-10 max-w-[900px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-kapital-blue">Política de Cookies</h1>

        <p>
          En cumplimiento del artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), y en consonancia con el Reglamento (UE) 2016/679 (RGPD), <strong>Kapital House</strong> informa que el sitio web <strong>www.kapitalhouse.es</strong> utiliza cookies propias y, en su caso, de terceros, para mejorar la navegación y la experiencia del usuario.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. ¿Qué es una cookie?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que se descarga en el dispositivo del usuario al acceder a una página web. Permite almacenar y recuperar información sobre la navegación que se realiza desde dicho dispositivo. Las cookies no identifican a la persona de forma directa, aunque pueden asociarse a datos identificables.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Tipos de cookies</h2>

        <h3 className="text-lg font-medium mt-3">Según la entidad que las gestiona</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Cookies propias:</strong> Son enviadas al dispositivo del usuario desde un equipo o dominio gestionado por Kapital House.</li>
          <li><strong>Cookies de terceros:</strong> Son enviadas desde un equipo o dominio gestionado por otra entidad que trata los datos obtenidos (por ejemplo, servicios de analítica web).</li>
        </ul>

        <h3 className="text-lg font-medium mt-3">Según el tiempo de permanencia</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Cookies de sesión:</strong> Permanecen durante la visita a la web y se eliminan al cerrar el navegador.</li>
          <li><strong>Cookies persistentes:</strong> Se almacenan durante un plazo determinado y se leen cada vez que el usuario visita la página.</li>
        </ul>

        <h3 className="text-lg font-medium mt-3">Según su finalidad</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Cookies técnicas:</strong> Permiten la navegación y el uso de las distintas opciones o servicios del sitio (por ejemplo, recordar el idioma). Son necesarias para el correcto funcionamiento.</li>
          <li><strong>Cookies de personalización:</strong> Permiten acceder al servicio con determinadas características predefinidas (idioma, tipo de navegador, etc.).</li>
          <li><strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar el análisis estadístico del uso del sitio web.</li>
          <li><strong>Cookies publicitarias:</strong> Permiten la gestión de los espacios publicitarios incluidos en la web, si los hubiere.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Cookies utilizadas en este sitio</h2>
        <p>
          Este sitio web puede utilizar cookies técnicas necesarias para el funcionamiento de la página y, en su caso, cookies de análisis para conocer el uso que se hace del mismo. La información recabada se utiliza con fines estadísticos y de mejora del servicio. En caso de incorporarse cookies de terceros, se informará en esta misma política.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Consentimiento y gestión</h2>
        <p>
          Al acceder al Sitio Web por primera vez, el usuario podrá aceptar o rechazar las cookies no esenciales mediante el mecanismo de información dispuesto al efecto. Las cookies técnicas necesarias para el funcionamiento no requieren consentimiento previo.
        </p>
        <p>
          El usuario puede configurar su navegador para bloquear o eliminar cookies. Cada navegador dispone de instrucciones específicas para ello. A título informativo:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-kapital-lightbue hover:underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-kapital-lightbue hover:underline">Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-kapital-lightbue hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-kapital-lightbue hover:underline">Edge</a></li>
        </ul>
        <p>
          La desactivación de ciertas cookies puede afectar al correcto funcionamiento de algunas funcionalidades del sitio.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Más información</h2>
        <p>
          Para conocer el tratamiento de sus datos personales, consulte nuestra <Link to="/privacypolicy" className="text-kapital-lightbue hover:underline">Política de Privacidad</Link>. Para las condiciones generales de uso del sitio, consulte nuestro <Link to="/legal" className="text-kapital-lightbue hover:underline">Aviso Legal</Link>.
        </p>
        <p>
          Ante cualquier duda sobre el uso de cookies, puede contactar en info@kapitalhouse.es.
        </p>

        <p className="text-sm text-gray-600 mt-8">
          <strong>Última actualización:</strong> Marzo de 2025
        </p>
      </article>
    </>
  )
}
