import React from 'react'

import Bounce from 'react-reveal/Bounce';

const PortfolioCard = (props) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <Bounce>
            <a className="portfolio-box" href={props.location}>
                <img className="img-fluid" src={props.image} alt="" />
                <div className="portfolio-box-caption">
                    <div className="project-category text-white-50 text-lowercase">{props.title}</div>
                    <div className="project-name">{props.description}</div>
                </div>
            </a>
            </Bounce>
        </div>

    )
}

export default PortfolioCard
