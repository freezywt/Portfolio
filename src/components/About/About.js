import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {

  useEffect(() => {
   Aos.init({duration: 2000});
  }, []);

  return (
    <Container fluid className="about-section" data-aos="fade-down">
      <Container>
        <h1 className="project-heading">
          Professional <strong >Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong>Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
