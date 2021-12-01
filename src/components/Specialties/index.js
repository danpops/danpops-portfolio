import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Container, Tab, Row } from "react-bootstrap";

import SpecialtyTabs from "./SpecialtyTabs";
import SpecialtyContent from "./SpecialtyContent";

const Specialties = () => {
  const [key, setKey] = useState("programming");
  const marginStyle = { marginLeft: "auto", marginRight: "auto" };

  return (
    <Container className="page-section" id="specialties">
      <Zoom bottom>
        <h2 className="text-center mt-0">what are my specialties?</h2>
      </Zoom>
      <hr className="divider my-4" />
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
