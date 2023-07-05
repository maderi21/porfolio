import gabriela from "../images/gabriela.jpg";
import { RxEnter } from "react-icons/rx";
import { BiGitBranch } from "react-icons/bi";
import kopce from "../images/kopce.jpg";
import kiddos from "../images/kiddos.jpg";
import RE from "../images/realestate.jpg";

const Portfolio = () => {
  return (
    <>
      <section class="p-5 ">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h4 className="text-dark">Hairstylist landing page</h4>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
              <div className="mx-2">
                <button class="btn bg-danger rounded-5 mx-3 mb-3" type="submit">
                  Live Demo <RxEnter />
                </button>
                <button
                  class="btn bg-secondary rounded-5 mx-3 mb-3"
                  type="submit"
                >
                  Code <BiGitBranch />
                </button>
              </div>
            </div>
            <div class="col-md">
              <img
                class="img-fluid rounded-3 shadow mb-3"
                src={gabriela}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="p-5 ">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h4 className="text-dark">Vinary e-shop</h4>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
              <div className="mx-2">
                <button class="btn bg-danger rounded-5 mx-3 mb-3" type="submit">
                  Live Demo <RxEnter />
                </button>
                <button
                  class="btn bg-secondary rounded-5 mx-3 mb-3"
                  type="submit"
                >
                  Code <BiGitBranch />
                </button>
              </div>
            </div>
            <div class="col-md">
              <img class="img-fluid rounded-3 shadow mb-3" src={kopce} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="p-5 ">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h4 className="text-dark">Kids blog</h4>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
              <div className="mx-2">
                <button class="btn bg-danger rounded-5 mx-3 mb-3" type="submit">
                  Live Demo <RxEnter />
                </button>
                <button
                  class="btn bg-secondary rounded-5 mx-3 mb-3"
                  type="submit"
                >
                  Code <BiGitBranch />
                </button>
              </div>
            </div>
            <div class="col-md">
              <img
                class="img-fluid rounded-3 shadow mb-3"
                src={kiddos}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="p-5 ">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h4 className="text-dark">Rental Homes Calculator</h4>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
              <div className="mx-2">
                <button class="btn bg-danger rounded-5 mx-3 mb-3" type="submit">
                  Live Demo <RxEnter />
                </button>
                <button
                  class="btn bg-secondary rounded-5 mx-3 mb-3"
                  type="submit"
                >
                  Code <BiGitBranch />
                </button>
              </div>
            </div>
            <div class="col-md">
              <img class="img-fluid rounded-3 shadow mb-3" src={RE} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
