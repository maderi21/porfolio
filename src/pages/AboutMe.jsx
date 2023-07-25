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
                I enjoy building tools that are simple and working.Being self
                taught developer with year + experience I had plenty of
                opportunities to learn about myself as well as discipline and
                goal settings. Seems like I just started, however I worked with
                tech-dev almost the whole of my profesional life and the
                notorious one class in high school.I came acrros web-dev
                multiple times in my life and would like to go through them with
                you.
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
                The notorios one class of web-dev in high school
              </p>
              <p>
                My first ever web-dev interaction was done in high school back
                in 2006, when we had to finish a project at the end of the
                class. I really did like snowboarding so of course this was the
                project topic. It was whole build in one text file, I mean the
                notepad text file, no IDE as we use now.It was a bit chalange at
                first, but I enjoyed the process of building something creative
                - cannot remember the mark from teacher.
              </p>
            </div>
          </div>
        </div>
      </section>
      <span className="d-flex justify-content-center">
        <button
          className="btn bg-secondary rounded-5"
          type="submit"
          data-bs-toggle="modal"
          data-bs-target="#first"
        >
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
                Firt business - blog, selling adds, couching and course
                creation.
              </p>
              <p>
                When I graduated college in 2013 I moved to England. I had
                several jobs and this one side hustle where I would firstly
                create a blog in <span className="fw-bold">WordPress</span> -
                writing about things I love /travel/business/food/learning and
                then using <span className="fw-bold">Google AdSense</span> to
                monetize it. It went ok, but I was hungry and told I could
                inspire people and help them create their own businesses online.
                So I wrote an ebook, which was selling on{" "}
                <span className="fw-bold">Amazon Kindle</span>, build new
                website with coaching services used{" "}
                <span className="fw-bold">Mailchimp</span> to automate my
                marketing. Later on, I created an online course for which you
                could signup for and was all automated. For Social media I used
                <span className="fw-bold">Hootsuite</span> to manage content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <span className="d-flex justify-content-center">
        <button
          className="btn bg-secondary rounded-5"
          type="submit"
          data-bs-toggle="modal"
          data-bs-target="#second"
        >
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

      <Footer />
    </>
  );
};

export default AboutMe;
