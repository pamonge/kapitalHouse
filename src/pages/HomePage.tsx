import React from "react";
import { HeroComponent } from "../components/homecomponents/HeroComponent";
import { HomeContainerComponet } from "../components/homecomponents/HomeContainerComponet";
import SEO from "../components/common/SEO";

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Inicio"
        url="/"
      />
      <div>
          <HeroComponent />
          <div className="page">
            <HomeContainerComponet />
          </div>
      </div>
    </>

  )
}
