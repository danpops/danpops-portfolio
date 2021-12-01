import React from "react";
import { Col, Tab } from "react-bootstrap";

import SpecialtyPane from "./SpecialtyPane";

const SpecialtyContent = ({ data }) => {
  return (
    <Col md={9} lg={8}>
      <Tab.Content className="mx-5 mt-5 text-center">
        {data.map((item, index) => (
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
