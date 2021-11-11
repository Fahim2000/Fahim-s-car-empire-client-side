import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://safe-bayou-29542.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <>
      <h2 className="container text-center text-warning">
        Top reviews of customers
      </h2>
      <div
        className=" container w-50 my-5 slider"
        style={{ backgroundColor: "#221512" }}
      >
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner text-center">
            {reviews.map((review, index) => {
              return (
                <div
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                  data-bs-interval="2000"
                  key={review._id}
                >
                  <div className="d-flex flex-column">
                    <div className="w-100 py-5">
                      <img
                        src={review.img}
                        className="img-fluid  round-img  center"
                        alt=""
                      />
                    </div>
                    <h4 className="text-light customer-name">{review.name}</h4>
                    <h4>
                      <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                      ></Rating>
                    </h4>
                    <p className="text-light px-5 text-center pb-5 review">
                      {review.review}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
