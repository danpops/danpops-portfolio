import React, { Component } from 'react'
export default class Skills extends Component {
  render() {
      return (
            <div>
                <section class="page-section" id="services">
                    <div class="container">
                        <h2 class="text-center mt-0">what are my skills?</h2>
                        <hr class="divider my-4" />
                        <div class="row">
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="mt-5">
                                    <i class="fas fa-4x fa-user-graduate text-primary mb-4"></i>
                                    <h3 class="h4 mb-2">knowledgeable</h3>
                                    <p class="text-muted mb-0">project management, solid understanding of programming fundamentals, usability testing</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="mt-5">
                                    <i class="fas fa-4x fa-terminal text-primary mb-4"></i>
                                    <h3 class="h4 mb-2">programming</h3>
                                    <p class="text-muted mb-0">java, javascript, swift, python, oracle, sql, reactjs, jsp, unix</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="mt-5">
                                    <i class="fas fa-4x fa-users text-primary mb-4"></i>
                                    <h3 class="h4 mb-2">team leader</h3>
                                    <p class="text-muted mb-0">leadership, problem-solving, communication, motivation</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="mt-5">
                                    <i class="fas fa-4x fa-briefcase text-primary mb-4"></i>
                                    <h3 class="h4 mb-2">work ethic</h3>
                                    <p class="text-muted mb-0">rapid learner, thorough, analytical, entrepreneurial attitude</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }   
}