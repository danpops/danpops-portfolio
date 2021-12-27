import React from "react";
import Zoom from "react-reveal/Zoom";
import {
  contactHeaderText,
  contactBioText,
} from "../../../assets/text/contactText";

const ContactHeader = () => {
  return (
    <>
      <Zoom>
        <h2 className="mt-0">{contactHeaderText}</h2>
      </Zoom>
      <hr className="divider my-4" />
      <Zoom>
        <p className="text-muted mb-5">{contactBioText}</p>
      </Zoom>
    </>
  );
};

export default ContactHeader;
