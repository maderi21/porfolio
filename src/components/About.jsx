import { Row, Col, Image, Container } from "react-bootstrap";
import about from "../images/about.jpg";
const About = () => {
  return (
    <section className="bg-primary">
      <Container className="py-5 ">
        <Row>
          <Col sm={6}>
            <Image src={about} rounded />
          </Col>
          <Col
            sm={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Row className="mx-5 py-5">
              <p className="text-dark-bold rounded d-flex justify-content-center">
                ABOUT ME
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                voluptatum consequuntur amet similique doloribus rem in
                architecto cum commodi corporis eos, deleniti animi vel
                officiis, dolore atque doloremque magni laudantium mollitia?
                Assumenda natus praesentium est ex impedit sequi corporis
                sapiente!
              </p>
              <a
                href="#"
                className="text-dark link-offset-2 link-underline link-underline-opacity-0"
              >
                keep reading my bio...
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
