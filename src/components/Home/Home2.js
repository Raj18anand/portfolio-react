import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiMedium } from "react-icons/si";
import Projects from "../Projects/Projects";
import Particle from "../Particle";
import movies from "../../Assets/Projects/movies.png";
import snakegame from "../../Assets/Projects/snake-game.png";
import lungNodule from "../../Assets/Projects/lung nodule.png";
import ProjectCards from "../Projects/ProjectCards";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",textAlign:"left" }}><b className="purple">
            A Tech Fan who speak in codes like Java, C++, and JavaScript.
            </b>
            </h1>
            <p className="home-about-body">
            I am a fullstack developer with expertise in <b className="purple">React.js and Spring Boot</b>. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        <Container fluid style={{paddingTop:"20px"}}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCards
              imgPath={movies}
              isBlog={false}
              title="MovieReview"
              description="Web application that allows users to post and read reviews of movies. The application is built using the Spring Boot framework for the backend, ReactJS for the frontend, and MongoDB as the database."
              ghLink="https://github.com/Raj18anand/Movie-Review-Application"
              // demoLink="https://main.dhwntbqr3oxgr.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={snakegame}
              isBlog={false}
              title="Snake Game"
              description="Classic Snake Game built using HTML/CSS/Javascript"
              ghLink="https://github.com/Raj18anand/snake-game"
              demoLink="https://raj18anand.github.io/snake-game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={lungNodule}
              isBlog={false}
              title="Lung Nodule Classification"
              description="Classified Nodules and Non nodules in LIDC-IDRI and LNDB dataset using Deep learning and CNN model. Achieved an accuracy of 91% in LIDC-IDRI and 93% in LNDB dataset."
              ghLink="https://github.com/Raj18anand/Movie-Review-Application"
              // demoLink="https://main.dhwntbqr3oxgr.amplifyapp.com/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Raj18anand"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codexbook.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiMedium />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raj18anand/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/rajanand18/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
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
