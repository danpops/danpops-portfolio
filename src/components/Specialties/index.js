import React, { useState } from "react";
import { Container, Tab, Row } from "react-bootstrap";

import SpecialtyTabs from "./SpecialtyTabs";
import SpecialtyContent from "./SpecialtyContent";
import SpecialtyHeader from "./SpecialtyHeader";

const Specialties = () => {
  const [key, setKey] = useState("programming");
  const marginStyle = { marginLeft: "auto", marginRight: "auto" };

  return (
    <Container className="page-section" id="specialties">
      <SpecialtyHeader />
      <Tab.Container activeKey={key} style={marginStyle}>
        <Row>
          <SpecialtyTabs setKey={setKey} />
          <SpecialtyContent />
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Specialties;
