import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

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
                            <img class="img-fluid" img="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50">TicTacToe App</div>
                                <div class="project-name">swift : xcode : ios</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
