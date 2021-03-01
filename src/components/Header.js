import React, { Component } from 'react'

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
                                <a href="" className="typewrite text-white-75 font-weight-light mb-5" data-period="2000" data-type='[ "software engineer.", "ux designer.", "student.", "innovator." ]'>
                                    <span className="wrap"></span>
                                </a><br /><br />
                                <a className="btn btn-primary btn-xl js-scroll-trigger text-lowercase" href="#about">who am i?</a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )   
    }
}
