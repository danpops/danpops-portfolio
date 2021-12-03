import React from "react";
import "./assets/css/styles.css";

import {
  About,
  Contact,
  Footer,
  GitHubLink,
  Header,
  Navigation,
  Projects,
  Specialties,
} from "./components/Index";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Specialties />
      <GitHubLink />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
