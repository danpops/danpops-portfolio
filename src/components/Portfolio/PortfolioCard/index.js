import React from 'react'
import { Col } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'

const PortfolioCard = (props) => {
  return (
    <Col lg={4} sm={6}>
      <Bounce>
        <a className="portfolio-box" href={props.location}>
          <img className="img-fluid" src={props.image} alt={props.title} />
          <div className="portfolio-box-caption">
            <div className="project-category text-white-50 text-lowercase">
              {props.title}
            </div>
            <div className="project-name">{props.description}</div>
          </div>
        </a>
      </Bounce>
    </Col>
  )
}

export default PortfolioCard
