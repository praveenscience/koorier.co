import { useState } from "react";

const Post = () => {
  const [Selected, setSelected] = useState(null);
  return (
    <div className="Post">
      <h1>Post a Request</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form>
              <h2>Tell us what you are posting</h2>
              <div className="d-flex">
                <div className="styled-radio">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="delivery"
                      checked={Selected === "delivery"}
                      onChange={() => {
                        setSelected("delivery");
                      }}
                    />
                    <span className="radio-contents">
                      <span className="radio-contents-box">
                        <i
                          className={`check-icon fa fa${
                            Selected === "delivery" ? "-check" : ""
                          }-circle`}
                        ></i>
                        <i className="fa fa-archive"></i>
                        <strong>Delivery Requests</strong>
                      </span>
                      <span className="d-block pt-3">
                        <span className="d-block">
                          <strong>Delivery Requests</strong>
                        </span>
                        <span className="d-block">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit quia quo, laborum doloremque maiores
                          dolorem voluptatem facilis fuga repellendus. Incidunt
                          sit officia quisquam sequi necessitatibus dolorem
                          numquam perferendis reiciendis unde.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="styled-radio">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="courier"
                      checked={Selected === "courier"}
                      onChange={() => {
                        setSelected("courier");
                      }}
                    />
                    <span className="radio-contents">
                      <span className="radio-contents-box">
                        <i
                          className={`check-icon fa fa${
                            Selected === "courier" ? "-check" : ""
                          }-circle`}
                        ></i>
                        <i className="fa fa-certificate"></i>
                        <strong>Courier Travels</strong>
                      </span>
                      <span className="d-block pt-3">
                        <span className="d-block">
                          <strong>Courier Travels</strong>
                        </span>
                        <span className="d-block">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit quia quo, laborum doloremque maiores
                          dolorem voluptatem facilis fuga repellendus. Incidunt
                          sit officia quisquam sequi necessitatibus dolorem
                          numquam perferendis reiciendis unde.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              {Selected && (
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => {
                    setSelected(null);
                  }}
                >
                  Reset
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
