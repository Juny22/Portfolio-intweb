import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à vous, Je suis <span className="purple">Lang YA </span>
            de <span className="purple"> Rennes, France.</span>
            <br />
            Je suis actuellement étudiant chez OpenClassRoom en Intégrateur Web.
            <br />
            <br />
            <br />
            À par le codage, j'ai d'autres activités 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Wing Chun
            </li>
            <li className="about-activity">
              <ImPointRight /> Breakdance / Locking
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
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
