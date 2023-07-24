import aboutme from "../images/aboutme.png";
import Footer from "../components/Footer";
import { RoughNotation } from "react-rough-notation";

const AboutMe = () => {
  return (
    <>
      <section class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img
                class="img-fluid rounded-3 shadow mb-1"
                src={aboutme}
                alt=""
              />
            </div>
            <div class="col-md p-5">
              <h1>Hi, I’m Marek.</h1>
              <h2>It is really nice to see you here!</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quaerat neque id
                ipsa nisi doloremque quos a facere reprehenderit, consequuntur
                delectus expedita numquam itaque voluptate voluptatum iure, illo
                obcaecati ex? Vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md p-5">
              <RoughNotation
                type="highlight"
                show={true}
                color="#fed66d"
                animationDuration="2500"
              >
                <h2>1. phase</h2>
              </RoughNotation>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quaerat neque id
                ipsa nisi doloremque quos a facere reprehenderit, consequuntur
                delectus expedita numquam itaque voluptate voluptatum iure, illo
                obcaecati ex? Vel. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quaerat neque id ipsa nisi doloremque quos a
                facere reprehenderit, consequuntur delectus expedita numquam
                itaque voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <span className="d-flex justify-content-center">
        <button className="btn bg-secondary rounded-5" type="submit">
          1.phase example
        </button>
      </span>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md p-5">
              <RoughNotation
                type="highlight"
                show={true}
                color="#fed66d"
                animationDuration="2500"
              >
                <h2>2. phase</h2>
              </RoughNotation>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quaerat neque id
                ipsa nisi doloremque quos a facere reprehenderit, consequuntur
                delectus expedita numquam itaque voluptate voluptatum iure, illo
                obcaecati ex? Vel. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quaerat neque id ipsa nisi doloremque quos a
                facere reprehenderit, consequuntur delectus expedita numquam
                itaque voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <span className="d-flex justify-content-center">
        <button className="btn bg-secondary rounded-5" type="submit">
          2.phase example
        </button>
      </span>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md p-5">
              <RoughNotation
                type="highlight"
                show={true}
                color="#fed66d"
                animationDuration="2500"
              >
                <h2>3. phase</h2>
              </RoughNotation>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                asperiores labore non, ad aliquid accusantium?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quaerat neque id
                ipsa nisi doloremque quos a facere reprehenderit, consequuntur
                delectus expedita numquam itaque voluptate voluptatum iure, illo
                obcaecati ex? Vel. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quaerat neque id ipsa nisi doloremque quos a
                facere reprehenderit, consequuntur delectus expedita numquam
                itaque voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <span className="d-flex justify-content-center">
        <button className="btn bg-secondary rounded-5 mb-5" type="submit">
          3.phase example
        </button>
      </span>

      <Footer />
    </>
  );
};

export default AboutMe;
