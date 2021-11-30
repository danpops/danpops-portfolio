import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";

import { specialtyTabs, specialtyPanes } from "../../assets/data/specialties";

import SpecialtyPane from "./SpecialtyPane";

const Specialties = () => {
  const [key, setKey] = useState("programming");
  const tabStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "20px",
  };

  return (
    <Container className="page-section" id="specialties">
      <Zoom bottom>
        <h2 className="text-center mt-0">what are my specialties?</h2>
      </Zoom>
      <hr className="divider my-4" />
      <Tab.Container
        activeKey={key}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Row>
          <Col md={3} lg={4}>
            <Zoom bottom>
              <Nav variant="pills" className="flex-column align-items-center">
                {specialtyTabs.map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link
                      eventKey={item.eventKey}
                      onClick={() => setKey(item.eventKey)}
                      style={tabStyle}
                    >
                      {item.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Zoom>
          </Col>
          <Col md={9} lg={8}>
            <Tab.Content className="mx-5 mt-5 text-center">
              {specialtyPanes.map((item, index) => (
                <SpecialtyPane
                  key={index}
                  data={item.data}
                  eventKey={item.eventKey}
                />
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Specialties;
