import React from 'react'
import Skill from './Skill'
import Zoom from 'react-reveal/Zoom'

import skills from '../../data/skills.json'

const Skills = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <Zoom bottom>
          <h2 className="text-center mt-0">what are my skills?</h2>
        </Zoom>
        <hr className="divider my-4" />
        <div className="row">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              left={skill.left}
              right={skill.right}
              header={skill.header}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
