import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Zoom from "react-reveal/Zoom";

import oofSfx from "../../assets/audio/mc_oof.mp3";
import { typewriterHeader } from "../../data/headerData";

const Header = () => {
  const [play] = useSound(oofSfx);
  return (
    <header className="masthead">
      <ParticlesBg color="#007BFF" num={45} type="cobweb" bg={true} />
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={10} className="align-self-end">
            <Zoom>
              <h1 onClick={play} className="text-dark">
                hello!
              </h1>
              <h2 className="text-dark">i'm dan popovic</h2>
            </Zoom>
            <hr className="divider my-4" />
          </Col>
          <Col lg={8} className="align-self-baseline">
            <Zoom>
              <h5 className="typewrite text-dark mb-5">
                <Typewriter
                  options={{
                    strings: typewriterHeader,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h5>

              <Link to="about" smooth={true} duration={1000}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn-xl btn-primary js-scroll-trigger text-lowercase"
                  href="#about"
                >
                  who am i?
                </motion.button>
              </Link>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
