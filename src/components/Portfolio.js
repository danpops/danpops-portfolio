import React from 'react'
import { Container, Row } from 'react-bootstrap'

import PortfolioCard from './PortfolioCard'

import projects from '../assets/data/projects'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container fluid className="p-0">
        <Row className="no-gutters bg-dark">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              location={project.location}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio
