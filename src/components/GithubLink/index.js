import React from "react";
import { Button, Container } from "react-bootstrap";
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
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              size="xl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light text-lowercase shadow-sm"
              href="https://github.com/danpops"
            >
              github/danpops
            </Button>
          </motion.div>
        </Zoom>
      </Container>
    </section>
  );
};

export default GitHubLink;
