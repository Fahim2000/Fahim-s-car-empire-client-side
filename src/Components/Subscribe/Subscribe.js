import React from "react";

const Subscribe = () => {
  return (
    <div
      className="container shadow-lg p-5"
      style={{ borderRadius: "20px", marginBottom: "520px" }}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-5 fw-bold my-3">
          <h4> Subscribe to get the latest news of exclusive cars</h4>
        </div>
        <div className="col-md-5 d-flex">
          <input
            type="email"
            className="form-control p-3"
            placeholder="Enter email"
          />
          <button className="btn btn-dark">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
