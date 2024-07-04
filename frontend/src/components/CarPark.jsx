import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import axios from "axios";
import ViewCarPark from "./../components/ViewCarPark";
const CarPark = () => {
  const [openBar, setOpenBar] = useState("request");
  const [registrationRequests, setRegistrationRequests] = useState([]);
  const [acceptedCarParks, setAcceptedCarParks] = useState([]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedCarPark, setSelectedCarPark] = useState({});
  const getRegistrationRequests = async () => {
    try {
      const res = await axios.get("http://localhost:8000/carPark/getAll");
      if (res.data.result.status) {
        setRegistrationRequests(
          res.data.result.result.filter((item) => item.is_Accepted === false)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAcceptedCarParks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/carPark/getAll");
      if (res.data.result.status) {
        setAcceptedCarParks(
          res.data.result.result.filter((item) => item.is_Accepted === true)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (openBar === "request") {
      getRegistrationRequests();
    } else if (openBar === "accepted") {
      getAcceptedCarParks();
    }
  }, [openBar]);

  const acceptRequest = async (request) => {
    await axios
      .put("http://localhost:8000/carPark/update", {
        id: request.id,
        is_Accepted: true,
      })
      .then((res) => {
        console.log(res.data.result.status)
        if (res.data.result.status) {
          if (openBar === "request") {
            getRegistrationRequests();
          } else if (openBar === "accepted") {
            getAcceptedCarParks();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectRequest = async (request) => {
    await axios
      .delete(`http://localhost:8000/carPark/delete/${request.id}`)
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          if (openBar === "request") {
            getRegistrationRequests();
          } else if (openBar === "accepted") {
            getAcceptedCarParks();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };


  return (
    <div className="container-fluid">
      <ViewCarPark
        show={showViewModal}
        onHide={() => setShowViewModal(false)}
        selectedCarPark={selectedCarPark}
      />
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
              id="menu">
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle d-flex justify-content-between">
                  <span>
                    <i className="fs-4 bi-speedometer2 ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link text-white px-0 align-middle d-flex justify-content-between">
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
                  to="/car-park"
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
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between">
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
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between">
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
                  className="nav-link px-0 align-middle text-white d-flex justify-content-between">
                  <span>
                    <i className="fs-4 bi-cash ms-2"></i>
                    <span className="ms-3 d-none d-sm-inline">
                      Payments Management
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
            {/* User Profile Section */}
            <div className="mt-auto">
              <div className="d-flex align-items-center p-2">
                <span className="text-white me-3">Samadhi Anupali</span>
                <i className="bi bi-box-arrow-in-right fs-4"></i>
              </div>
            </div>

            {/* Search Box */}
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-between align-items-center">
            <h4 className="m-0">Car Park Management</h4>
            <div className="ms-auto">
              <i className="bi bi-bell fs-4 text-muted"></i>{" "}
            </div>
          </div>

          <div className="p-2">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>

            <ul className="nav nav-tabs" id="carParkTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  onClick={() => setOpenBar("request")}
                  className={`nav-link ${
                    openBar === "request" ? "active" : ""
                  }`}
                  id="registration-requests-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#registration-requests"
                  type="button"
                  role="tab"
                  aria-controls="registration-requests"
                  aria-selected={openBar === "request"}>
                  Registration Requests
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  onClick={() => setOpenBar("accepted")}
                  className={`nav-link ${
                    openBar === "accepted" ? "active" : ""
                  }`}
                  id="accepted-car-parks-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#accepted-car-parks"
                  type="button"
                  role="tab"
                  aria-controls="accepted-car-parks"
                  aria-selected={openBar === "accepted"}>
                  Accepted Car Parks
                </button>
              </li>
            </ul>

            <div className="tab-content" id="carParkTabContent">
              {openBar === "request" && (
                <div
                  className="tab-pane fade show active"
                  id="registration-requests"
                  role="tabpanel"
                  aria-labelledby="registration-requests-tab">
                  <table className="table mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Car Park Name</th>
                        <th scope="col">Certificate no</th>
                        <th scope="col">Number of Spots</th>
                        <th scope="col">Spot Size</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrationRequests.map((request) => (
                        <tr key={request.id}>
                          <td>{request.name_of_the_park}</td>
                          <td>{request.registration_certificate_no}</td>
                          <td>{request.number_of_spots}</td>
                          <td>{request.spot_size}</td>
                          <td>
                            <button
                              onClick={() => {
                                setShowViewModal(true);
                                setSelectedCarPark(request);
                              }}
                              className="btn btn-sm btn-info me-2">
                              View
                            </button>
                            <button
                              onClick={() => acceptRequest(request)}
                              className="btn btn-sm btn-dark me-2">
                              Accept
                            </button>
                            <button
                              onClick={() => rejectRequest(request)}
                              className="btn btn-sm btn-danger">
                              Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {openBar === "accepted" && (
                <div
                  className="tab-pane fade show active"
                  id="accepted-car-parks"
                  role="tabpanel"
                  aria-labelledby="accepted-car-parks-tab">
                  <table className="table mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Car Park Name</th>
                        <th scope="col">Certificate no</th>
                        <th scope="col">Number of Spots</th>
                        <th scope="col">Spot Size</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {acceptedCarParks.map((carPark) => (
                        <tr key={carPark.id}>
                          <td>{carPark.name_of_the_park}</td>
                          <td>{carPark.registration_certificate_no}</td>
                          <td>{carPark.number_of_spots}</td>
                          <td>{carPark.spot_size}</td>
                          <td>
                            <button
                              onClick={() => {
                                setShowViewModal(true);
                                setSelectedCarPark(carPark);
                              }}
                              className="btn btn-sm btn-info me-2">
                              View
                            </button>
                            <button
                              onClick={() => rejectRequest(carPark)}
                              className="btn btn-sm btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPark;
