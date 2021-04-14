import React, { Component } from 'react'
import './assets/css/styles.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
    render() {
    
        return (

            <div className="App">
                
                <Navigation></Navigation>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Footer></Footer>

            </div>
        );
    }
}

export default App;
