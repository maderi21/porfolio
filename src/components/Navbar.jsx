import logo from "../images/logo.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

            <button
              class="btn bg-secondary m-2 rounded-5"
              type="submit"
              onClick={handleShow}
            >
              Contact
            </button>
            <Modal
              className="modal-dialog-centered"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>I’d love to hear from you</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                    <Form.Label>Name</Form.Label>
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
                    <Form.Label>Email address</Form.Label>
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
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
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
