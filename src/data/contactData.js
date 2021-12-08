import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export const contactData = [
  {
    className: "col-lg-4 ml-auto text-center mb-5 mb-lg-0",
    link: "https://www.linkedin.com/in/danpops",
    label: "linkedin/danpops",
    icon: <FaLinkedin size={48} className="text-muted mb-3" />,
  },
  {
    className: "col-lg-4 mr-auto text-center mb-5 mb-lg-0",
    link: "mailto:dan-popovic@hotmail.com",
    label: "email",
    icon: <FaEnvelope size={48} className="mb-3 text-muted" />,
  },
];
