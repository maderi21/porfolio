import snow from "../popups/images/snowboarding.jpg";
import fife from "../popups/images/fifestyle.jpg";

const PopImage = () => {
  return (
    <>
      <div
        class="modal fade"
        id="first"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            1.project
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-dialog">
          <div class="modal-content">
            <img src={snow} />
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="second"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            2.project
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-dialog">
          <div class="modal-content">
            <img src={fife} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopImage;
