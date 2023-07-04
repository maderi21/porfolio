import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
