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
      <nav class="navbar navbar-expand-lg bg-primary  text-center">
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
                <Link class="nav-link text-dark fw-bold" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark fw-bold" to="/projects">
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
              class="nav-link p-1 fs-3  text-center text-dark"
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
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text-dark">Name</Form.Label>
                    <Form.Control
                      type="Name"
                      placeholder="John P"
                      autoFocus
                      name="from_name"
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
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-dark">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="bg-primary border-0">
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="bg-danger"
                  type="submit"
                  value="Send"
                >
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
