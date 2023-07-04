import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";
import { RxEnter } from "react-icons/rx";
import { BiGitBranch } from "react-icons/bi";

const Projects = () => {
  return (
    <>
      <div>
        <Navbar />
        <Col className="container">
          <Row>
            <h4 className="bg-primary d-flex justify-content-center text-dark m-0 pt-5 pb-3">
              PROJECTS
            </h4>
          </Row>
        </Col>
        <section class="p-5">
          <div class="container">
            <div class="row text-center g-4">
              <div class="col-md-4">
                <div class="card bg-dark text-light">
                  <div class="card-body text-center">
                    <h3 class="card-title mb-3">Tick Tack Toe</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore. Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Corporis
                      fuga odio beatae autem a labore.
                    </p>
                    <button
                      class="btn bg-secondary rounded-5 m-3"
                      type="submit"
                    >
                      Code <BiGitBranch />
                    </button>
                    <button class="btn bg-danger rounded-5" type="submit">
                      Live Demo <RxEnter />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-secondary text-light">
                  <div class="card-body text-center">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Hybrid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
                    </p>
                    <button
                      class="btn bg-secondary rounded-5 m-3"
                      type="submit"
                    >
                      Code <BiGitBranch />
                    </button>
                    <button class="btn bg-danger rounded-5" type="submit">
                      Live Demo <RxEnter />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-secondary text-light">
                  <div class="card-body text-center">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Hybrid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
                    </p>
                    <button
                      class="btn bg-secondary rounded-5 m-3"
                      type="submit"
                    >
                      Code <BiGitBranch />
                    </button>
                    <button class="btn bg-danger rounded-5" type="submit">
                      Live Demo <RxEnter />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-secondary text-light">
                  <div class="card-body text-center">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Hybrid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
                    </p>
                    <button
                      class="btn bg-secondary rounded-5 m-3"
                      type="submit"
                    >
                      Code <BiGitBranch />
                    </button>
                    <button class="btn bg-danger rounded-5" type="submit">
                      Live Demo <RxEnter />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-secondary text-light">
                  <div class="card-body text-center">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Hybrid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
                    </p>
                    <button
                      class="btn bg-secondary rounded-5 m-3"
                      type="submit"
                    >
                      Code <BiGitBranch />
                    </button>
                    <button class="btn bg-danger rounded-5" type="submit">
                      Live Demo <RxEnter />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-secondary text-light">
                  <div class="card-body text-center">
                    <div class="h1 mb-3">
                      <i class="bi bi-person-square"></i>
                    </div>
                    <h3 class="card-title mb-3">Hybrid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Corporis fuga odio beatae autem a labore.Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Corporis fuga odio
                      beatae autem a labore.
                    </p>
                    <button
                      class="btn bg-secondary rounded-5 m-3"
                      type="submit"
                    >
                      Code <BiGitBranch />
                    </button>
                    <button class="btn bg-danger rounded-5" type="submit">
                      Live Demo <RxEnter />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
