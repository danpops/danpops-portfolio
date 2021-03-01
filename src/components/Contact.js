import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
      return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0">let's get in touch!</h2>
                                <hr className="divider my-4" />
                                <p className="text-muted mb-5">i am eager to begin my journey as a software engineer!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                <i className="fab fa-linkedin-in fa-3x mb-3 text-muted"></i>
                                <div><a href="https://www.linkedin.com/in/danpops">linkedin/danpops</a></div>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a className="d-block" href="mailto:dan-popovic@hotmail.com">dan-popovic@hotmail.com</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }   
}