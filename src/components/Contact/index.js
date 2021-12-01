import React from "react";
import { Container } from "react-bootstrap";

import ContactHeader from "./ContactHeader";
import ContactOptions from "./ContactOptions";

const Contact = () => {
  return (
    <Container className="page-section" id="contact">
      <ContactHeader />
      <ContactOptions />
    </Container>
  );
};

export default Contact;
