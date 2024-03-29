import React from "react";
import { Row, Tab } from "react-bootstrap";
import Pulse from "react-reveal/Pulse";

import SpecialityItem from "./SpecialtyItem";

const SpecialtyPane = ({ eventKey, data }) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <Pulse>
        <Row className="justify-content-between">
          {data.map((item, index) => (
            <SpecialityItem
              key={index}
              image={item.image}
              alt={item.alt}
              name={item.name}
              href={item.href}
            />
          ))}
        </Row>
      </Pulse>
    </Tab.Pane>
  );
};

export default SpecialtyPane;
