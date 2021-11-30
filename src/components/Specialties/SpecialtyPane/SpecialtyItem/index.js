import React from "react";
import { Col, Image } from "react-bootstrap";

const SpecialityItem = ({ key, image, alt, name }) => {
  const iconStyle = {
    minHeight: "55px",
    maxWidth: "55px",
  };

  return (
    <Col key={key} xs={6} md={3} className="py-4">
      <Image src={image} alt={alt} style={iconStyle} />
      <br />
      <div className="mt-3 text-secondary">{name}</div>
    </Col>
  );
};

export default SpecialityItem;
