import Navbar from "../components/Navbar";
import aboutme from "../images/aboutme.png";
import { Col, Row } from "react-bootstrap";
import snowboard from "../images/";

const AboutMe = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5 position-relative">
        <Row>
          <Col sm={7}>
            <img src={aboutme} alt="" />
          </Col>
          <Col sm={4} className="position-absolute top-50 start-50">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                maiores nihil, dolorum placeat recusandae neque mollitia minus
                voluptas alias sed?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iure maiores nihil, dolorum placeat recusandae
                neque mollitia minus voluptas alias sed?
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
            HOW IT ALL STARTED
          </h4>
        </Row>
        <Row>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo
          </p>
          <h1>1-first site</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            soluta quibusdam inventore aperiam veniam nihil earum ad error
            tempora obcaecati!
            <img src={snowboard} />
          </p>
        </Row>
      </div>
    </>
  );
};

export default AboutMe;
