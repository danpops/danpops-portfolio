import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

import ProjectCard from "./ProjectCard";

import { projectData } from "../../data/projectData";
import { sectionStyle } from "./styles";

const Projects = () => {
  return (
    <section className="page-section" style={sectionStyle} id="projects">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <Zoom>
              <h2 className="text-white mt-0">my past projects</h2>
            </Zoom>
            <hr className="divider light my-4" />
            <Row>
              {projectData.map((item, index) => (
                <ProjectCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  body={item.body}
                  link={item.link}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
