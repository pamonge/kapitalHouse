import React from "react";
import { HeroComponent } from "../components/homecomponents/HeroComponent";
import { HomeContainerComponet } from "../components/homecomponents/HomeContainerComponet";

export const HomePage: React.FC = () => {
  return (
    <div>
        <HeroComponent />
        <div className="page">
          <HomeContainerComponet />
        </div>
    </div>
  )
}
