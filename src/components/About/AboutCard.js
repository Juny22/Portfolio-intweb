import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m'appelle <span className="purple">Lang YA </span> et je viens
            de <span className="purple"> Rennes, France.</span>
            <br />
            Je suis actuellement en formation Intégrateur Web chez OpenClassRoom.
            <br />
            <br />
            À par le codage, j'ai d'autres activités comme :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Art martial - Wing Chun
            </li>
            <li className="about-activity">
              <ImPointRight /> Art - Dessin / Peinture
            </li>
            <li className="about-activity">
              <ImPointRight /> Danse - Breakdance / Locking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
