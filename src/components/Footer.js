import React from 'react'
import { Container } from 'react-bootstrap'
import useSound from 'use-sound'

import talonsSfx from '../assets/audio/largetalons.mp3'

const Footer = () => {
  const TalonsEasterEgg = () => {
    const [play] = useSound(talonsSfx)
    return (
      <div onClick={play} className="small text-center text-muted">
        © 2021 - danpops.ca
      </div>
    )
  }

  return (
    <footer className="bg-light py-5">
      <Container>
        <TalonsEasterEgg />
      </Container>
    </footer>
  )
}

export default Footer
