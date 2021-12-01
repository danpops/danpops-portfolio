import React from "react";
import { Row } from "react-bootstrap";

import { contactData } from "../../../assets/data/contactData";

import ContactType from "./ContactType";

const ContactOptions = () => {
  return (
    <Row>
      {contactData.map((item, index) => (
        <ContactType
          className={item.className}
          link={item.link}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </Row>
  );
};

export default ContactOptions;
