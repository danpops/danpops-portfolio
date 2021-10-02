import React from 'react'
import './assets/css/styles.css'

import {
  Navigation,
  Header,
  About,
  Skills,
  Portfolio,
  GithubLink,
  Contact,
  Footer,
} from './components/Index'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <GithubLink />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
