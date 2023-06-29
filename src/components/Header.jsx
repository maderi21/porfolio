import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import hero from "../images/hero.png";

const Header = () => {
  return (
    <section className="bg-primary">
      <Container>
        <Row>
          <Col sm={6} className="d-flex align-items-center">
            <Row className="my-5 mx-5">
              <h1>Hi! My name is Marek Kostolansky</h1>
              <p className="fs-1">Front End Developer</p>
            </Row>
          </Col>
          <Col sm={6}>
            <Image src={hero} className="container p-2" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
