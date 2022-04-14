import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Spline from '@splinetool/react-spline';

import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";

import Banner from '../../Assets/banner.png';

function Home() {

  useEffect(() => {
   Aos.init({duration: 2000});
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home" data-aos="fade-down">
        <Container className="home-content">
          <Row>
          <Col md={0} className="Banner-Container">
            <img src={Banner} alt='Welcome to my site' className="Banner-img"/>
           </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
