import { useState } from "react";

const Post = () => {
  const [Selected, setSelected] = useState(null);
  return (
    <div className="post">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Post a Request</h1>
            <form>
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
                  <span className="radio-contents">Delivery Requests</span>
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
                  <span className="radio-contents">Courier Travels</span>
                </label>
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
