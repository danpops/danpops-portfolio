import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import ParticlesBg from 'particles-bg'
import Zoom from 'react-reveal/Zoom'
import Wobble from 'react-reveal/Wobble'
import useSound from 'use-sound'

import oofSfx from '../../assets/audio/mc_oof.mp3'

const Header = () => {
  const OofHeader = () => {
    const [play] = useSound(oofSfx)
    return (
      <h1 onClick={play} className="text-white">
        hello!
      </h1>
    )
  }

  return (
    <header class="masthead">
      <ParticlesBg num={150} type="lines" bg={true} />
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={10} className="align-self-end">
            <Zoom right>
              <OofHeader />
            </Zoom>
            <Zoom left>
              <h2 className="text-white">i'm daniel popovic</h2>
            </Zoom>
            <hr className="divider my-4" />
          </Col>
          <Col lg={8} className="align-self-baseline">
            <Wobble>
              <h5 className="typewrite text-white mb-5">
                <Typewriter
                  options={{
                    strings: [
                      "agile software engineer.",
                      'i build stuff for the web.',
                      'nice to meet you :) !',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h5>
            </Wobble>
            <Zoom>
              <Link to="about" smooth={true} duration={1000}>
                <Button
                  color="primary"
                  size="xl"
                  className="js-scroll-trigger text-lowercase"
                  href="#about"
                >
                  who am i?
                </Button>
              </Link>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
