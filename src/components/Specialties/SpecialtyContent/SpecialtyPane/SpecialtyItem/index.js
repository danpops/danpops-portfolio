import React from "react";
import { Col, Image } from "react-bootstrap";

const SpecialityItem = ({ key, image, alt, name, href }) => {
  const linkDecoration = { textDecoration: "none"};
  const iconStyle = {
    minHeight: "55px",
    maxWidth: "55px",
  };

  return (
    <Col key={key} xs={6} md={6} lg={3} className="p-2 mb-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        style={linkDecoration}
      >
        <Image src={image} alt={alt} style={iconStyle} />
        <br />
        <p className="mt-3 text-secondary">{name}</p>
      </a>
    </Col>
  );
};

export default SpecialityItem;
