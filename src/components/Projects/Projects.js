import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Batery from '../../Assets/Projects/batery.png';
import CepSearch from '../../Assets/Projects/cep-search.png';
import Codeflix from '../../Assets/Projects/codeflix.png';
import CurrencyConverter from '../../Assets/Projects/currency-converter.png';
import DiscordClone from '../../Assets/Projects/discord-clone-nodejs.png';
import Financas from '../../Assets/Projects/financas.png';
import HtmlLandingPage from '../../Assets/Projects/html-landing-page.png';
import KeyboardTest from '../../Assets/Projects/keyboard-test.png';
import MarketList from '../../Assets/Projects/market-list-react.png';
import Payme from '../../Assets/Projects/payme.png';
import ReactJsLandingPage from '../../Assets/Projects/react-js-landing-page.png';
import TaskList from '../../Assets/Projects/react-task-list.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Batery}
              title="Batery"
              link="https://github.com/freezywt/Batery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CepSearch}
              title="Cep Search"
              link="https://github.com/freezywt/BuscadorDeCep"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codeflix}
              title="CodeFlix"
              link="https://github.com/freezywt/Netflix-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CurrencyConverter}
              title="Currency Converter"
              link="https://github.com/freezywt/Conversor-De-Moedas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiscordClone}
              title="Discord Clone"
              link="https://github.com/freezywt/chatnode"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Financas}
              title="Financas"
              link="https://github.com/freezywt/Financas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HtmlLandingPage}
              title="HtmlLandingPage"
              link="https://github.com/freezywt/landing-page-html5"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KeyboardTest}
              title="KeyboardTest"
              link="https://github.com/freezywt/KeyBoard-Test"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MarketList}
              title="MarketList"
              link="https://github.com/freezywt/Market-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Payme}
              title="Payme"
              link="https://github.com/freezywt/payme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactJsLandingPage}
              title="ReactJsLandingPage"
              link="https://github.com/freezywt/first-landing-page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskList}
              title="TaskList"
              link="https://github.com/freezywt/tasks"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
