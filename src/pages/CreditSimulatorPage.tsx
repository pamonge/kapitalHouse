import React from "react";
import { CreditSimulatorComponent } from "../components/simulator/CreditSimulatorComponent";
import SEO from "../components/common/SEO";

export const CreditSimulatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Simulador de crédito"
        description="Simula tu préstamo hipotecario. Calcula cuánto podrías obtener y qué necesitas para tu adquisición."
        keywords="simulador crédito, préstamo hipotecario, financiación vivienda"
        url="/cred-simulator"
      />
      <div className="page">
        <CreditSimulatorComponent />
      </div>
    </>
  );
};
