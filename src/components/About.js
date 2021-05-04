import React, { Component } from 'react'
import resume from '../assets/Popovic_Resume.pdf'

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
                                <p className="text-white-50 mb-4 font-weight-bold">i am an expeditious learner who is seeking a position focused on software engineering or ux design with a progressive and reputable organization. my proficient communication and conflict resolution skills, along with experience in a variety of programming languages that include python, javascript, and java, provide me with the ability to deliver innovative ideas that assist the technological development of the organization.</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger text-lowercase" href={resume}>resume.pdf</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
