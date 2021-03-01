import React from 'react';
import './App.css';

function App() {
    
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">daniel popovic</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">about</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">projects</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">contact</a></li>
                  </ul>
                </div>
        </div>
      </nav>

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
        
        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">© 2021 - danpops.github.io</div></div>
        </footer>
    </div>
  );
}

export default App;
