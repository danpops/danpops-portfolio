import React from "react";
import Zoom from "react-reveal/Zoom";
import { Col, Row } from "react-bootstrap";

const ContactHeader = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={8} className="text-center">
        <Zoom>
          <h2 className="mt-0">let's get in touch!</h2>
        </Zoom>
        <hr className="divider my-4" />
        <Zoom>
          <p className="text-muted mb-5">
            although i'm not currently looking for any new opportunities, i'm
            open to answering questions or providing advice. feel free to
            contact me!
          </p>
        </Zoom>
      </Col>
    </Row>
  );
};

export default ContactHeader;
