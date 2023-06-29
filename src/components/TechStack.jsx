import React from "react";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript, BiLogoCss3, BiLogoVuejs } from "react-icons/bi";
import { BsWordpress, BsGithub } from "react-icons/bs";
import { SiFigma } from "react-icons/si";
import { Col, Row } from "react-bootstrap";

const TechStack = () => {
  return (
    <div className="bg-secondary text-dark m-0 ">
      <Col
        xm={12}
        md={6}
        xl={7}
        className="container d-flex justify-content-center p-2"
      >
        <Row>
          <FaReact className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">React</p>
        </Row>
        <Row>
          <FaHtml5 className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Html 5</p>
        </Row>
        <Row>
          <BiLogoJavascript className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">JavaScript</p>
        </Row>
        <Row>
          <BiLogoCss3 className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Css 3</p>
        </Row>
        <Row>
          <BsWordpress className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">WordPress</p>
        </Row>
        <Row>
          <SiFigma className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Figma</p>
        </Row>
        <Row>
          <BiLogoVuejs className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Vue Js</p>
        </Row>
        <Row>
          <FaBootstrap className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Bootstrap</p>
        </Row>
        <Row>
          <BsGithub className=" fs-1 mx-1 mt-3" />
          <p className="d-flex justify-content-center mx-1">Github</p>
        </Row>
      </Col>
    </div>
  );
};

export default TechStack;
