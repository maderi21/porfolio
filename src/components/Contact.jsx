import { Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Col className="container">
        <h1 className="d-flex justify-content-center mt-5">
          I would love to hear from you
        </h1>
        <p className="d-flex justify-content-center mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, sapiente
          aspernatur, dignissimos error perspiciatis ex hic temporibus tempora
          eligendi nemo, vel sit molestias? Ab maxime quisquam accusamus
          voluptatem atque vitae. Odit, veniam! Reiciendis totam veritatis quae
          neque pariatur commodi nisi assumenda a nobis praesentium odio
          officiis tenetur, officia doloribus repellat.
        </p>
        <form className="">
          <div class="mb-3">
            <label for="Name" class="form-label d-flex justify-content-center">
              Name
            </label>
            <input
              type="Name"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Col>
    </div>
  );
};

export default Contact;
