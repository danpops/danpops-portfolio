import React, { Component } from 'react'
import Script from 'react-load-script'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends Component {
    render() {
        return (

            <div>
                
                <Script url="../js/scripts.js"
                        onCreate={this.handleScriptCreate.bind(this)}
                        onError={this.handleScriptError.bind(this)}
                        onLoad={this.handleScriptLoad.bind(this)}/>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    
                    <div className="container">

                        <Link to="page-top" smooth={true} duration={500}>
                            <a className="navbar-brand js-scroll-trigger" href="#page-top">daniel popovic_</a>
                        </Link>

                        <button className="navbar-toggler navbar-toggler-right" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarResponsive" 
                                aria-controls="navbarResponsive" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                
                                <Link to="about" smooth={true} duration={500}>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">about</a></li>
                                </Link>

                                <Link to="services" smooth={true} duration={500}>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">skills</a></li>
                                </Link>

                                <Link to="portfolio" smooth={true} duration= {500}>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">projects</a></li>
                                </Link>

                                <Link to="contact" smooth={true} duration={500}>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">contact</a></li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }
      
    handleScriptError() {
        this.setState({ scriptError: true })
    }
      
    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }
}