import React from 'react'
import Zoom from 'react-reveal/Zoom'

const Skill = ({
  header,
  description,
  left = false,
  right = false,
  bottom = false,
}) => {
  return (
    <div className="col-lg-3 col-md-6 text-center">
      <Zoom left={left} right={right} bottom={bottom}>
        <div className="mt-5">
          <i className="fas fa-4x fa-user-graduate text-primary mb-4"></i>
          <h3 className="h4 mb-2">{header}</h3>
          <p className="text-muted mb-0">{description}</p>
        </div>
      </Zoom>
    </div>
  )
}

export default Skill
