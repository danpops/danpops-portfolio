import React, { Component } from 'react'

export default class Header extends Component {
    
  render() {
      return (
            <div>
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

                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-white font-weight-bold">hello,</h1>
                                <h2 className="text-white font-weight-bold">i'm daniel popovic!</h2>
                                <hr className="divider my-4" />
                            </div>
                            
                            <div className="col-lg-8 align-self-baseline">
                                <a className="btn btn-primary btn-xl js-scroll-trigger text-lowercase" href="#about">who am i?</a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )   
    }
}
