import React from "react";
import { Container } from "react-bootstrap";
import useSound from "use-sound";

import talonsSfx from "../../assets/audio/largetalons.mp3";

const Footer = () => {
  const [play] = useSound(talonsSfx);
  return (
    <footer className="bg-light py-5">
      <Container>
        <div onClick={play} className="small text-center text-muted">
          © 2021 - danpops.ca
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
