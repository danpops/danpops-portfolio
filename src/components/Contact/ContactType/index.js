import React from "react";
import Zoom from "react-reveal/Zoom";

const ContactType = ({ icon, link, label, className }) => {
  return (
    <Zoom>
      <div className={className}>
        {icon}
        <div>
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {label}
          </a>
        </div>
      </div>
    </Zoom>
  );
};

export default ContactType;
