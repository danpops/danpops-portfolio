import React from "react";

import { SectionContainer, RowColContainer } from "../../components/Layout";
import { ContactHeader, ContactOptions } from "../../components/Contact";

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <RowColContainer>
        <ContactHeader />
        <ContactOptions />
      </RowColContainer>
    </SectionContainer>
  );
};

export default Contact;
