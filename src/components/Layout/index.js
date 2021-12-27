import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ParticlesBg from "particles-bg";

import { colors } from "../../design";
import Navigation from "./Navigation";
import Footer from "./Footer";

const HeroContainer = ({ children }) => {
  return (
    <header className="masthead">
      <ParticlesBg num={60} type="cobweb" color={colors.primary} bg={true} />
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          {children}
        </Row>
      </Container>
    </header>
  );
};

const PortfolioContainer = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

const RowColContainer = ({ children }) => {
  return (
    <Row className="justify-content-center">
      <Col lg={8} className="text-center">
        {children}
      </Col>
    </Row>
  );
};

const SectionContainer = ({ id, style, className = "", children }) => {
  return (
    <section className={`page-section ${className}`} id={id} style={style}>
      <Container className="text-center">{children}</Container>
    </section>
  );
};

export { HeroContainer, PortfolioContainer, RowColContainer, SectionContainer };
