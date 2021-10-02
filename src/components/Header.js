import React from 'react'
import Typewriter from 'typewriter-effect'
import ParticlesBg from 'particles-bg'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'
import Wobble from 'react-reveal/Wobble'

import useSound from 'use-sound'
import oofSfx from '../assets/audio/mc_oof.mp3'

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
    <div>
      <header class="masthead">
        <ParticlesBg num={250} type="lines" bg={true} />
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <Zoom right>
                <OofHeader />
              </Zoom>
              <Zoom left>
                <h2 className="text-white">i'm daniel popovic</h2>
              </Zoom>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <Wobble>
                <h5 className="typewrite text-white mb-5">
                  <Typewriter
                    options={{
                      strings: [
                        "i'm a software engineer.",
                        'i build web applications.',
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
                  <a
                    className="btn btn-primary btn-xl js-scroll-trigger text-lowercase"
                    href="#about"
                  >
                    who am i?
                  </a>
                </Link>
              </Zoom>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
