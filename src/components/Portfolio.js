import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
      return (
            <div>
                <div id="portfolio">
                    <section class="page-section bg-dark text-white">
                        <div class="container text-center">
                            <i class="fab fa-6x fa-github text-white mb-4"></i>
                            <h2 class="mb-4">check out my work on github!</h2>
                            <a class="btn btn-light btn-xl text-lowercase" href="https://github.com/danpops">github/danpops</a>
                        </div>
                    </section>
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal1" class="portfolio-box" href="modal1">
                                    <img class="img-fluid" src="" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">freshouse.ca</div>
                                        <div class="project-name">javascript : adobe xd</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal2" class="portfolio-box" href="#modal2">
                                    <img class="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                                    <div class="portfolio-box-caption p-3">
                                        <div class="project-category text-white-50 text-lowercase">TicTacToe iOS App</div>
                                        <div class="project-name">swift</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal3" class="portfolio-box" href="#modal3">
                                    <img class="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">Multiline Calculator</div>
                                        <div class="project-name">java</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal4" class="portfolio-box" href="#modal4">
                                    <img class="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">discogs decisive: vinyl generator</div>
                                        <div class="project-name">python</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal5" class="portfolio-box" href="#modal5">
                                    <img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">Email CLI</div>
                                        <div class="project-name">python</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal6" class="portfolio-box" href="#modal6">
                                    <img class="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">Downloads Organizer</div>
                                        <div class="project-name">python</div>
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