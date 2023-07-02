import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Header />
      <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
        TECH STACK
      </h4>
      <TechStack />
      <About />
      <Col className="container">
        <Row>
          <h4 className="bg-primary text-dark">PORTFOLIO</h4>
        </Row>
      </Col>
      <Portfolio />
      <Col className="d-flex justify-content-center m-5 p-5">
        <button class="btn bg-danger rounded-5 text-dark px-5" type="submit">
          SEE MORE POJECTS...
        </button>
      </Col>
      <Footer />
      <AboutMe />
    </div>
  );
}

export default App;
