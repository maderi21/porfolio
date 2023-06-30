import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { Row, Col } from "react-bootstrap";

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
    </div>
  );
}

export default App;
