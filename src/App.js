import React from "react";
import "./assets/css/styles.css";

import {
  About,
  Contact,
  Footer,
  GitHubLink,
  Header,
  Navigation,
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
