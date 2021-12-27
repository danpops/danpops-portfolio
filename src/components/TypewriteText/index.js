import React from "react";
import Typewriter from "typewriter-effect";

import { typewriterText } from "../../assets/text/heroText"

const TypewriteText = () => {
  return (
    <h5 className="typewrite text-dark mb-5">
      <Typewriter
        options={{
          strings: typewriterText,
          autoStart: true,
          loop: true,
        }}
      />
    </h5>
  );
};

export default TypewriteText;
