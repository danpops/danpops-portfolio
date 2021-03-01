import React, { Component } from 'react';
import './App.css';
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
                
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">daniel popovic</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">about</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">skills</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">projects</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

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
