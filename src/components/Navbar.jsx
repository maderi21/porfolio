import logo from "../images/logo.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
          <Link class="navbar-brand" exact to="/">
            <img src={logo} />
          </Link>
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
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <a
              class="nav-link fs-3 p-1 d-flex"
              href="https://www.linkedin.com/in/marek-kostolansky-762185206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              class="nav-link p-1 fs-3 d-flex"
              href="https://www.facebook.com/profile.php?id=1617340063"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              class="nav-link p-1 fs-3 d-flex"
              href="https://github.com/maderi21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <button
              class="btn bg-secondary m-2 rounded-5"
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
                  I’d love to hear from you
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-primary">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sapiente molestias maxime! Ipsa, mollitia ab sunt
                  obcaecati ad consectetur officiis?
                </p>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text-dark">Name</Form.Label>
                    <Form.Control
                      type="Name"
                      placeholder="John Doe"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text-dark">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-dark">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="bg-primary border-0">
                <Button variant="secondary" onClick={handleClose}>
                  Send
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
