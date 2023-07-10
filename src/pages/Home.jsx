import Header from "../components/Header";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import { Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Header />
      <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
        TECH STACK
      </h4>
      <TechStack />
      <About />
      <Row className="container">
        <Col>
          <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
            PORTFOLIO
          </h4>
        </Col>
      </Row>
      <Portfolio />

      <Row className="p-5">
        <button
          className="btn bg-danger rounded-5 text-dark d-flex justify-content-center"
          type="submit"
          onClick={() => navigate("projects")}
        >
          SEE MORE POJECTS..
        </button>
      </Row>

      <Footer />
    </div>
  );
};

export default Home;
