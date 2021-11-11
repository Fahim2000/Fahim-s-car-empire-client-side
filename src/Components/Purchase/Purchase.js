import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
const Purchase = () => {
  const [details, setDetails] = useState([]);
  const history = useHistory();
  const { carID } = useParams();
  const { user } = useAuth();
  const newData = details.find((datas) => datas._id === carID);
  useEffect(() => {
    axios
      .get("https://safe-bayou-29542.herokuapp.com/allCars")

      .then((res) => setDetails(res.data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.img = newData?.img;
    data.status = "Pending";
    axios
      .post("https://safe-bayou-29542.herokuapp.com/purchasedCars", data)
      .then((res) => {
        if (res.data.acknowledged) {
          alert("Your Car has been Purchased successfully");
          history.push("/");
          reset();
        }
      });
    console.log(data);
  };

  if (!newData) {
    return (
      <div>
        <h2 className="text-center">Loading....</h2>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container mt-5" style={{ marginBottom: "480px" }}>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div>
                <img
                  src={newData.img}
                  className="img-fluid w-50 ms-4 mb-4"
                  alt=""
                />
              </div>
              <h3>Description of {newData.name}</h3>
              <p> {newData?.desc} </p>
              <h3>Fahim's car empire benefits</h3>
              <ul>
                <li>7 Days Money Back Guarantee</li>
                <li>6 Months Comprehensive Warranty</li>
                <li>6 Months Pan India Road Side Assistance</li>
                <li>Free RC Transfer</li>
              </ul>
            </div>
            <div className="col-md-5">
              <div className="container  ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label forhtml="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input
                      id="exampleInputName"
                      className="form-control"
                      defaultValue={user?.displayName}
                      {...register("userName")}
                    />
                  </div>
                  <div className="mb-3">
                    <label forhtml="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      defaultValue={user?.email}
                      {...register("userEmail")}
                    />
                  </div>
                  <div className="mb-3">
                    <label forhtml="exampleInputCarName" className="form-label">
                      Name of car
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputCarrName"
                      defaultValue={newData?.name}
                      {...register("name")}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      forhtml="exampleInputCarPrice"
                      className="form-label"
                    >
                      Price
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputCarPrice"
                      defaultValue={newData?.price}
                      {...register("price")}
                    />
                  </div>
                  <div className="mb-3">
                    <label forhtml="exampleInputPhone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPhone"
                      {...register("phone")}
                    />
                  </div>
                  <div className="mb-3">
                    <label forhtml="exampleInputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputAddress"
                      {...register("address", { required: true })}
                    />
                  </div>

                  <input
                    className="btn btn-dark"
                    type="submit"
                    value="Proceed"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Purchase;
