import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logo from '../img/logo.jpg';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import student from '../img/student.jpg';
import staaf from '../img/staaf.jpg';

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="logo ">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
      </div>

      <div className="nav-bar">
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#standard">Standard</a>
        <a className="nav-link" href="#staff">Staff</a>
        <a className="nav-link" href="#feedback">Feedback</a>
        <a className="nav-link" href="#admin">Admin Panel</a>
        <a className="nav-link" href="#student">Registration</a>
        <a className="nav-link" href="#contact">Contact Us</a>
      </div>

      <div className="row">

        <div className="login-container">
          <div className="card ">
            <h3>Student Login</h3>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="studentLoginName">Login Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentLoginName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentPassword">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="studentPassword"
                />
              </div>
              <button className="btn btn-login">Login</button>
            </div>
            <hr/>
            <div className="login-footer">
              <img src={student} alt="student-icon" className="student-img" />
              <p>Student login with username and password and view reports..</p>
              
            </div>
          </div>
          

          <div className="card">
            <h3>Staff Login</h3>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="staffLoginName">Login Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="staffLoginName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="staffPassword">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="staffPassword"
                />
              </div>
              <button className="btn btn-login">Login</button>
            </div>
            <hr />
            <div className="login-footer">
              <img src={staaf} alt="staff-icon" className="login-icon" />
              <p>Staff can make attendance of students and generate reports after login to system.</p>
            </div>
          </div>
        </div>




        <div className="image-sliders">
          <img src={slider1} alt="slider1" className="slider-img" />
          <img src={slider2} alt="slider2" className="slider-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
