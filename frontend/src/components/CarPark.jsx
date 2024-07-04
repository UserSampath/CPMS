import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

const CarPark = () => {
  // Dummy data for registration requests
  const registrationRequests = [
    {
      id: 1,
      carParkName: "Park A",
      ownerName: "John Doe",
      location: "City A",
      spaces: 50,
    },
    {
      id: 2,
      carParkName: "Park B",
      ownerName: "Jane Smith",
      location: "City B",
      spaces: 30,
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-10 col-xl-2 px-sm-0 px-0 bg-success">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex justify-content-center align-items-center pb-3  mt-md-3 me-md-auto text-white text-decoration-none w-100"
              style={{ height: "150px" }} // Adjust height as needed
            >
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "100%" }}
              />
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle d-flex justify-content-between"
                >
                  <span>
                    <i className="fs-4 bi-speedometer2 ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link text-white px-0 align-middle d-flex justify-content-between"
                >
                  <span>
                    <i className="fs-4 bi-people ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">
                      User Management
                    </span>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/car-park"
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between"
                >
                  <span>
                    <i className="fs-4 bi-columns ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">
                      Car Park Management
                    </span>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/reservations"
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between"
                >
                  <span>
                    <i className="fs-4 bi-calendar-check ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">
                      Reservations Management
                    </span>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/review-ratings"
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between"
                >
                  <span>
                    <i className="fs-4 bi-star ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">
                      Review & Ratings
                    </span>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/payments"
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between"
                >
                  <span>
                    <i className="fs-4 bi-cash ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">
                      Payments Management
                    </span>
                  </span>
                </Link>
              </li>
            </ul>

            {/* Search Box */}
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-between align-items-center">
            <h4 className="m-0">Car Park Management</h4>
            <div className="ms-auto">
              {/* Notification icon */}
              <i className="bi bi-bell fs-4 text-muted"></i>{" "}
            </div>
          </div>

          <div className="p-2">
            {/* Search field and add button */}
            <div className="d-flex align-items-center mb-3">
              {/* Search field */}
              <div className="me-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>

              {/* Add button */}
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs" id="carParkTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="registration-requests-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#registration-requests"
                  type="button"
                  role="tab"
                  aria-controls="registration-requests"
                  aria-selected="true"
                >
                  Registration Requests
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="accepted-car-parks-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#accepted-car-parks"
                  type="button"
                  role="tab"
                  aria-controls="accepted-car-parks"
                  aria-selected="false"
                >
                  Accepted Car Parks
                </button>
              </li>
            </ul>

            {/* Tab panes */}
            <div className="tab-content" id="carParkTabContent">
              {/* Registration Requests tab pane */}
              <div
                className="tab-pane fade show active"
                id="registration-requests"
                role="tabpanel"
                aria-labelledby="registration-requests-tab"
              >
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col">Car Park Name</th>
                      <th scope="col">Owner Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Number of Spaces</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrationRequests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.carParkName}</td>
                        <td>{request.ownerName}</td>
                        <td>{request.location}</td>
                        <td>{request.spaces}</td>
                        <td>
                          <button className="btn btn-sm btn-info me-2">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Accepted Car Parks tab pane */}
              <div
                className="tab-pane fade"
                id="accepted-car-parks"
                role="tabpanel"
                aria-labelledby="accepted-car-parks-tab"
              >
                {/* Content for Accepted Car Parks tab */}
                <p>Content for Accepted Car Parks tab goes here.</p>
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CarPark;
