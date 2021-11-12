import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://safe-bayou-29542.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Review has been  Added");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div
      className="container mt-5"
      style={{ height: "100vh", marginBottom: "200px" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <label forhtml="exampleInputName" className="form-label">
            Name of User
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            {...register("name")}
          />
        </div>
        {/* rating */}
        <h6>Rate us : </h6>
        {[1, 2, 3, 4, 5].map((e, index) => {
          return (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={index + 1}
                {...register("rating")}
              />
              <label className="form-check-label" for="inlineRadio1">
                {index + 1}
              </label>
            </div>
          );
        })}

        <div className="my-4">
          <label forhtml="exampleInputReview" className="form-label">
            Write your Review
          </label>
          <textarea
            cols="10"
            rows="10"
            className="form-control"
            id="exampleInputReview"
            {...register("review")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputImg" className="form-label">
            Image Url
          </label>
          <input
            className="form-control"
            id="exampleInputImg"
            {...register("img")}
          />
        </div>

        <input
          //   className="btn btn-primary"
          type="submit"
          className="btn btn-dark"
          value="Add a review"
        />
      </form>
    </div>
  );
};

export default AddReview;
