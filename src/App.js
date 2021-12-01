import React from "react";
import "./assets/css/styles.css";

import {
  About,
  Contact,
  Footer,
  GithubLink,
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
      <GithubLink />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
