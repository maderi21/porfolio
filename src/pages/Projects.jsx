import { Col, Row } from "react-bootstrap";
import { RxEnter } from "react-icons/rx";
import { BiGitBranch } from "react-icons/bi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
              PROJECTS
            </h4>

            <p className="text-center">
              On my web dev journey, I always like to be inspired by things
              around me, and also each project I am building or learning to
              build I make with interest either in the field or technology,
              which helps a lot. I used to work on open source project in the
              past, currently working on a Calculator for long-term rental
              investing. Some of the projects below are done with the tutorial,
              where I wanted to enhance my knowledge, therefore credit is given.
            </p>
          </Col>
        </Row>
        <section className="p-5">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <h3 className="card-title mb-3">
                      Hairstylist landing page
                    </h3>
                    <p className="card-text mt-auto">
                      Project inspired by a family member created with <br />
                      <span className="fw-bold">Figma, React, BootStrap</span>
                      ,using simple <span className="fw-bold">
                        FormSubmit
                      </span>{" "}
                      email template for handling contact form.
                    </p>
                    <a
                      href="https://github.com/maderi21/landing"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-gabriela.netlify.app/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3 ">Vinary e-shop</h3>
                    <p className="card-text mt-auto">
                      Family vinery e-shop built with{" "}
                      <span className="fw-bold">Figma, React, BootStrap</span>,
                      predictible state container done with{" "}
                      <span className="fw-bold">Redux</span>.
                    </p>
                    <a
                      href="https://github.com/maderi21/fourhills"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-fourhills.mdbgo.io/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3">Kids blog</h3>
                    <p className="card-text mt-auto">
                      When searching for advice on parenting I have created this
                      blog project for sharing thoughts, made with <br />
                      <span className="fw-bold">Figma, React, BootStrap.</span>
                    </p>
                    <a
                      href="https://github.com/maderi21/blog"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-kiddos.netlify.app/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3">Advice Generator</h3>
                    <p className="card-text mt-auto">
                      When feel lost and need advice. My first ever project in
                      phase 3 in my web dev journey.Made with{" "}
                      <span className="fw-bold">HTML, CSS and JS.</span>
                    </p>
                    <a
                      href="https://github.com/maderi21/3rd-party-API-advice-web"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-advice.netlify.app/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3">Tic-Tac-Toe</h3>
                    <p className="card-text mt-auto">
                      Tutorial project of famous game, credit to{" "}
                      <span className="fw-bold">web dev simplified YT. </span>
                      Made with <span className="fw-bold">React.</span>
                    </p>
                    <a
                      href="https://github.com/maderi21/tic-tac-toe"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-tic-tac-toe.netlify.app/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3">Clothing Shop</h3>
                    <p className="card-text mt-auto">
                      My first e-shop project, dynamics done with{" "}
                      <span className="fw-bold">
                        jQuery, HTML and BootStrap.
                      </span>
                    </p>
                    <a
                      href="https://github.com/maderi21/maderi-shop"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-shop.netlify.app/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div className="card-body text-center d-flex flex-column">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square"></i>
                    </div>
                    <h3 className="card-title mb-3">Note taking app </h3>
                    <p className="card-text mt-auto">
                      Tutorial project - markdown supported note taking app,
                      credit to{" "}
                      <span className="fw-bold">web dev simplified YT. </span>
                      Made with{" "}
                      <span className="fw-bold">Vite - React, TS.</span>
                    </p>
                    <a
                      href="https://github.com/maderi21/note-taking-app"
                      className="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-note-app.netlify.app/"
                      className="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
