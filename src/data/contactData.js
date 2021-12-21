import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { colors } from "../design";

export const contactData = [
  {
    margin: "ml-auto",
    link: "https://www.linkedin.com/in/danpops",
    label: "linkedin",
    icon: (
      <FaLinkedin size={40} className="m-3 text-muted" color={colors.primary} />
    ),
  },
  {
    margin: "mr-auto",
    link: "mailto:dan-popovic@hotmail.com",
    label: "email",
    icon: <FaEnvelope size={40} className="m-3 text-muted" />,
  },
];
