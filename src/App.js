import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
        TECH STACK
      </h4>
      <TechStack />
      <About />
    </div>
  );
}

export default App;
