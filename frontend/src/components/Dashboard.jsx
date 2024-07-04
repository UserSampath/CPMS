import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/images/logo.png"; // Assuming you have a logo image

const Dashboard = () => {
  const [formData, setFormData] = useState({
    address: "",
    longitude: "",
    imageUrl: "",
    spotSize: "",
    facilities: "",
    regCertificate: "",
    latitude: "",
    parkName: "",
    numberOfSpots: "",
    price: "",
    specialNotes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData); 
    // Reset form fields after submission if needed
    setFormData({
      address: "",
      longitude: "",
      imageUrl: "",
      spotSize: "",
      facilities: "",
      regCertificate: "",
      latitude: "",
      parkName: "",
      numberOfSpots: "",
      price: "",
      specialNotes: ""
    });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex justify-content-center align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none w-100"
              style={{ height: "150px" }}
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
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100">
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0 mr-2 ml-2">
          <div className="d-flex justify-content-between align-items-center p-2 ">
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search..."
            />
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-4 me-3"></i>
              <i className="bi bi-person fs-4"></i>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center p-2">
            <div className="d-flex">
              <Link
                to="/dashboard"
                className="me-3 text-decoration-none text-danger"
              >
                / Dashboard
              </Link>
              <Link
                to="/register-car-park"
                className="text-decoration-none text-secondary"
              >
                / Register Car Park
              </Link>
            </div>
          </div>
          <div className="p-2 mt-2 bg-secondary d-flex justify-content-left shadow">
            <h4>Parking lot registration form</h4>
          </div>
          <div className="p-2 mt-2">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="longitude" className="form-label">
                      Longitude
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="longitude"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">
                      Image URL
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="imageUrl"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="spotSize" className="form-label">
                      Spot Size
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="spotSize"
                      name="spotSize"
                      value={formData.spotSize}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="facilities" className="form-label">
                      Facilities
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="facilities"
                      name="facilities"
                      value={formData.facilities}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="regCertificate" className="form-label">
                      Registration Certificate Number
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="regCertificate"
                      name="regCertificate"
                      value={formData.regCertificate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Right Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="latitude" className="form-label">
                      Latitude
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="latitude"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="parkName" className="form-label">
                      Name of the Park
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      id="parkName"
                      name="parkName"
                      value={formData.parkName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="numberOfSpots" className="form-label">
                      Number of Spots
                    </label>
                    <input
                      type="number"
                      className="form-control border border-dark"
                      id="numberOfSpots"
                      name="numberOfSpots"
                      value={formData.numberOfSpots}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control border border-dark"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specialNotes" className="form-label">
                      Special Notes
                    </label>
                    <textarea
                      className="form-control border border-dark"
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
