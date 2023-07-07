import React from "react";
import hero from "../images/hero.png";

const Header = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md text-center">
            <h1 className="">
              Hi! My name is
              <span className="text-dark fw-bold mx-2">Marek Kostolansky</span>
            </h1>
            <h1>Front End Developer</h1>
          </div>
          <div className="col-md">
            <img className="img-fluid" src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
