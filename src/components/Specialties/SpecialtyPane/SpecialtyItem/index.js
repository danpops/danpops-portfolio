import React from "react";
import { Col, Image } from "react-bootstrap";

const SpecialityItem = ({ key, image, alt, name }) => {
  const iconStyle = {
    minHeight: "55px",
    maxWidth: "55px",
  };

  return (
    <Col key={key} xs={6} md={3} className="p-2 mb-2">
      <Image src={image} alt={alt} style={iconStyle} />
      <br />
      <p className="mt-3 text-secondary">{name}</p>
    </Col>
  );
};

export default SpecialityItem;
