import React from "react";
import hero from "../images/hero.png";

const Header = () => {
  return (
    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md text-center">
            <h1 className="">
              Hi! My name is
              <span className="text-dark fw-bold mx-2">Marek Kostolansky</span>
            </h1>
            <h1>Front End Developer</h1>
          </div>
          <div class="col-md">
            <img className="img-fluid" src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
