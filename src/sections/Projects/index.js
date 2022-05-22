import React from "react";
import Zoom from "react-reveal/Zoom";
import { colors } from "../../design";
import { RowColContainer, SectionContainer } from "../../components/Layout";
import { ProjectsHeader, ProjectItem } from "../../components/Projects";
import { projectData } from "../../assets/data/projectData";

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
