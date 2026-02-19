import React from "react";
import { MortgageContainerComponent } from "../components/mortgage/MortgageContainerComponent";
import SEO from "../components/common/SEO";

export const MortgagePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hipoteca"
        description="Kapital House, alternativas hipotecarias que mejor se ajustan a tus necesidades."
        keywords="credito, hipoteca, compra, vivienda"
        url="/mortgage"
      />
      <div className="page" >
        <MortgageContainerComponent />
      </div>    
    </>

  )
}
