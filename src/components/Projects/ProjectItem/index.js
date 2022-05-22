import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
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
      <Row className="justify-content-center">
        {<p className="mt-3 text-white-50 mb-4">{description}</p>}
      </Row>
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
              <VscGithubAlt size={35} className="text-white-50 mt-3 mb-2" />
            </a>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default ProjectItem;
