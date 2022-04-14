import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {

  useEffect(() => {
   Aos.init({duration: 2000});
  }, []);

  return (
    <Container fluid className="home-about-section" id="about" data-aos="fade-down">
      <Container>
        <Row>
          <Col md={11} className="home-about-description">
            <p className="home-about-body">
            from : Freezy <b>[ Matheus Fernandes ]</b> <br />
            for : Visitor <br /><br />
            Hi, my name is Matheus and one of the things I love is programming as you may have noticed, I spend my days all the time programming since I was 7 years old, practicing and studying. I have fluency in languages like javascript, typescript, css, scss and fluency in frameworks like ReactJS, ReactNative, NodeJS and some experiences with angular, php, c++, imgui, zgui, c# among others. See you soon
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
