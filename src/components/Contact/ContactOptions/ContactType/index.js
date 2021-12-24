import React from "react";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

import { MotionDiv } from "../../../Motion";
import { linkStyle } from "./styles";

const ContactType = ({ icon, link, label, margin }) => {
  return (
    <Col xs={12} md={3} lg={2} className={`text-center mt-5 ${margin}`}>
      <Zoom>
        <MotionDiv>
          <a
            className="font-weight-light text-muted"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            href={link}
          >
            {icon}
          </a>
        </MotionDiv>
      </Zoom>
    </Col>
  );
};

export default ContactType;
