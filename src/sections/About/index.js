import React from "react";
import Zoom from "react-reveal/Zoom";

import { SectionContainer, RowColContainer } from "../../components/Layout";
import { AboutBio, AboutHeader, sectionStyle } from "../../components/About";

const About = () => {
  return (
    <SectionContainer id="about" style={sectionStyle}>
      <RowColContainer>
        <Zoom>
          <AboutHeader />
        </Zoom>
        <hr className="divider light my-4" />
        <Zoom>
          <AboutBio />
        </Zoom>
      </RowColContainer>
    </SectionContainer>
  );
};

export default About;
