import logo from "../images/logo.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Projects
                </a>
              </li>
            </ul>
            <a class="nav-link fs-3 p-1 d-flex" aria-current="page" href="#">
              <FaLinkedin />
            </a>
            <a class="nav-link p-1 fs-3 d-flex" aria-current="page" href="#">
              <FaFacebook />
            </a>
            <a class="nav-link p-1 fs-3 d-flex" aria-current="page" href="#">
              <FaGithub />
            </a>

            <button class="btn bg-danger m-2 rounded-5" type="submit">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
