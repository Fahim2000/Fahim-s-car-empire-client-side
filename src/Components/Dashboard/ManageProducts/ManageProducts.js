import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [manageProducts, setManageProducts] = useState([]);

  document.title = "Manage All Trips";
  useEffect(() => {
    axios
      .get("https://safe-bayou-29542.herokuapp.com/allCars")
      .then((res) => setManageProducts(res.data));
  }, []);

  // Handle delete functionality
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios
        .delete(`https://safe-bayou-29542.herokuapp.com/allCars/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = manageProducts.filter(
              (product) => product._id !== id
            );
            setManageProducts(remaining);
          }
        });
    }
  };

  if (!manageProducts) {
    return (
      <div
        className=" spinner-border text-primary text-center"
        role="status"
      ></div>
    );
  } else if (manageProducts.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "530px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No Products available</h2>
      </div>
    );
  } else {
    return (
      <div
        style={{ marginBottom: "470px" }}
        className="container table-responsive "
      >
        <table className="table caption-top mt-3">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">Sr.</th>

              <th scope="col">Name of Car</th>

              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {manageProducts.map((product, index) => {
              return (
                <tr key={product._id}>
                  <th scope="row">{index + 1}</th>

                  <td>{product.name}</td>
                  <td>$ {product.price}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ManageAllOrders;
