import React from "react";
import hero from "../images/hero.png";
import { RoughNotation } from "react-rough-notation";

const Header = () => {
  return (
    <section className="pt-3 mt-3">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md">
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
            <img className="img-fluid px-5" src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
