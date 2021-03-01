import React, { Component } from 'react'
import './App.css'

class App extends Component {
    render() {
    
        return (
            <div className="App">
                
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">daniel popovic</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">about</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">skills</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">projects</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-white font-weight-bold">hello,</h1>
                        <h2 class="text-white font-weight-bold">i'm daniel popovic!</h2>
                        <hr class="divider my-4" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <a href="" class="typewrite text-white-75 font-weight-light mb-5" data-period="2000" data-type='[ "software engineer.", "ux designer.", "student.", "innovator." ]'>
                            <span class="wrap"></span>
                          </a><br /><br />
                        <a class="btn btn-primary btn-xl js-scroll-trigger text-lowercase" href="#about">who am i?</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="page-section bg-primary" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">who am i?</h2>
                        <hr class="divider light my-4" />
                        <p class="text-white-50 mb-4 font-weight-bold">i am completing my final year as an information technology undergraduate student at york university. i am an expeditious learner who is seeking a position focused on software engineering or ux design with a progressive and reputable organization. my proficient communication and conflict resolution skills, along with experience in a variety of programming languages that include java, python, and javascript, provide me with the ability to deliver innovative ideas that assist the technological development of the organization.</p>
                        <a class="btn btn-light btn-xl js-scroll-trigger text-lowercase" href="https://github.com/danpops/danpops.github.io/raw/main/Popovic_Resume.pdf" target="_blank">resume.pdf</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">what are my skills?</h2>
                <hr class="divider my-4" />
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 class="h4 mb-2">knowledgeable</h3>
                            <p class="text-muted mb-0">project management, solid understanding of programming fundamentals, usability testing</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 class="h4 mb-2">programming</h3>
                            <p class="text-muted mb-0">java, javascript, swift, python, oracle, sql, reactjs, jsp, unix</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 class="h4 mb-2">team leader</h3>
                            <p class="text-muted mb-0">leadership, problem-solving, communication, motivation</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 class="h4 mb-2">work ethic</h3>
                            <p class="text-muted mb-0">rapid learner, thorough, analytical, entrepreneurial attitude</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="portfolio">
        <section class="page-section bg-dark text-white">
            <div class="container text-center">
                <h2 class="mb-4">check out my work on github!</h2>
                <a class="btn btn-light btn-xl text-lowercase" href="https://github.com/danpops">github/danpops</a>
            </div>
        </section>
            <div class="container-fluid p-0">
                <div class="row no-gutters">
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="http://www.freshouse.ca">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">www.freshouse.ca</div>
                                <div class="project-name">shopify : adobe xd : javascript</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="https://github.com/danpops/ChristmasSoda">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Christmas Soda University</div>
                                <div class="project-name">java : servlets : jsp</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="https://github.com/danpops/PubMedSearch">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Pubmed Article Search</div>
                                <div class="project-name">python : xml</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="https://drive.google.com/drive/folders/1aqYX-VDzVmgv7sOmwJJsmMwlZ9zjRwHq?usp=sharing">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">WardrobeU</div>
                                <div class="project-name">ux design : prototyping : proto.io</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="https://github.com/danpops/Calculator">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Multiline Calculator</div>
                                <div class="project-name">java</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="https://github.com/danpops/tictactoe-ios">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50">TicTacToe App</div>
                                <div class="project-name">swift : xcode : ios</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">let's get in touch!</h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">i am eager to begin my journey as a software engineer!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fab fa-linkedin-in fa-3x mb-3 text-muted"></i>
                        <div><a href="https://www.linkedin.com/in/danpops">linkedin/danpops</a></div>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a class="d-block" href="mailto:dan-popovic@hotmail.com">dan-popovic@hotmail.com</a>
                    </div>
                </div>
            </div>
        </section>
        <footer class="bg-light py-5">
            <div class="container"><div class="small text-center text-muted">© 2020 - danpops.github.io</div></div>
        </footer>

            </div>
        );
    }
}

export default App;
