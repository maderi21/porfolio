import logo from "../images/logo.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_awi0e0g",
        "template_r0f6i6n",
        form.current,
        "NgjQDW0PY3OmZ7fdj"
      )
      .then((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary  text-center">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <a
              className="nav-link fs-3 p-1  text-center text-dark "
              href="https://www.linkedin.com/in/marek-kostolansky-762185206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="nav-link p-1 fs-3  text-center text-dark"
              href="https://www.facebook.com/profile.php?id=1617340063"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="nav-link p-1 fs-3  text-center text-dark"
              href="https://github.com/maderi21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <button
              className="btn btn-outline-danger text-dark m-2 fw-bold"
              type="submit"
              onClick={handleShow}
            >
              Contact
            </button>

            <Modal
              className="modal-dialog-centered d-flex justify-content-center"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton className="bg-primary border-0">
                <Modal.Title className="bg-primary d-flex justify-content-center ">
                  Lets Connect!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-primary">
                <p>I would love to hear from you.</p>

                <form ref={form} onSubmit={sendEmail}>
                  <label className="mb-2">Name</label>
                  <input
                    className="d-flex justify-content-center mb-3"
                    type="text"
                    name="user_name"
                    placeholder="John P"
                    autoFocus
                  />
                  <label className="mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="johnp@gmail.com"
                    autoFocus
                    className="d-flex justify-content-center mb-3"
                  />
                  <label className="mb-2">Message</label>
                  <textarea
                    className="d-flex justify-content-center mb-3"
                    name="message"
                  />
                  <input
                    className="mb-3 bg-danger border-0"
                    autoFocus
                    type="submit"
                    value="Send"
                    onClick={handleClose}
                  />
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
