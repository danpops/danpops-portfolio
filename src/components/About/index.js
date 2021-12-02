import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

import { imgStyle } from "./styles";
import me from "../../assets/images/me.jpeg";

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <Zoom bottom>
              <Image
                className="shadow mb-4"
                src={me}
                style={imgStyle}
                roundedCircle
              />
              <h2 className="text-white mt-0">who am i?</h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4 font-weight-bold">
                i'm an agile software engineer at{" "}
                <a
                  href="http://www.tribalscale.com"
                  style={{ textDecoration: "none" }}
                  className="text-white-50 font-weight-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TribalScale
                </a>
                . my proficient communication and conflict resolution skills,
                along with experience in a variety of programming languages that
                include javascript, python, and java, provide me with the
                ability to deliver innovative ideas that assist the
                technological development of an organization.
              </p>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
