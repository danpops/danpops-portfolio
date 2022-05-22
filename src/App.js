import React from "react";
import "./assets/css/styles.css";

import { PortfolioContainer } from "./components/Layout";
import {
  Hero,
  About,
  Specialties,
  Projects,
  GitHub,
  Contact,
} from "./sections";

function App() {
  return (
    <PortfolioContainer>
      <Hero />
      <About />
      <Specialties />
      <Projects />
      <GitHub />
      <Contact />
    </PortfolioContainer>
  );
}

export default App;
