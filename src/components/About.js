import React, { Component } from 'react'

export default class About extends Component {
  render() {
      return (
            <div>
                <section className="page-section bg-primary" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">who am i?</h2>
                                <hr className="divider light my-4" />
                                <p className="text-white-50 mb-4 font-weight-bold">i am completing my final year as an information technology undergraduate student at york university. i am an expeditious learner who is seeking a position focused on software engineering or ux design with a progressive and reputable organization. my proficient communication and conflict resolution skills, along with experience in a variety of programming languages that include java, python, and javascript, provide me with the ability to deliver innovative ideas that assist the technological development of the organization.</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger text-lowercase" href="https://github.com/danpops/danpops.github.io/raw/main/Popovic_Resume.pdf">resume.pdf</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }   
}