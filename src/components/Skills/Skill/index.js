import React from 'react'
import { Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom'

const Skill = ({
  header,
  description,
  icon,
  left = false,
  right = false,
  bottom = false,
}) => {
  return (
    <Col lg={3} md={6} className="text-center">
      <Zoom left={left} right={right} bottom={bottom}>
        <div className="mt-5">
          {icon}
          <h3 className="h4 mb-2">{header}</h3>
          <p className="text-muted mb-0">{description}</p>
        </div>
      </Zoom>
    </Col>
  )
}

export default Skill
