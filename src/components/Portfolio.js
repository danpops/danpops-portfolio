import React, { Component } from 'react'
import PortfolioCard from "./PortfolioCard"
import data from "../data/projects.json"

export default class Portfolio extends Component {

    render() {
        return (
            <div id="portfolio">
                    <section className="page-section bg-dark text-white">
                        <div className="container text-center">
                            <i className="fab fa-6x fa-github text-white mb-4"></i>
                            <h2 className="mb-4">check out my work on github!</h2>
                            <a className="btn btn-light btn-xl text-lowercase" href="https://github.com/danpops">github/danpops</a>
                        </div>
                    </section>


                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                        {data.map((project, index) => (
                            <PortfolioCard 
                                key={index} 
                                location={project.location}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                            />
                        ))} 
                        </div>
                    </div>
            </div>
        )
    }
}