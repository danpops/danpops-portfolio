import React from 'react'
import Bounce from 'react-reveal/Bounce'
import { Row, Container, Col } from 'react-bootstrap'
import ContactType from './ContactType'

import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <Container className="page-section" id="contact">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <Bounce bottom>
            <h2 className="mt-0">let's get in touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              although i'm not currently looking for any new opportunities, i'm
              open to <br /> answering questions or providing advice. feel free
              to contact me!
            </p>
          </Bounce>
        </Col>
      </Row>
      <Row>
        <ContactType
          left
          className="col-lg-4 ml-auto text-center mb-5 mb-lg-0"
          link="https://www.linkedin.com/in/danpops"
          label="linkedin/danpops"
          icon={<FaLinkedin size={55} className="mb-3 text-muted" />}
        />

        <ContactType
          right
          className="col-lg-4 mr-auto text-center mb-5 mb-lg-0"
          link="mailto:me@danpops.ca"
          label="me@danpops.ca"
          icon={<FaEnvelope size={55} className="mb-3 text-muted" />}
        />
      </Row>
    </Container>
  )
}

export default Contact
