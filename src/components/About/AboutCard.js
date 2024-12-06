import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h4 style={{ textAlign: "justify" }}>
            Hi everyone, I am from <span className="purple"> Poland, Koszalin.</span>
            <br />
            <br />
            I can keep in touch for jobs with anyone as a <span className="purple">freelancer</span>.
            <br />
            <br />
            I've been developing many projects as a <span className="purple">full stack dev</span>.
            <br />
            <br />
            Also as a web3 dev, I jumped in <span className="purple">Blockchain</span> since 2020.
            <br />
            <br />
            I've been also following <span className="purple">AI</span> Technology.
            <br/>
            <br/>
            <span className="purple">-------------&nbsp;Danylo Lee&nbsp;--------------</span>
          </h4>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
