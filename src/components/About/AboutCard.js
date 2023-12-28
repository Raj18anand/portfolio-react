import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Raj Anand </span>
            and I am from <span className="purple"> Faridabad, India.</span>
            <br />
            I am currently employed as a Software Engineer at Bharat Petroleum.
            <br />
            I have completed BTech in Computer Science and Engineering from NIT Patna.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating with friends
            </li>
          </ul>

          <p style={{ color: "#000" }}>
            "Never Stop Learning!"{" "}
          </p>
          <footer className="blockquote-footer">Raj Anand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
