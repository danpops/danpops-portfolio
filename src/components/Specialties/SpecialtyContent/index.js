import React from "react";
import { Tab, Col } from "react-bootstrap";

import { specialtyPanes } from "../../../assets/data/specialties";

import SpecialtyPane from "./SpecialtyPane";

const SpecialtyContent = () => {
  return (
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
  );
};

export default SpecialtyContent;
