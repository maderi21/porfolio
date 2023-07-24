import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

const About = () => {
  return (
    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h3 className="fw-light">About me</h3>
            <p>
              I am everlearnig front end dev from{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="#fed66d"
                animationDuration="2500"
              >
                Slovakia
              </RoughNotation>
              , having academic backgroung but working in completely different
              field. I am currently looking for more web dev experience,
              <RoughNotation
                type="box"
                show={true}
                color="tomato"
                animationDuration="2500"
              >
                will you give me a shot?
              </RoughNotation>
            </p>
            <Link
              to="/about"
              className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
            >
              continue to read...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
