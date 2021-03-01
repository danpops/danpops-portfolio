import React, { Component } from 'react'
import './assets/css/styles.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfoliio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
    render() {
    
        return (

            <div className="App">

                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Portfoliio></Portfoliio>
                <Contact></Contact>
                <Footer></Footer>

            </div>
        );
    }
}

export default App;
