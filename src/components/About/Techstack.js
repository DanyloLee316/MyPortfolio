import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  
} from "react-icons/di";
import {
  SiTypescript,
  SiDevexpress,
  SiRust,
  SiNestjs,
  SiDjango,
  SiRedis,
  SiNextdotjs,
  SiSolidity,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <br/>
        <h3>Mongodb</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDevexpress />
        <br/>
        <h3>express.js</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br/>
        <h3>React.js</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <br/>
        <h3>Next.js</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <br/>
        <h3>NestJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <br/>
        <h3>Solidity</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRust />
        <br/>
        <h3>Rust</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <br/>
        <h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <br/>
        <h3>Django</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <br/>
        <h3>Redis</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <br/>
        <h3>Postgresql</h3>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
