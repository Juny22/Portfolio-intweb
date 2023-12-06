import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiWindows,
  SiAdobephotoshop,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <br />
        <span style={{ fontSize: "0.2em" }}>Win10</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <br />
        <span style={{ fontSize: "0.2em" }}>VisualStudioCode</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <br />
        <span style={{ fontSize: "0.2em" }}>Slack</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <br />
        <span style={{ fontSize: "0.2em" }}>Photoshop</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
