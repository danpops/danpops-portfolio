import React from 'react'
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
    <div>
      <footer className="bg-light py-5">
        <div className="container">
          <TalonsEasterEgg />
        </div>
      </footer>
    </div>
  )
}

export default Footer
