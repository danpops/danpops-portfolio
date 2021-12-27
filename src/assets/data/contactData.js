import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contactData = [
  {
    margin: "ml-auto",
    link: "mailto:dan-popovic@hotmail.com",
    icon: <MdEmail size={46} className="text-muted" />,
  },
  {
    margin: "mr-auto",
    link: "https://www.linkedin.com/in/danpops",
    icon: <FaLinkedinIn size={46} className="text-muted" />,
  },
];
