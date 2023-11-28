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
              title="ArgentBank"
              description="description"
              ghLink="https://github.com/Juny22/ArgentBank-website"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="724Events"
              description="description"
              ghLink="https://github.com/Juny22/Projet-10---724events"
              demoLink="https://juny22.github.io/Projet-10---724events/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nina Carducci"
              description="description"
              ghLink="https://github.com/Juny22/Projet-9-Nina-Carducci"
              demoLink="https://juny22.github.io/Projet-9-Nina-Carducci/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agence Kasa"
              description="description"
              ghLink="https://github.com/Juny22/Projet-8---Agence-Kasa"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sophie Bluel"
              description="description"
              ghLink="https://github.com/Juny22/Projet-6-Sophie-Bluel"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Booki"
              description="description"
              ghLink="https://github.com/Juny22/Projet-3_booki-starter-code-master"
              demoLink="https://juny22.github.io/Projet-3_booki-starter-code-master/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
