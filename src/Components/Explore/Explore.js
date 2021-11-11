import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Explore = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://safe-bayou-29542.herokuapp.com/allCars")

      .then((res) => setCars(res.data));
  }, []);
  return (
    <>
      <div style={{ marginBottom: "480px" }}>
        <Navbar />
        <h1 className="text-center text-warning my-4">
          Here are all our exclusive cars
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {cars.map((car) => {
            return (
              <div className="col " key={car._id}>
                <div className="card h-100">
                  <img src={car.img} className="card-img-top h-100" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{car.name}</h4>
                    <h5 className="card-title my-4">Price : ${car.price}</h5>
                    <p className="card-text">{car.desc}</p>
                    <Link to={`/purchase/${car._id}`}>
                      <button className="w-100 btn btn-dark">
                        Purchase now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
