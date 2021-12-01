import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

import navData from "../../assets/data/navData";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const navClass = scroll ? "navbar-scrolled" : "";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <Navbar
      color="light"
      expand="lg"
      className={`fixed-top py-3 ${navClass}`}
      id="mainNav"
    >
      <Container>
        <Link to="page-top" smooth={true} duration={500}>
          <Navbar.Brand className="js-scroll-trigger" href="#page-top">
            {"<danpops />"}
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto my-2 my-lg-0">
            {navData.map((link, index) => (
              <Link key={index} to={link.to} smooth={true} duration={500}>
                <Nav.Item>
                  <Nav.Link href={link.href} className="pr-2 js-scroll-trigger">
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
