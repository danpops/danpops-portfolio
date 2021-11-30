import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Container, Tab, Tabs } from "react-bootstrap";

import { specialtyPanes } from "../../assets/data/specialties";

import SpecialtyPane from "./SpecialtyPane";

const Specialties = () => {
  const [key, setKey] = useState("programming");

  return (
    <Container className="page-section" id="services">
      <Zoom bottom>
        <h2 className="text-center mt-0">what are my specialties?</h2>
      </Zoom>
      <hr className="divider my-4" />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 py-2 justify-content-center "
        variant="pills"
      >
        <Tab eventKey="programming" title="programming"></Tab>
        <Tab eventKey="frontend" title="front-end"></Tab>
        <Tab eventKey="backend" title="back-end"></Tab>
        <Tab eventKey="database" title="database"></Tab>
      </Tabs>
      <Tab.Container activeKey={key}>
        <Tab.Content className="m-5 text-center">
          {specialtyPanes.map((item, index) => (
            <SpecialtyPane
              key={index}
              data={item.data}
              eventKey={item.eventKey}
            />
          ))}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Specialties;
