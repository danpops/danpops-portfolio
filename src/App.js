import React from "react";
import "./assets/css/styles.css";

import {
  About,
  Contact,
  Footer,
  GitHubLink,
  Hero,
  Navigation,
  // Projects,
  Specialties,
} from "./components/Index";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Specialties />
      <GitHubLink />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
