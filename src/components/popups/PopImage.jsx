import snow from "../popups/images/snowboarding.jpg";
import fife from "../popups/images/fifestyle.jpg";

const PopImage = () => {
  return (
    <>
      <div
        className="modal fade"
        id="first"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            1.project
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-dialog">
          <div className="modal-content">
            <img src={snow} />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="second"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            2.project
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-dialog">
          <div className="modal-content">
            <img src={fife} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopImage;
