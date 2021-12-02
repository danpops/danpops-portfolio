import React from "react";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { iconStyle, linkStyle } from "../../../styles";

const SpecialityItem = ({ key, image, alt, name, href }) => {
  return (
    <Col key={key} xs={6} md={6} lg={3} className="p-2 mb-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        style={linkStyle}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 120, -120, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: 5,
            repeatDelay: 1,
          }}
          src={image}
          alt={alt}
          style={iconStyle}
        />
        <br />
        <p className="mt-3 text-secondary">{name}</p>
      </a>
    </Col>
  );
};

export default SpecialityItem;
