import React, { Component } from 'react'
import PortfolioCard from "./PortfolioCard"
import data from "../data/projects.json"

export default class Portfolio extends Component {

    render() {
        return (
            <div id="portfolio">

                <div className="container-fluid p-0">
                    <div className="row no-gutters bg-dark">
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