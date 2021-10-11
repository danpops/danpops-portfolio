import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { Container, Row } from 'react-bootstrap'

import Skill from './Skill'

import skills from '../../assets/data/skills'

const Skills = () => {
  return (
    <Container className="page-section" id="services">
      <Zoom bottom>
        <h2 className="text-center mt-0">what are my skills?</h2>
      </Zoom>
      <hr className="divider my-4" />
      <Row>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            icon={skill.icon}
            left={skill.left}
            right={skill.right}
            header={skill.header}
            description={skill.description}
          />
        ))}
      </Row>
    </Container>
  )
}

export default Skills
