import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br />
        <span style={{ fontSize: "0.2em" }}>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br />
        <span style={{ fontSize: "0.2em" }}>Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br />
        <span style={{ fontSize: "0.2em" }}>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <br />
        <span style={{ fontSize: "0.2em" }}>Mongodb</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <br />
        <span style={{ fontSize: "0.2em" }}>GitHub</span>
      </Col>
    </Row>
  );
}

export default Techstack;
