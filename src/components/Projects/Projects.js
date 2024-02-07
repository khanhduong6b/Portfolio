import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crawldata from "../../Assets/Projects/crawldata.png";
import futures from "../../Assets/Projects/futures.png";
import bottrade from "../../Assets/Projects/bottrade.png";
import safebank from "../../Assets/Projects/safebank.png";
import socialweb from "../../Assets/Projects/socialweb.png";
import amibroker from "../../Assets/Projects/amibroker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={safebank}
              isBlog={false}
              title="Safe Bank"
              description="Safe Bank is a mobile banking app enabling seamless and secure zkProofs, a fiat onramp and payments across wallets and domestic and international bank accounts via the SEPA network."
              ghLink="https://github.com/Bank-Safe"
              demoLink="https://devfolio.co/projects/banking-protocol-d4ab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialweb}
              isBlog={false}
              title="Social Web3"
              description="Social Web3 looks like Twitter and Threads, but it uses blockchain technology for data storage. The platform allows users to create profiles using their Metamask wallets. Users then interact with the platform through their profiles. Additionally, the project's unique feature is its use of CCIP via Chainlink. This enables the creation of profiles from any chain desired (ETH, BSC, Arbitrum, etc.). "
              ghLink="https://github.com/khanhduong6b/socialWeb3Contract.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={futures}
              isBlog={false}
              title="Futures Trading feature"
              description="Clone Futures Trading feature from Binance with simple logic and get data by using websocket via Binance and embed chart via Tradingview. Using MERN stack."
              demoLink="https://futures.getctrade.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amibroker}
              isBlog={false}
              title="Amibroker Data Plugin"
              description="My project goal use C++ to create a data plugin for hooking crypto data from Binance to AmiBroker. Support all tokens."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bottrade}
              isBlog={false}
              title="Bot Trade"
              description="The bot in this project is designed to place futures orders on Binance immediately upon receiving a notification from Telegram. (User, Group, Channel). The notification is sent from the Amibroker software, which is a popular charting and trading software platform.
              The bot is written in JavaScript and uses the Telegram API to communicate with Telegram. The bot is also integrated with the Binance API to place futures orders."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crawldata}
              isBlog={false}
              title="OpenAI analyses stock data"
              description="This project dives into the world of stocks, using JavaScript to crawl data from websites and OpenAI to unlock hidden patterns and insights. Forget complex tools! All the data and its analysis are presented in a simple, clear Google Sheet, ready for you to explore."
              ghLink="https://github.com/khanhduong6b/crawlData"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
