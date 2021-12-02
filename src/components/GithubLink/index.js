import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const GitHubLink = () => {
  return (
    <section className="page-section bg-dark text-white" id="github">
      <Container className="text-center">
        <FaGithub size={90} className="text-white mb-4" />
        <Zoom>
          <h2 className="mb-4">check out my work on github!</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-xl btn-light text-lowercase shadow-sm"
            href="https://github.com/danpops"
          >
            github/danpops
          </motion.button>
        </Zoom>
      </Container>
    </section>
  );
};

export default GitHubLink;
