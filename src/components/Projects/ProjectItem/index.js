import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  linkStyle,
  projectIconStyle,
  projectSourceContainerStyle,
} from "./styles";

const ProjectItem = ({
  projectLink,
  icon,
  alt,
  title,
  description,
  srcCodeLink,
}) => {
  return (
    <>
      <Row className="justify-content-center py-2">
        <motion.div whileHover={{ scale: 1.2 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={projectLink}
            style={linkStyle}
          >
            <img
              src={icon}
              alt={alt}
              className="mt-2"
              style={projectIconStyle}
            />
            <p className="mt-3 text-white mb-1 font-weight-bold">{title}</p>
          </a>
        </motion.div>
        <br />
      </Row>
      <Row className="justify-content-center">{description}</Row>
      <Row
        className="justify-content-center"
        style={projectSourceContainerStyle}
      >
        <Col xs={6}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={srcCodeLink}
              style={linkStyle}
            >
              <FaGithub size={45} className="text-white mt-3 mb-2" />
            </a>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default ProjectItem;
