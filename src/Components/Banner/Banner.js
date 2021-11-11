import React from "react";

const Banner = () => {
  return (
    <div
      className="img-fluid d-flex  align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundAttachment: " fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")`,
      }}
    >
      <div>
        <h1
          className="text-light text-center text-capitalize my-4 px-2"
          style={{ fontSize: "3rem" }}
        >
          High-end Vehicles
        </h1>
        <h5
          className="  px-2  text-light  text-center"
          style={{ color: "gray" }}
        >
          Welcome to Fahim's car Empire, the ultimate collection of high-end,
          performance cars!
        </h5>
      </div>
    </div>
  );
};

export default Banner;
