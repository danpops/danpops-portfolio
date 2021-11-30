import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Container, Tab, Tabs } from "react-bootstrap";

import { specialtyTabs, specialtyPanes } from "../../assets/data/specialties";

import SpecialtyPane from "./SpecialtyPane";

const Specialties = () => {
  const [key, setKey] = useState("programming");
  const tabStyle = { marginLeft: "auto", marginRight: "auto" };
  const changePane = (k) => setKey(k);


  return (
    <Container className="page-section" id="specialties">
      <Zoom bottom>
        <h2 className="text-center mt-0">what are my specialties?</h2>
      </Zoom>
      <hr className="divider my-4" />

      <Tabs
        activeKey={key}
        onSelect={changePane}
        style={tabStyle}
        className="mb-3 py-2 justify-content-around w-75"
        variant="pills"
      >
        {specialtyTabs.map((item, index) => (
          <Tab key={index} eventKey={item.eventKey} title={item.title} />
        ))}
      </Tabs>

      <Tab.Container activeKey={key}>
        <Tab.Content className="mx-5 mt-5 text-center">
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
