import about from "../images/about.jpg";

const About = () => {
  return (
    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img class=" img-fluid rounded-3" src={about} alt="" />
          </div>
          <div class="col-md p-5">
            <h3 className="fw-light">About me</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              neque id ipsa nisi doloremque quos a facere reprehenderit,
              consequuntur delectus expedita numquam itaque voluptate voluptatum
              iure, illo obcaecati ex? Vel.
            </p>
            <a
              href=""
              className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
            >
              continue to read...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
