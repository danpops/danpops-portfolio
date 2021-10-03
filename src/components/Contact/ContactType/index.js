import React from 'react'
import Roll from 'react-reveal/Roll'

const ContactType = ({
  left = false,
  right = false,
  icon,
  link,
  label,
  className,
}) => {
  return (
    <Roll left={left} right={right}>
      <div className={className}>
        {icon}
        <div>
          <a href={link}>{label}</a>
        </div>
      </div>
    </Roll>
  )
}

export default ContactType
