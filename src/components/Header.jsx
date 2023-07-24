import React from "react";
import hero from "../images/hero.png";
import { RoughNotation } from "react-rough-notation";

const Header = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md text-center">
            <h1 className="display-4">
              Hi! My name is
              <span className="text-dark fw-bold mx-3">Marek Kostolansky</span>
            </h1>
            <RoughNotation
              type="highlight"
              show={true}
              color="#fed66d"
              animationDuration="1780"
            >
              <h1>Front End Developer</h1>
            </RoughNotation>
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
