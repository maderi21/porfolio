import Navbar from "../components/Navbar";
import aboutme from "../images/aboutme.png";
import { Col, Row } from "react-bootstrap";
import snowboard from "../images/snowboarding.jpg";
import fifestyle from "../images/fifestyle.jpg";

const AboutMe = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5 ">
        <Row>
          <Col sm={7}>
            <img src={aboutme} alt="" />
          </Col>
        </Row>
        <Row>
          <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
            HOW IT ALL STARTED
          </h4>
        </Row>
        <Row className="text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo
          </p>
          <h1>1-first site</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            soluta quibusdam inventore aperiam veniam nihil earum ad error
            tempora obcaecati!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Expedita soluta quibusdam inventore aperiam veniam
            nihil earum ad error tempora obcaecati!
            <img className="" src={snowboard} />
          </p>
          <h1>2-fifestyle</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            soluta quibusdam inventore aperiam veniam nihil earum ad error
            tempora obcaecati!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Expedita soluta quibusdam inventore aperiam veniam
            nihil earum ad error tempora obcaecati!
            <img className="" src={fifestyle} />
          </p>
          <h1>3-grinding now</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            soluta quibusdam inventore aperiam veniam nihil earum ad error
            tempora obcaecati!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Expedita soluta quibusdam inventore aperiam veniam
            nihil earum ad error tempora obcaecati!
            <img className="" src={snowboard} />
          </p>
        </Row>
      </div>
    </>
  );
};

export default AboutMe;
