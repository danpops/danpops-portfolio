import React from 'react'
import PortfolioCard from './PortfolioCard'
import projects from '../data/projects.json'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters bg-dark">
          {projects.map((project, index) => (
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

export default Portfolio
