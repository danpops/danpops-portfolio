import React from "react";
import { Col, Nav } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

import { MotionDiv } from "../../Motion";

import { tabStyle } from "../styles";

const SpecialtyTabs = ({ data, setKey }) => {
  return (
    <Col md={3} lg={4}>
      <Zoom>
        <Nav
          variant="pills"
          className="flex justify-content-center align-items-start pill-special  "
        >
          {data.map((item, index) => (
            <MotionDiv>
              <Nav.Item fill key={index}>
                <Nav.Link
                  eventKey={item.eventKey}
                  onClick={() => setKey(item.eventKey)}
                  style={tabStyle}
                  className="shadow-sm m-3 py-3 font-weight-medium"
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            </MotionDiv>
          ))}
        </Nav>
      </Zoom>
    </Col>
  );
};

export default SpecialtyTabs;
