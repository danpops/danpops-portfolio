import React from "react";
import { Col, Nav } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const SpecialtyTabs = ({ data, setKey }) => {
  const tabStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "20px",
  };

  return (
    <Col md={3} lg={4}>
      <Zoom>
        <Nav
          variant="pills"
          className="flex justify-content-center align-items-start"
        >
          {data.map((item, index) => (
            <Nav.Item key={index}>
              <Nav.Link
                eventKey={item.eventKey}
                onClick={() => setKey(item.eventKey)}
                style={tabStyle}
                className="shadow-sm m-3 px-3 font-weight-medium"
              >
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Zoom>
    </Col>
  );
};

export default SpecialtyTabs;
