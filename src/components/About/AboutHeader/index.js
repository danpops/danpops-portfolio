import React from "react";
import { Image } from "react-bootstrap";

import me from "../../../assets/images/me.jpeg";
import { imgStyle } from "../styles";

const AboutHeader = () => {
  return (
    <>
      <Image className="shadow mb-4" src={me} style={imgStyle} roundedCircle />
      <h2 className="text-white mt-0">who am i?</h2>
    </>
  );
};

export default AboutHeader;
