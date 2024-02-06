import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import lungNodule from "../../Assets/Projects/lung nodule.png";
import codecanvas from "../../Assets/Projects/Codecanvas html.png";
import movies from "../../Assets/Projects/movies.png";
import github from "../../Assets/Projects/Github.png";
import shadowdog from "../../Assets/Projects/shadow-dog-animation.png"
import parallaxbg from "../../Assets/Projects/parallax-backgrounds.png"
import snakegame from "../../Assets/Projects/snake-game.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="MovieReview"
              description="Web application that allows users to post and read reviews of movies. The application is built using the Spring Boot framework for the backend, ReactJS for the frontend, and MongoDB as the database."
              ghLink="https://github.com/Raj18anand/Movie-Review-Application"
              // demoLink="https://main.dhwntbqr3oxgr.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              isBlog={false}
              title="Snake Game"
              description="Classic Snake Game built using HTML/CSS/Javascript"
              ghLink="https://github.com/Raj18anand/snake-game"
              demoLink="https://raj18anand.github.io/snake-game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codecanvas}
              isBlog={false}
              title="CodeCanvas"
              description="Frontend Code Editor which renders HTML/CSS/JS code realtime. Built with React.js."
              ghLink="https://github.com/Raj18anand/frontend-code-editor"
              demoLink="https://main.dhwntbqr3oxgr.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lungNodule}
              isBlog={false}
              title="Lung Nodule Classification"
              description="Classified Nodules and Non nodules in LIDC-IDRI and LNDB dataset using Deep learning and CNN model. Achieved an accuracy of 91% in LIDC-IDRI and 93% in LNDB dataset."
              ghLink="https://github.com/Raj18anand/Movie-Review-Application"
              // demoLink="https://main.dhwntbqr3oxgr.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shadowdog}
              isBlog={false}
              title="Shadow Dog"
              description="Different kind of animations of a character with different speed. Built with Vanilla Javascript."
              ghLink="https://github.com/Raj18anand/shadow-dog-animations"
              demoLink="https://raj18anand.github.io/shadow-dog-animations/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxbg}
              isBlog={false}
              title="Parallax Backgrounds"
              description="Parallax Backgrounds means Frontline background moves at different speed than backline background. Built with Vanilla Javascript."
              ghLink="https://github.com/Raj18anand/parallax-background"
              demoLink="https://raj18anand.github.io/parallax-background/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="More Projects Coming..."
              description="Adding more after making them live."
              ghLink="https://github.com/Raj18anand?tab=repositories"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
