import React, { useState } from "react";
import { Container, Row, Tab } from "react-bootstrap";

import SpecialtyContent from "./SpecialtyContent";
import SpecialtyHeader from "./SpecialtyHeader";
import SpecialtyTabs from "./SpecialtyTabs";

import { marginStyle } from "./styles";
import { specialtyData } from "../../assets/data/speaciltyData";

const Specialties = () => {
  const [key, setKey] = useState("programming");
  return (
    <Container className="page-section" id="specialties">
      <SpecialtyHeader />
      <Tab.Container activeKey={key} style={marginStyle}>
        <Row>
          <SpecialtyTabs data={specialtyData} setKey={setKey} />
          <SpecialtyContent data={specialtyData} />
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Specialties;
