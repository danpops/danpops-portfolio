import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Container, Tab, Tabs } from "react-bootstrap";

import { specialtyTabs, specialtyPanes } from "../../assets/data/specialties";

import SpecialtyPane from "./SpecialtyPane";

const Specialties = () => {
  const [key, setKey] = useState("programming");

  const changePane = (k) => setKey(k);

  return (
    <Container className="page-section" id="services">
      <Zoom bottom>
        <h2 className="text-center mt-0">what are my specialties?</h2>
      </Zoom>
      <hr className="divider my-4" />
      <Tabs
        activeKey={key}
        onSelect={changePane}
        className="mb-3 py-2 justify-content-center "
        variant="pills"
      >
        {specialtyTabs.map((item, index) => (
          <Tab key={index} eventKey={item.eventKey} title={item.title} />
        ))}
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
