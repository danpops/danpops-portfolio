import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {

  render() {
      return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-white font-weight-bold">hello,</h1>
                                <h2 className="text-white font-weight-bold">i'm daniel popovic!</h2>
                                <hr className="divider my-4" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <h5 className="typewrite text-white-75 font-weight-light mb-5">
                                    <Typewriter
                                        options={{
                                            strings: ['software engineer.', 'i speak python and java.', 'i also speak javascript.'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h5>

                                <Link to="about" smooth={true} duration={500}>
                                    <a className="btn btn-primary btn-xl js-scroll-trigger text-lowercase" href="#about">who am i?</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
