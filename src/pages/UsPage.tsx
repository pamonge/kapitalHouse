import React from "react";
import { UsContainerComponent } from "../components/us/UsContainerComponent";
import SEO from "../components/common/SEO";

export const UsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nostros"
        description="Kapital House, alternativas hipotecarias que mejor se ajustan a tus necesidades."
        keywords="credito, hipoteca, compra, vivienda"
        url="/mortgage"
      />
      <div className="page" >
        <UsContainerComponent />
      </div>
    </>

  )
}
