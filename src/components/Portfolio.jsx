import gabriela from "../images/gabriela.jpg";
import { RxEnter } from "react-icons/rx";
import { BiGitBranch } from "react-icons/bi";
import kopce from "../images/kopce.jpg";
import kiddos from "../images/kiddos.jpg";
import RE from "../images/realestate.jpg";

const Portfolio = () => {
  return (
    <>
      <section className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h4 className="text-dark fw-bold">Hairstylist landing page</h4>
              <p className="lead">
                Basic landing page for Hair Salon Gabriela.
              </p>
              <p>
                Project inspired by a family member created with <br />
                <span className="fw-bold">Figma, React, BootStrap</span>,using
                simple <span className="fw-bold">FormSubmit</span> email
                template for handling contact form.
              </p>
              <div>
                <a
                  href="https://maderi21-gabriela.netlify.app/"
                  className="btn bg-danger  mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <RxEnter />
                </a>
                <a
                  href="https://github.com/maderi21/landing"
                  className="btn bg-secondary mx-1 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <BiGitBranch />
                </a>
              </div>
            </div>
            <div className="col-md">
              <img
                className="img-fluid rounded-3 shadow mb-3"
                src={gabriela}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h4 className="text-dark fw-bold">Vinary e-shop</h4>
              <p className="lead">Also inspired by family business 4hills</p>
              <p>
                Family vinery e-shop built with{" "}
                <span className="fw-bold">Figma, React, BootStrap</span>,
                predictible state container done with{" "}
                <span className="fw-bold">Redux</span>.
              </p>
              <div>
                <a
                  href="https://maderi21-fourhills.mdbgo.io/"
                  className="btn bg-danger  mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <RxEnter />
                </a>
                <a
                  href="https://github.com/maderi21/fourhills"
                  className="btn bg-secondary mx-1 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <BiGitBranch />
                </a>
              </div>
            </div>
            <div className="col-md">
              <img
                className="img-fluid rounded-3 shadow mb-3"
                src={kopce}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h4 className="text-dark fw-bold">Kids blog</h4>
              <p className="lead">
                Inspired by my child, who is always learning new things.
              </p>
              <p>
                When searching for advice on parenting I have created this blog
                project for sharing thoughts, made with <br />
                <span className="fw-bold">Figma, React, BootStrap</span>.
              </p>
              <div>
                <a
                  href="https://maderi21-kiddos.netlify.app/"
                  className="btn bg-danger  mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <RxEnter />
                </a>
                <a
                  href="https://github.com/maderi21/blog"
                  className="btn bg-secondary mx-1 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <BiGitBranch />
                </a>
              </div>
            </div>
            <div className="col-md">
              <img
                className="img-fluid rounded-3 shadow mb-3"
                src={kiddos}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h4 className="text-dark fw-bold">Rental Homes Calculator</h4>
              <p className="lead">Calculator for investing in rental Homes</p>
              <p>
                Sharing a passion for investing in long-term RE gave me the idea
                of creating a calculator to evaluate deals, currently ongoing
                project with <span className="fw-bold">React, BootStrap</span>
              </p>
              <div>
                <a
                  href="https://longterminvesting.netlify.app/"
                  className="btn bg-danger  mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <RxEnter />
                </a>
                <a
                  href="https://github.com/maderi21/ROI"
                  className="btn bg-secondary mx-1 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <BiGitBranch />
                </a>
              </div>
            </div>
            <div className="col-md">
              <img
                className="img-fluid rounded-3 shadow mb-3"
                src={RE}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
