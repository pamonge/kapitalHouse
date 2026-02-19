import React from "react";
import { TalkToAssistanceContainer } from "../components/contact/TalkToAssistanceContainer";
import SEO from "../components/common/SEO";

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contacto"
        description="Contacta con Kapital House para creditos hipotecarios."
        keywords="formulario, contacto, email, correo, telefono, celular, dirección,"
        url="/contact"
      />
      <div className="page" >
        <TalkToAssistanceContainer />
      </div>
    </>
    
  )
}
