import React from "react";
import Zoom from "react-reveal/Zoom";
import { colors } from "../../design";
import { RowColContainer, SectionContainer } from "../../components/Layout";
import { ProjectsHeader, ProjectItem } from "../../components/Projects";

import rps from "../../assets/icons/rps.png";

const RPSDescription = () => (
  <p className="mt-3 text-white-50 mb-4">
    a rock paper scissors app. nothing more, nothing less. <br />
    built with react native, typescript, redux-toolkit, and reanimated 2.
  </p>
);

const projectData = {
  projectLink:
    "https://apps.apple.com/ca/app/rock-paper-scissors-2022/id1615229958",
  icon: rps,
  alt: "rock-paper-scissors-icon",
  title: "rock paper scissors",
  description: <RPSDescription />,
  srcCodeLink: "https://github.com/danpops/rock-paper-scissors",
};

const Projects = () => {
  const {
    projectLink,
    icon,
    alt,
    title,
    description,
    srcCodeLink,
  } = projectData;
  return (
    <SectionContainer
      className="section text-white"
      style={{ backgroundColor: colors.primary }}
      id="projects"
    >
      <RowColContainer>
        <Zoom>
          <ProjectsHeader />
          <ProjectItem
            projectLink={projectLink}
            icon={icon}
            alt={alt}
            title={title}
            description={description}
            srcCodeLink={srcCodeLink}
          />
        </Zoom>
      </RowColContainer>
    </SectionContainer>
  );
};

export default Projects;
