import React from "react";
import { MortgageCalculatorComponent } from "../components/calculator/MortgageCalculatorComponent";
import SEO from "../components/common/SEO";

export const MortgageCalculatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Calculadora de hipotecas"
        description="Simula tu cuota hipotecaria. Calcula la cuota mensual según capital, plazo e interés con la calculadora de Kapital House."
        keywords="calculadora hipotecaria, cuota mensual, simular hipoteca, préstamo hipotecario"
        url="/calculadora-hipotecas"
      />
      <div className="page">
        <MortgageCalculatorComponent />
      </div>
    </>
  );
};
