import React, { useState } from "react";
import { Container, Row, Tab } from "react-bootstrap";

import {
  SpecialtyContent,
  SpecialtyHeader,
  SpecialtyTabs,
  marginStyle,
} from "../../components/Specialties";

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
