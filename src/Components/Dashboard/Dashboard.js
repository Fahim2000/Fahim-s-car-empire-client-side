import "react-pro-sidebar/dist/css/styles.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "./AddProduct/AddProduct";
import AddReview from "./AddReview/AddReview";
import "./dashboard.css";
import DashboardHome from "./DashboardHome/DashboardHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-2 bg-dark responsive-sidebar">
          <ul className="nav flex-column text-center text-md-start">
            <li className="mt-3">
              <Link className="nav-link" to={`/home`}>
                <span className="h6 text-light ">Go to Home</span>
              </Link>
            </li>
            {!admin && (
              <>
                <li>
                  <Link className="nav-link" to={`${url}/myOrders`}>
                    <span className="h6 text-light">My Orders</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={`${url}/reviews`}>
                    <span className="h6 text-light">Reviews</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={`${url}/pay`}>
                    <span className="h6 text-light">Pay</span>
                  </Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link className="nav-link" to={`${url}/manageAllOrders`}>
                    <span className="h6 text-light">Manage All Orders</span>
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to={`${url}/addProduct`}>
                    <span className="h6 text-light">Add a Product</span>
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to={`${url}/makeAdmin`}>
                    <span className="h6 text-light">Make Admin</span>
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to={`${url}/manageProducts`}>
                    <span className="h6 text-light">Manage Products</span>
                  </Link>
                </li>
              </>
            )}
            <li>
              {" "}
              <span
                onClick={logOut}
                className="h6 text-warning nav-link"
                type="button"
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            <PrivateRoute path={`${path}/pay`}>
              <Payment />
            </PrivateRoute>

            <PrivateRoute path={`${path}/myOrders`}>
              <MyOrders />
            </PrivateRoute>

            <PrivateRoute path={`${path}/reviews`}>
              <AddReview />
            </PrivateRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders />
            </AdminRoute>

            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>

            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts />
            </AdminRoute>

            <Route exactpath={`${path}`}>
              <DashboardHome />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
