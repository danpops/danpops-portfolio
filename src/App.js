import React from "react";
import "./assets/css/styles.css";

import { PortfolioContainer } from "./components/Layout";
import { Hero, About, Specialties, GitHub, Contact } from "./sections";

function App() {
  return (
    <PortfolioContainer>
      <Hero />
      <About />
      <Specialties />
      <GitHub />
      <Contact />
    </PortfolioContainer>
  );
}

export default App;
