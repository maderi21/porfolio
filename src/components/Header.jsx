import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import hero from "../images/hero.png";

const Header = () => {
  return (
    <section className="bg-primary">
      <Container className="py-5 ">
        <Row>
          <Col sm={7} className="d-flex align-items-center">
            <Row className="mx-5 py-5">
              <h1 className="display-2 fs-1">
                Hi! My name is Marek Kostolansky
              </h1>
              <p className="fs-1 m-0">Front End Developer</p>
            </Row>
          </Col>
          <Col sm={5}>
            <Image src={hero} className="container " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
