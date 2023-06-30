import { Row, Col, Image, Container } from "react-bootstrap";
import gabriela from "../images/gabriela.jpg";
import { RxEnter } from "react-icons/rx";
import { BiGitBranch } from "react-icons/bi";
import kopce from "../images/kopce.jpg";
import kiddos from "../images/kiddos.jpg";
import RE from "../images/realestate.jpg";

const Portfolio = () => {
  return (
    <section className="bg-primary">
      <Container className="py-5 ">
        <Row>
          <Col sm={6} className="d-flex align-items-center">
            <Row className="mx-5 py-5">
              <h4 className="bg-primary text-dark">Hairstylist landing page</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et.Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et
              </p>
              <Row>
                <Col sm={4}>
                  <button class="btn bg-danger rounded-5" type="submit">
                    Live Demo <RxEnter />
                  </button>
                </Col>
                <Col sm={3}>
                  <button class="btn bg-secondary rounded-5" type="submit">
                    Code <BiGitBranch />
                  </button>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col sm={6}>
            <Image src={gabriela} className="container p-3" />
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="d-flex align-items-center">
            <Row className="mx-5 py-5">
              <h4 className="bg-primary text-dark">Hairstylist landing page</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et.Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et
              </p>
              <Row>
                <Col sm={4}>
                  <button class="btn bg-danger rounded-5" type="submit">
                    Live Demo <RxEnter />
                  </button>
                </Col>
                <Col sm={3}>
                  <button class="btn bg-secondary rounded-5" type="submit">
                    Code <BiGitBranch />
                  </button>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col sm={6}>
            <Image src={kopce} className="container p-3 " />
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="d-flex align-items-center">
            <Row className="mx-5 py-5">
              <h4 className="bg-primary text-dark">Hairstylist landing page</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et.Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et
              </p>
              <Row>
                <Col sm={4}>
                  <button class="btn bg-danger rounded-5" type="submit">
                    Live Demo <RxEnter />
                  </button>
                </Col>
                <Col sm={3}>
                  <button class="btn bg-secondary rounded-5" type="submit">
                    Code <BiGitBranch />
                  </button>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col sm={6}>
            <Image src={kiddos} className="container p-3" />
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="d-flex align-items-center">
            <Row className="mx-5 py-5">
              <h4 className="bg-primary text-dark">Hairstylist landing page</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et.Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et
              </p>
              <Row>
                <Col sm={4}>
                  <button class="btn bg-danger rounded-5" type="submit">
                    Live Demo <RxEnter />
                  </button>
                </Col>
                <Col sm={3}>
                  <button class="btn bg-secondary rounded-5" type="submit">
                    Code <BiGitBranch />
                  </button>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col sm={6}>
            <Image src={RE} className="container p-3 " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
