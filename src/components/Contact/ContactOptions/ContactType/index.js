import React from "react";
import Zoom from "react-reveal/Zoom";

import { MotionDiv } from "../../../Motion";

const ContactType = ({ icon, link, label, className }) => {
  return (
    <Zoom>
      <div className={className}>
        <MotionDiv>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            href={link}
          >
            {icon}
            <br />
            {label}
          </a>
        </MotionDiv>
      </div>
    </Zoom>
  );
};

export default ContactType;
