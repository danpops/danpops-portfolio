import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-scroll";

import Zoom from "react-reveal/Zoom";

import { HeroContainer } from "../../components/Layout";
import { MotionButton } from "../../components/Motion";
import HeroHeader from "../../components/HeroHeader";
import TypewriteText from "../../components/TypewriteText";

import { colors } from "../../design";

const Hero = () => {
  return (
    <HeroContainer>
      <Col lg={10} className="align-self-end">
        <Zoom>
          <HeroHeader />
        </Zoom>
        <hr className="divider my-4" />
      </Col>
      <Col lg={8} className="align-self-baseline">
        <Zoom>
          <TypewriteText />
          <Link to="about" smooth={true} duration={500}>
            <MotionButton
              className="btn-xl js-scroll-trigger text-lowercase"
              style={{ backgroundColor: colors.primary, color: "#fff" }}
            >
              who am i?
            </MotionButton>
          </Link>
        </Zoom>
      </Col>
    </HeroContainer>
  );
};

export default Hero;
