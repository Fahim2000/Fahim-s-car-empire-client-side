import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://safe-bayou-29542.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          alert("Made admin successfully");
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-center mt-4">Make an Admin</h3>
      <form className="container mt-5 d-flex" onSubmit={handleAdminSubmit}>
        <input
          type="email"
          className="form-control w-75"
          placeholder="Enter email"
          onBlur={handleOnBlur}
        />
        <button className="btn btn-dark ">
          {" "}
          <small>Make Admin</small>{" "}
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
