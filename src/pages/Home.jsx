import Header from "../components/Header";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import { Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header />

      <About />
      <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
        TECH STACK
      </h4>
      <TechStack />

      <Row className="container">
        <Col>
          <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
            PORTFOLIO
          </h4>
        </Col>
      </Row>
      <Portfolio />

      <div className="text-center">
        <button
          className="btn bg-danger text-dark"
          type="submit"
          onClick={() => navigate("projects")}
        >
          SEE MORE PROJECTS..
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
