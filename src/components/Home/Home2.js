import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple">Présentation</span>
            </h1>
            <p className="home-about-body">
              Récemment, j'ai plongé dans l'univers de la programmation en apprenant les langages
              <b className="purple"> HTML</b>,
              <b className="purple"> CSS</b>,
              <b className="purple"> JavaScript</b>,
              ainsi que le framework
              <b className="purple"> React</b>.
              <br />
              La création de sites web dynamiques et interactifs m'a toujours intrigué, et c'est ce qui m'a poussé à explorer ces
              <b className="purple"> langages</b>.
              <br />
              Je suis ouvert aux opportunités de collaboration, d'apprentissage et d'exploration dans le domaine du développement web. N'hésitez pas à me contacter si vous souhaitez discuter de projets passionnants ou échanger des idées sur le développement web.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contacter moi sur</h1>
            <p>
            <span className="purple"></span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Juny22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lang-ya-bb10932a3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pocketjun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
