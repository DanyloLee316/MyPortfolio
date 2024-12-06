import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span style={{ marginLeft: "-5em"}} className="purple"> Brief Introduction </span>
            </h1>
            <p className="home-about-body">
              I got Bachelor's degree in <b className="purple"> Computer Science </b> in 2017.… 🤷‍♂️
              <br />
              <br />I am Software Engineer and <b className="purple"> Full Stack </b> @ <b className="purple">Web3</b> developer.
              <br />
              
              My dream is to develop one of the most perfect &nbsp;
              <i>
                <b className="purple">Websites</b> and <br /><b className="purple">IT Products</b>  in the world{" "}
              </i>
              <br />
              <br />
            </p>
            {/* <Container className="text-align: center"> */}
            <div className="d-flex flex-row"> 
              <h3>Github Connect&nbsp;</h3>
              <li className="social-icons">
                <a
                  href="https://github.com/DanyloLee316" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <h3>&nbsp;&nbsp;Email address :&nbsp;&nbsp;<span className="purple">danylo.lee316@gmail.com</span></h3>

            </div>
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
