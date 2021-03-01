import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
      return (
            <div>
                <div id="portfolio">
                    <section className="page-section bg-dark text-white">
                        <div className="container text-center">
                            <h2 className="mb-4">check out my work on github!</h2>
                            <a className="btn btn-light btn-xl text-lowercase" href="https://github.com/danpops">github/danpops</a>
                        </div>
                    </section>
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="http://www.freshouse.ca">
                                    <a href="https://ibb.co/gjvSmJv"><img className="img-fluid" src="https://i.ibb.co/f18kqH8/1.png" alt="1" border="0" /></a>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">www.freshouse.ca</div>
                                        <div className="project-name">shopify : adobe xd : javascript</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="https://github.com/danpops/ChristmasSoda">
                                <a href="https://ibb.co/LSdGr62"><img className="img-fluid" src="https://i.ibb.co/31mJvWL/2.png" alt="2" border="0" /></a>

                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Christmas Soda University</div>
                                        <div className="project-name">java : servlets : jsp</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="https://github.com/danpops/PubMedSearch">
                                <a href="https://ibb.co/PYKC0ng"><img className="img-fluid" src="https://i.ibb.co/ZJ5T7Px/3.png" alt="3" border="0" /></a>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Pubmed Article Search</div>
                                        <div className="project-name">python : xml</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="https://drive.google.com/drive/folders/1aqYX-VDzVmgv7sOmwJJsmMwlZ9zjRwHq?usp=sharing">
                                <a href="https://ibb.co/PYKC0ng"><img className="img-fluid" src="https://i.ibb.co/ZJ5T7Px/3.png" alt="3" border="0" /></a>
                                <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">WardrobeU</div>
                                        <div className="project-name">ux design : prototyping : proto.io</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="https://github.com/danpops/Calculator">
                                <a href="https://ibb.co/c8yXRjY"><img className="img-fluid" src="https://i.ibb.co/7pSNBqk/5.png" alt="5" border="0" /></a>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Multiline Calculator</div>
                                        <div className="project-name">java</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="https://github.com/danpops/tictactoe-ios">
                                    <a href="https://ibb.co/nDkZb26"><img className="img-fluid" src="https://i.ibb.co/64sVmhr/6.png" alt="6" border="0" /></a>
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">TicTacToe App</div>
                                        <div className="project-name">swift : xcode : ios</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}