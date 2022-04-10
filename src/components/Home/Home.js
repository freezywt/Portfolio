import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Spline from '@splinetool/react-spline';

import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {

  useEffect(() => {
   Aos.init({duration: 2000});
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home" data-aos="fade-down">
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
           <Spline className="img-fluid logo-home" scene="https://draft.spline.design/ownAVKTnQWzvb-rS/scene.spline" />
            </Col>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Matheus Fernandes</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
