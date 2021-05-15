import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

export default class GithubLink extends Component {
    render() { 
        return (
            <section className="page-section bg-dark text-white">
                    <div className="container text-center">
                        <i className="fab fa-6x fa-github text-white mb-4"></i>
                        <Zoom bottom>
                            <h2 className="mb-4">check out my work on github!</h2>
                            <a className="btn btn-light btn-xl text-lowercase" href="https://github.com/danpops">github/danpops</a>
                        </Zoom>
                    </div>
            </section>
        );
    }
};