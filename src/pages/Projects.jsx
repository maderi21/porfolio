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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sit
              aspernatur. Fugit laborum iure voluptatum recusandae, voluptas est
              inventore rem vitae ipsa vel velit deleniti debitis repellat
              fugiat. Natus rem quam possimus, eaque voluptatum officiis
              repudiandae adipisci ratione mollitia iure, ex vel neque laborum
              fugit consequuntur nemo reprehenderit laboriosam voluptate?m
              possimus, eaque voluptatum officiis repudiandae adipisci ratione
              mollitia iure, ex vel neque laborum fugit consequuntur nemo
              reprehenderit laboriosam voluptate?
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore. Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Corporis
                      fuga odio beatae autem a labore.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
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
