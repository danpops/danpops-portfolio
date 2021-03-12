import React from 'react'

const PortfolioCard = (props) => {
    return (
<>
        <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={props.location}>
                <img className="img-fluid" src={props.image} alt="" />
                <div className="portfolio-box-caption">
                    <div className="project-category text-white-50 text-lowercase">{props.title}</div>
                    <div className="project-name">{props.description}</div>
                </div>
            </a>
        </div>
</>
    )
}

export default PortfolioCard
