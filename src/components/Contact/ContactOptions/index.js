import React from "react";
import { Row } from "react-bootstrap";

import { contactData } from "../../../data/contactData";

import ContactType from "./ContactType";

const ContactOptions = () => {
  return (
    <Row>
      {contactData.map((item, index) => (
        <ContactType
          key={index}
          margin={item.margin}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </Row>
  );
};

export default ContactOptions;
