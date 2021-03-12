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
                                    <img class="img-fluid" src="https://danpops.ca/images_folder/freshouse.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">freshouse.ca</div>
                                        <div class="project-name">javascript : adobe xd</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal2" class="portfolio-box" href="#modal2">
                                    <img class="img-fluid" src="https://danpops.ca/images_folder/tictactoe.jpg" alt="" />
                                    <div class="portfolio-box-caption p-3">
                                        <div class="project-category text-white-50 text-lowercase">TicTacToe iOS App</div>
                                        <div class="project-name">swift</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal3" class="portfolio-box" href="#modal3">
                                    <img class="img-fluid" src="https://danpops.ca/images_folder/calculator.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">Multiline Calculator</div>
                                        <div class="project-name">java</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal4" class="portfolio-box" href="#modal4">
                                    <img class="img-fluid" src="https://danpops.ca/images_folder/discogsdecisive.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">discogs decisive: vinyl generator</div>
                                        <div class="project-name">python</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal5" class="portfolio-box" href="#modal5">
                                    <img class="img-fluid" src="https://danpops.ca/images_folder/mymail.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">Email CLI</div>
                                        <div class="project-name">python</div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <a data-toggle="modal" data-target="#modal6" class="portfolio-box" href="#modal6">
                                    <img class="img-fluid" src="https://danpops.ca/images_folder/organize.jpg" alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50 text-lowercase">Downloads Organizer</div>
                                        <div class="project-name">python</div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center text-primary" id="modal1">freshouse.ca</h2>
                            </div>
                            <div class="modal-body">
                                <img src="https://danpops.ca/images_folder/freshouse.jpg" width="100%" />
                                <br /><br />
                                <h6>freshouse.ca web design / development</h6><br />
                                <span><i class="fab fa-js-square fa-3x mb-4 text-primary"></i>&nbsp;&nbsp;&nbsp;
                                    <i class="fab fa-shopify fa-3x mb-4 text-primary"></i>&nbsp;&nbsp;&nbsp;
                                    <i class="fab fa-css3-alt fa-3x mb-4 text-primary"></i>&nbsp;&nbsp;&nbsp;
                                    <i class="fas fa-pencil-ruler fa-3x mb-4 text-primary"></i></span>
                                <hr />
                                <p class="text-left"><strong>details: </strong><br />
                                <ul>
                                    <li>lead a project with web developers to redesign and develop a brand-new website for freshouse food and juice bar.
                                    </li>
                                    <li>implemented a sdlc for the project, developed various prototypes, tested user experience, designed all product
                                        images, and refined website’s backend prior to launch.</li>
                                    <li>results contributed to the increase in web traffic and customer satisfaction.</li>
                                </ul> 
                                </p>
                                <br />    
                                <a class="text-lowercase" href="https://www.freshouse.ca">view project</a>
                                <br /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="text-lowercase btn-light btn-xl" data-dismiss="modal">close popup</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center text-primary" id="modal2">tic tac toe ios</h2>
                            </div>
                            <div class="modal-body">
                                <img src="https://danpops.ca/images_folder/tictactoe.jpg" width="100%" />
                                <br /><br />
                                <h6>tic tac toe ios</h6><br />
                                <span><i class="fab fa-swift fa-3x mb-4 text-primary"></i></span>
                                <hr />
                                <p class="text-left"><strong>details: </strong><br />
                                tic tac toe is an ios application i developed using xcode to gain knowledge in swift.
                                </p>
                                <br />
                                <a class="text-lowercase" href="https://github.com/danpops/tictactoe-ios">view project</a>
                                <br /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="text-lowercase btn-light btn-xl" data-dismiss="modal">close popup</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="modal3" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center text-primary" id="modal3">multiline calculator</h2>
                            </div>
                            <div class="modal-body">
                                <img src="https://danpops.ca/images_folder/calculator.jpg" width="100%" />
                                <br /><br />
                                <h6>multiline calculator</h6><br />
                                <span><i class="fab fa-java fa-3x mb-4 text-primary"></i></span>
                                <hr />
                                <p class="text-left"><strong>details: </strong><br />
                                    java calculator application developed in one file.
                                </p>
                                <br />
                                <a class="text-lowercase" href="https://github.com/danpops/java-calculator">view project</a>
                                <br /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="text-lowercase btn-light btn-xl" data-dismiss="modal">close popup</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="modal4" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center text-primary" id="modal4">discogs decisive</h2>
                            </div>
                            <div class="modal-body">
                                <img src="https://danpops.ca/images_folder/discogsdecisive.jpg" width="100%" />
                                <br /><br />
                                <h6>discogs random vinyl generator</h6><br />
                                <span><i class="fab fa-python fa-3x mb-4 text-primary"></i></span>
                                <hr />
                                <p class="text-left"><strong>details: </strong><br />

                                <ul>
                                    <li>generate at random three albums from your discogs vinyl collection to help you decide what to listen to next! all you need to do is tell me what genre you are craving...
                                    </li>
                                    <li>as a record collector for 10 years now, i find myself being indecisive when choosing what to listen to next!
                                    </li>
                                    <li>luckily, python and discogs made it a little easier for us all
                                    </li>
                                </ul> 
                                </p>
                                <br />
                                <a class="text-lowercase" href="https://github.com/danpops/discogs-decisive">view project</a>
                                <br /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="text-lowercase btn-light btn-xl" data-dismiss="modal">close popup</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal5" tabindex="-1" role="dialog" aria-labelledby="modal5" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center text-primary" id="modal5">mymail cli</h2>
                            </div>
                            <div class="modal-body">
                                <img src="https://danpops.ca/images_folder/mymail.jpg" width="100%" />
                                <br /><br />
                                <h6>email cli script</h6><br />
                                <span><i class="fab fa-python fa-3x mb-4 text-primary"></i></span>
                                <hr />
                                <p class="text-left"><strong>details: </strong><br />
                                    cli for sending emails via python
                                </p>
                                <br />
                                <a class="text-lowercase" href="https://github.com/danpops/mymail-cli">view project</a>
                                <br /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="text-lowercase btn-light btn-xl" data-dismiss="modal">close popup</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modal6" tabindex="-1" role="dialog" aria-labelledby="modal6" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center text-primary" id="modal6">organize_files.py</h2>
                            </div>
                            <div class="modal-body">
                                <img src="https://danpops.ca/images_folder/organize.jpg" width="100%" />
                                <br /><br />
                                <h6>downloads organizer</h6><br />
                                <span><i class="fab fa-python fa-3x mb-4 text-primary"></i></span>
                                <hr />
                                <p class="text-left"><strong>details: </strong><br />
                                    this is a python script which will sort files in your downloads folder and place them in matching destination folder based on the extension.
                                </p>
                                <br />
                                <a class="text-lowercase" href="https://github.com/danpops/organize-files">view project</a>
                                <br /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="text-lowercase btn-light btn-xl" data-dismiss="modal">close popup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}