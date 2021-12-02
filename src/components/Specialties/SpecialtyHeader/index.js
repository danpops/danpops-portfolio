import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const SpecialtyHeader = () => {
  return (
    <Container className="container-sm">
      <Zoom>
        <h2 className="text-center mt-0">what are my specialties?</h2>
      </Zoom>
      <hr className="divider my-4" />
    </Container>
  );
};

export default SpecialtyHeader;
