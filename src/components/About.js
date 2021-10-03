import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom'
import resume from '../assets/Popovic_Resume.pdf'

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <Zoom>
              <h2 className="text-white mt-0">who am i?</h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4 font-weight-bold">
                i am an expeditious learner who is seeking a position focused on
                software engineering or ux design with a progressive and
                reputable organization. my proficient communication and conflict
                resolution skills, along with experience in a variety of
                programming languages that include python, javascript, and java,
                provide me with the ability to deliver innovative ideas that
                assist the technological development of the organization.
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger text-lowercase"
                href={resume}
              >
                resume.pdf
              </a>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
