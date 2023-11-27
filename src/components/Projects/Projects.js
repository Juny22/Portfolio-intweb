import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ce sont des projets réalisés avec OpenClassRoom.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="titre"
              description="description"
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="titre"
              description="description"
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="titre"
              description="description"
              ghLink="https://github.com/"
              demoLink=""             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
