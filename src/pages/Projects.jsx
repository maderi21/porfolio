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
              On my web dev journey I always like to be inspired by things
              around me and also each project I am bulding or learning to build
              I make with interest either in field or technology, which helps a
              lot. I used to work on open source project in past, currently
              working on Calculator for long term home investing. Some of the
              projects below are done with tutorial, where I wanted to enhace my
              knowledge, therefore credit given.
            </p>
          </Col>
        </Row>
        <section class="p-5">
          <div class="container">
            <div class="row text-center g-4">
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <h3 class="card-title mb-3">Hairstylist landing page</h3>
                    <p class="card-text mt-auto">
                      Project inspired by a family member created with <br />
                      <span className="fw-bold">Figma, React, BootStrap</span>
                      ,using simple <span className="fw-bold">
                        FormSubmit
                      </span>{" "}
                      email template for handling contact form.
                    </p>
                    <a
                      href="https://github.com/maderi21/landing"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-gabriela.netlify.app/"
                      class="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3 ">Vinary e-shop</h3>
                    <p class="card-text mt-auto">
                      Easy family vinery e-shop build with{" "}
                      <span className="fw-bold">Figma, React, BootStrap</span>,
                      predictible state container done with{" "}
                      <span className="fw-bold">Redux</span>.
                    </p>
                    <a
                      href="https://github.com/maderi21/fourhills"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-fourhills.mdbgo.io/"
                      class="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Kids blog</h3>
                    <p class="card-text mt-auto">
                      When searching for advice on paranting I have created this
                      blog project for sharing thoughts, made with <br />
                      <span className="fw-bold">Figma, React, BootStrap</span>.
                    </p>
                    <a
                      href="https://github.com/maderi21/blog"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-kiddos.netlify.app/"
                      class="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Advice Generator</h3>
                    <p class="card-text mt-auto">
                      When feel lost and need advice. My first ever project in
                      phase 3 in my web dev jouney.Made with{" "}
                      <span className="fw-bold">HTML, CSS and JS.</span>
                    </p>
                    <a
                      href="https://github.com/maderi21/3rd-party-API-advice-web"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-advice.netlify.app/"
                      class="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Tic-Tac-Toe</h3>
                    <p class="card-text mt-auto">
                      Tutorial project of famous game, credit to{" "}
                      <span className="fw-bold">web dev simplified YT. </span>
                      Made with <span className="fw-bold">React </span>
                    </p>
                    <a
                      href="https://github.com/maderi21/tic-tac-toe"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-tic-tac-toe.netlify.app/"
                      class="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Clothing Shop</h3>
                    <p class="card-text mt-auto">
                      My first e-shop project, dynamics done with{" "}
                      <span className="fw-bold">
                        jQuery, HTML and BootStrap
                      </span>
                    </p>
                    <a
                      href="https://github.com/maderi21/maderi-shop"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-shop.netlify.app/"
                      class="btn bg-danger m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <RxEnter />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark text-light shadow p-3 mb-3 h-100">
                  <div class="card-body text-center d-flex flex-column">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Note taking app </h3>
                    <p class="card-text mt-auto">
                      Tutorial project - markdown supported note taking app,
                      credit to{" "}
                      <span className="fw-bold">web dev simplified YT. </span>
                      Made with{" "}
                      <span className="fw-bold">Vite - React, TS</span>.
                    </p>
                    <a
                      href="https://github.com/maderi21/note-taking-app"
                      class="btn bg-secondary m-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <BiGitBranch />
                    </a>
                    <a
                      href="https://maderi21-note-app.netlify.app/"
                      class="btn bg-danger m-2"
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
