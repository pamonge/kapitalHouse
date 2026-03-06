import React from 'react'
import SEO from '../components/common/SEO'
import { Link } from 'react-router-dom'

export const LegalAdvertisingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Aviso Legal"
        description="Aviso legal y condiciones de uso del sitio web de Kapital House."
        url="/legal"
        noindex
      />
      <article className="flex flex-col gap-5 p-6 md:p-10 max-w-[900px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-kapital-blue">Aviso Legal</h1>

        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos identificativos:
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Titular del sitio web</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Denominación:</strong> Kapital House</li>
          <li><strong>Domicilio:</strong> Av. Juan Carlos I, 2, 30008 Murcia, España</li>
          <li><strong>Teléfono:</strong> +34 631 20 37 21</li>
          <li><strong>Correo electrónico:</strong> info@kapitalhouse.es</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">2. Objeto y condiciones de uso</h2>
        <p>
          El presente aviso legal regula el uso del sitio web <strong>www.kapitalhouse.es</strong> (en adelante, el Sitio Web), del que es titular Kapital House. La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena de todas y cada una de las disposiciones incluidas en este Aviso Legal.
        </p>
        <p>
          El Sitio Web tiene por objeto facilitar a los usuarios información sobre los servicios de asesoramiento hipotecario y financiación que ofrece Kapital House, así como permitir el contacto con la empresa a través de los formularios habilitados.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Propiedad intelectual e industrial</h2>
        <p>
          Kapital House es titular de los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos que lo integran (textos, imágenes, diseños, logotipos, estructura, etc.). Queda prohibida la reproducción, distribución, comunicación pública o transformación total o parcial de dichos contenidos sin autorización previa y por escrito del titular.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Exclusión de responsabilidad</h2>
        <p>
          Kapital House no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la utilización de los contenidos del Sitio Web, ni de la disponibilidad técnica o de posibles errores de acceso. La información ofrecida tiene carácter meramente orientativo y no constituye asesoramiento jurídico, financiero ni fiscal. Para decisiones concretas se recomienda consultar con profesionales cualificados.
        </p>
        <p>
          El Sitio Web puede contener enlaces a sitios de terceros. Kapital House no asume responsabilidad por el contenido o el funcionamiento de dichos sitios externos.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Legislación aplicable y jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española vigente. Para la resolución de cuantos conflictos o litigios pudieran surgir en relación con el Sitio Web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario consumidor.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Enlaces de interés</h2>
        <p>
          Para más información sobre el tratamiento de sus datos personales y sobre el uso de cookies en este sitio, puede consultar:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link to="/privacypolicy" className="text-kapital-lightbue hover:underline">Política de Privacidad</Link></li>
          <li><Link to="/cookies" className="text-kapital-lightbue hover:underline">Política de Cookies</Link></li>
        </ul>

        <p className="text-sm text-gray-600 mt-8">
          <strong>Última actualización:</strong> Marzo de 2025
        </p>
      </article>
    </>
  )
}
