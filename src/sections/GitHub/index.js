import React from "react";
import { Button } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { FaGithub } from "react-icons/fa";

import { MotionDiv } from "../../components/Motion";
import { SectionContainer } from "../../components/Layout";

const GitHubLink = () => {
  return (
    <SectionContainer className="bg-dark text-white" id="github">
      <Zoom>
        <FaGithub size={90} className="text-white mb-4" />
        <h2 className="mb-4">check out my work on github!</h2>
        <hr className="divider light my-4" />
        <MotionDiv>
          <Button
            size="xl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light text-lowercase shadow-sm"
            href="https://github.com/danpops"
          >
            github/danpops
          </Button>
        </MotionDiv>
      </Zoom>
    </SectionContainer>
  );
};

export default GitHubLink;
