import React from "react";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript, BiLogoCss3, BiLogoVuejs } from "react-icons/bi";
import { BsWordpress, BsGithub } from "react-icons/bs";
import { SiFigma } from "react-icons/si";
import { Col, Container, Row } from "react-bootstrap";

const TechStack = () => {
  return (
    <div className="bg-secondary text-dark container">
      <Row className="container text-center p-2">
        <Col className="md-2">
          <FaReact className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">React</p>
        </Col>
        <Col className="md-2">
          <FaHtml5 className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Html 5</p>
        </Col>
        <Col className="md-2">
          <BiLogoJavascript className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">JavaScript</p>
        </Col>
        <Col className="md-2">
          <BiLogoCss3 className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Css 3</p>
        </Col>
        <Col className="md-2">
          <BsWordpress className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">WordPress</p>
        </Col>
        <Col className="md-2">
          <SiFigma className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Figma</p>
        </Col>
        <Col className="md-2">
          <BiLogoVuejs className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Vue Js</p>
        </Col>
        <Col className="md-2">
          <FaBootstrap className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Bootstrap</p>
        </Col>
        <Col className="md-2">
          <BsGithub className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Github</p>
        </Col>
      </Row>
    </div>
  );
};

export default TechStack;
