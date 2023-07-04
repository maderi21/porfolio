import aboutme from "../images/aboutme.png";
import third from "../images/third.jpg";
import snowboard from "../images/snowboarding.jpg";
import fifestyle from "../images/fifestyle.jpg";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <>
      <section class="p-5" id="learn">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img class="img-fluid rounded-3" src={aboutme} alt="" />
            </div>
            <div class="col-md p-5">
              <h1 className="bg-danger">Hi, I’m Marek.</h1>
              <h2 class="bg-danger">It is really nice to see you here</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat neque id ipsa nisi doloremque quos a facere
                reprehenderit, consequuntur delectus expedita numquam itaque
                voluptate voluptatum iure, illo obcaecati ex? Vel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="p-5 bg-dark" id="learn">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5 text-light">
              <h2>1 phase</h2>
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
            </div>
            <div class="col-md">
              <img
                class="img-fluid rounded-3 shadow p-3 mb-3"
                src={snowboard}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="p-5" id="learn">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img
                class="img-fluid rounded-3 shadow p-3 mb-3"
                src={fifestyle}
                alt=""
              />
            </div>
            <div class="col-md p-5">
              <h2>2 phase</h2>
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
            </div>
          </div>
        </div>
      </section>
      <section class="p-5 bg-dark" id="learn">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5 text-light">
              <h2>3 phase</h2>
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
            </div>
            <div class="col-md">
              <img
                class="img-fluid rounded-3 shadow p-3 mb-3"
                src={third}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutMe;
