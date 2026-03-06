import React from 'react'
import SEO from '../components/common/SEO'
import { Link } from 'react-router-dom'

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de Kapital House."
        url="/privacypolicy"
        noindex
      />
      <article className="flex flex-col gap-5 p-6 md:p-10 max-w-[900px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-kapital-blue">Política de Privacidad</h1>

        <p>
          <strong>Kapital House</strong> (en adelante, el Responsable) pone en conocimiento de los usuarios del sitio web <strong>www.kapitalhouse.es</strong> (en adelante, el Sitio Web) la presente Política de Privacidad, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
        <p>
          Al facilitar sus datos personales a través de los formularios del Sitio Web, el usuario consiente expresamente su tratamiento en los términos indicados en esta política.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Responsable del tratamiento</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Denominación:</strong> Kapital House</li>
          <li><strong>Domicilio:</strong> Av. Juan Carlos I, 2, 30008 Murcia, España</li>
          <li><strong>Teléfono:</strong> +34 631 20 37 21</li>
          <li><strong>Correo electrónico:</strong> info@kapitalhouse.es</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">2. Finalidades del tratamiento</h2>
        <p>
          Los datos personales facilitados serán tratados con las siguientes finalidades:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gestionar las solicitudes de información recibidas a través del formulario de contacto.</li>
          <li>Prestar asesoramiento en materia de financiación hipotecaria y préstamos, según la solicitud del usuario.</li>
          <li>Enviar comunicaciones comerciales, únicamente cuando el usuario haya prestado su consentimiento expreso.</li>
          <li>Mantener la relación derivada de los servicios contratados, en su caso.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Legitimación</h2>
        <p>
          La base legal del tratamiento es el consentimiento del interesado, la ejecución de medidas precontractuales o la ejecución de un contrato, según la finalidad de cada tratamiento. Los campos marcados con asterisco (*) en los formularios son obligatorios; de no cumplimentarlos, no será posible atender la solicitud.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Conservación de datos</h2>
        <p>
          Los datos de contacto se conservarán mientras sea necesario para atender las consultas realizadas y durante los plazos legalmente exigibles. Los datos asociados a servicios contratados se conservarán durante la vigencia de la relación y los años necesarios para el cumplimiento de obligaciones legales.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Destinatarios y transferencias</h2>
        <p>
          No se prevén cesiones de datos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio solicitado (por ejemplo, a entidades financieras en el marco de operaciones de intermediación hipotecaria). En caso de utilizarse servicios de correo electrónico u otras herramientas que impliquen transferencias internacionales, se adoptarán las garantías adecuadas previstas en la normativa.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Derechos del interesado</h2>
        <p>
          Cualquier persona tiene derecho a obtener confirmación sobre si se están tratando datos que le conciernen. Asimismo, tiene derecho a:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Acceso:</strong> conocer qué datos se tratan.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación cuando ya no sean necesarios.</li>
          <li><strong>Limitación:</strong> solicitar la limitación del tratamiento en determinados supuestos.</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento en determinadas circunstancias.</li>
          <li><strong>Portabilidad:</strong> recibir los datos en formato estructurado, cuando proceda.</li>
        </ul>
        <p>
          Para ejercer estos derechos, puede dirigirse por escrito al domicilio indicado o al correo electrónico info@kapitalhouse.es. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-kapital-lightbue hover:underline">www.aepd.es</a>.
        </p>

        <h2 className="text-xl font-semibold mt-4">7. Seguridad</h2>
        <p>
          Se adoptan las medidas técnicas y organizativas adecuadas para garantizar la seguridad e integridad de los datos personales y evitar su alteración, pérdida o acceso no autorizado, de acuerdo con el estado de la técnica y la naturaleza de los datos.
        </p>

        <h2 className="text-xl font-semibold mt-4">8. Cookies</h2>
        <p>
          El Sitio Web utiliza cookies conforme a lo descrito en nuestra <Link to="/cookies" className="text-kapital-lightbue hover:underline">Política de Cookies</Link>. Se recomienda su lectura para conocer el tratamiento de los datos obtenidos mediante estos dispositivos.
        </p>

        <h2 className="text-xl font-semibold mt-4">9. Modificaciones</h2>
        <p>
          Kapital House se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o de la actividad. Se recomienda su revisión periódica. La versión vigente es la publicada en el Sitio Web.
        </p>

        <p>
          Para más información sobre las condiciones de uso del Sitio Web, consulte nuestro <Link to="/legal" className="text-kapital-lightbue hover:underline">Aviso Legal</Link>.
        </p>

        <p className="text-sm text-gray-600 mt-8">
          <strong>Última actualización:</strong> Marzo de 2025
        </p>
      </article>
    </>
  )
}
