import React from "react";
import { Row } from "react-bootstrap";

import { contactData } from "../../../data/contactData";

import ContactType from "./ContactType";

const ContactOptions = () => {
  return (
    <Row>
      {contactData.map((item, index) => (
        <ContactType
          margin={item.margin}
          link={item.link}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </Row>
  );
};

export default ContactOptions;
