import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import useSound from 'use-sound';
import talonsSfx from '../assets/audio/largetalons.mp3';


export default class Skills extends Component {
    render() {

        const TalonsEasterEgg = () => {
            const [play] = useSound(talonsSfx);
            return <h3 onClick={play} className="h4 mb-2">work ethic</h3>;
        };

        return (
            <div>
                <section className="page-section" id="services">
                    <div className="container">
                        <Zoom bottom>
                            <h2 className="text-center mt-0">what are my skills?</h2>
                        </Zoom>
                        <hr className="divider my-4" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <Zoom left>
                                    <div className="mt-5">
                                        <i className="fas fa-4x fa-user-graduate text-primary mb-4"></i>
                                        <h3 className="h4 mb-2">knowledgeable</h3>
                                        <p className="text-muted mb-0">project management, solid understanding of programming fundamentals, usability testing</p>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <Zoom left>
                                    <div className="mt-5">
                                        <i className="fas fa-4x fa-terminal text-primary mb-4"></i>
                                        <h3 className="h4 mb-2">programming</h3>
                                        <p className="text-muted mb-0">java, javascript, swift, python, oracle, sql, reactjs, jsp, unix</p>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <Zoom right>
                                    <div className="mt-5">
                                        <i className="fas fa-4x fa-users text-primary mb-4"></i>
                                        <h3 className="h4 mb-2">team leader</h3>
                                        <p className="text-muted mb-0">leadership, problem-solving, communication, motivation</p>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <Zoom right>
                                    <div className="mt-5">
                                        <i className="fas fa-4x fa-briefcase text-primary mb-4"></i>
                                        <TalonsEasterEgg />
                                        <p className="text-muted mb-0">rapid learner, thorough, analytical, entrepreneurial attitude</p>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}