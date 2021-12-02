import React from "react";
import { Col, Nav } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";

import { tabStyle } from "../styles";

const SpecialtyTabs = ({ data, setKey }) => {
  return (
    <Col md={3} lg={4}>
      <Zoom>
        <Nav
          variant="pills"
          className="flex justify-content-center align-items-start"
        >
          {data.map((item, index) => (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Nav.Item key={index}>
                <Nav.Link
                  eventKey={item.eventKey}
                  onClick={() => setKey(item.eventKey)}
                  style={tabStyle}
                  className="shadow-sm m-3 py-3 font-weight-medium"
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            </motion.div>
          ))}
        </Nav>
      </Zoom>
    </Col>
  );
};

export default SpecialtyTabs;
