import React from "react";
import "./Registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import registerlogo from '../img/registerlogo.png';


const Registration = () => {
    return (
        <>
            <div className="containers">
                <div className="logo-registers ">
                    <img src={registerlogo} alt="logo" className="logo-registers-img" />
                </div>
            </div>

            <div className="registration-container">
                <div className="registration-card ">
                    <h3>Registration</h3>
                    <div className="card-body">
                        <div className="registration-form-group">
                            <label htmlFor="studentLoginName">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="studentLoginName"
                            />
                        </div>
                        <div className="registration-form-group">
                            <label htmlFor="studentPassword">Last Name:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="studentPassword"
                            />
                        </div>
                        <button className="btn btn-login">Login</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Registration;