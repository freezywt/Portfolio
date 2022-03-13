import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-color">Matheus Fernandes</span>
            from <span className="primary-color"> Parana, Brazil.</span>
            <br />I am a senior developer with <span className="primary-color">ReactJS</span> & <span className="primary-color">React Native</span> and <span className="primary-color">NodeJS</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Pentesting
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "follow you dreams!"{" "}
          </p>
          <footer className="blockquote-footer">Freezywt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
