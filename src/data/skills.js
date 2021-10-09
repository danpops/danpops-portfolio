import React from 'react'
import { FaTerminal, FaInfo, FaUsers, FaBriefcase  } from 'react-icons/fa' 

const iconStyle = 'text-primary mb-4 fa-4x'

const skills = [
  {
    left: true,
    right: false,
    icon: <FaInfo className={iconStyle}/>,
    header: "knowledgeable",
    description: "project management, programming fundamentals, test driven development" 
  },
  {
    left: true,
    right: false,
    icon: <FaTerminal className={iconStyle} />,
    header: "programming",
    description: "javascript, python, mongodb, react.js, node.js" 
  },
  {
    left: false,
    right: true,
    icon: <FaUsers className={iconStyle} />,
    header: "team leader",
    description: "leadership, problem-solving, communication, motivation" 
  },
  {
    left: false,
    right: true,
    icon: <FaBriefcase className={iconStyle} />,
    header: "work ethic",
    description: "rapid learner, thorough, analytical, entrepreneurial attitude" 
  }
]

export default skills;