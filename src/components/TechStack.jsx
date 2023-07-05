import React from "react";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript, BiLogoCss3, BiLogoVuejs } from "react-icons/bi";
import { BsWordpress, BsGithub } from "react-icons/bs";
import { SiFigma } from "react-icons/si";
import { Col, Row } from "react-bootstrap";

const TechStack = () => {
  return (
    <div className="bg-secondary text-dark m-0 ">
      <Col className="container d-flex justify-content-center p-2 md-2 sm-3">
        <Row className="md-2">
          <FaReact className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">React</p>
        </Row>
        <Row className="md-2">
          <FaHtml5 className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Html 5</p>
        </Row>
        <Row className="md-2">
          <BiLogoJavascript className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">JavaScript</p>
        </Row>
        <Row className="md-2">
          <BiLogoCss3 className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Css 3</p>
        </Row>
        <Row className="md-2">
          <BsWordpress className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">WordPress</p>
        </Row>
        <Row className="md-2">
          <SiFigma className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Figma</p>
        </Row>
        <Row className="md-2">
          <BiLogoVuejs className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Vue Js</p>
        </Row>
        <Row className="md-2">
          <FaBootstrap className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Bootstrap</p>
        </Row>
        <Row className="md-2">
          <BsGithub className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Github</p>
        </Row>
      </Col>
    </div>
  );
};

export default TechStack;
