import React from "react";
import { Card, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

import { MotionDiv } from "../../Motion";

import { cardBodyStyle, cardStyle, imgStyle } from "./styles";

const ProjectCard = ({ title, image, body, link }) => {
  return (
    <Col xs={12} md={6} lg={4} className="p-2">
      <Bounce>
        <MotionDiv>
          <a
            href={link}
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card className="shadow-sm" style={cardStyle}>
              <Card.Img variant="top" style={imgStyle} src={image} />
              <Card.Body style={cardBodyStyle}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </MotionDiv>
      </Bounce>
    </Col>
  );
};

export default ProjectCard;
