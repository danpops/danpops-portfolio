import React, { Component } from 'react'
export default class Skills extends Component {
  render() {
      return (
            <div>
                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">what are my skills?</h2>
                        <hr className="divider my-4" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">knowledgeable</h3>
                                    <p className="text-muted mb-0">project management, solid understanding of programming fundamentals, usability testing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">programming</h3>
                                    <p className="text-muted mb-0">java, javascript, swift, python, oracle, sql, reactjs, jsp, unix</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">team leader</h3>
                                    <p className="text-muted mb-0">leadership, problem-solving, communication, motivation</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">work ethic</h3>
                                    <p className="text-muted mb-0">rapid learner, thorough, analytical, entrepreneurial attitude</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }   
}