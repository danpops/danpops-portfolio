import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

import { MotionDiv } from "../Motion";

import navData from "../../assets/data/navData";
import useNavigation from "../../hooks/useNavigation";

const Navigation = () => {
  const { closeNav, expanded, navClass, toggleNav } = useNavigation();
  return (
    <Navbar
      color="light"
      expand="lg"
      className={`fixed-top py-3 ${navClass}`}
      id="mainNav"
      onToggle={toggleNav}
      expanded={expanded}
    >
      <Container>
        <Link to="page-top" smooth={true} duration={500}>
          <MotionDiv>
            <Navbar.Brand className="js-scroll-trigger ml-2" href="#page-top">
              {"danpops_"}
            </Navbar.Brand>
          </MotionDiv>
        </Link>

        <Navbar.Toggle
          aria-controls="navbarResponsive"
          className="navbar-toggle-custom"
        >
          {!expanded ? <FiMenu size={34} /> : <FiX size={34} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto my-2 my-lg-0">
            {navData.map((link, index) => (
              <Link key={index} to={link.to} smooth={true} duration={500}>
                <MotionDiv>
                  <Nav.Item>
                    <Nav.Link
                      href={link.href}
                      onClick={closeNav}
                      className="ml-2 pr-2 js-scroll-trigger"
                    >
                      {link.label}
                    </Nav.Link>
                  </Nav.Item>
                </MotionDiv>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
