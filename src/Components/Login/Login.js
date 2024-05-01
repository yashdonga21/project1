import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lg.css';
import { useUser } from './Usercontext';

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useUser();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        setUser(formData);
        navigate("/");
    };

    return (
        <div>
            <div className="section">
                <div className='sign-up-form'>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <p className="signup-title">Register </p>
                        <p className="signup-message">Signup now and get full access to our app. </p>
                        <div className="signup-flex">
                            <label>
                                <input
                                    className="signup-input"
                                    type="text"
                                    placeholder=""
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Firstname</span>
                            </label>

                            <label>
                                <input
                                    className="signup-input"
                                    type="email"
                                    placeholder=""
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Email</span>
                            </label>
                        </div>

                        <label>
                            <input
                                className="signup-input"
                                type="password"
                                placeholder=""
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span>Password</span>
                        </label>
                        <label>
                            <input
                                className="signup-input"
                                type="password"
                                placeholder=""
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <span>Confirm password</span>
                        </label>
                        <button className="signup-submit" type="submit">Submit</button>
                        <p className="signup-signin">Already have an account? <a href="/Login">Signin</a> </p>
                    </form>
                </div>
            </div>
           



    
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <label for="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3 text-white">Log In</h4>
                                                        <div className="form-group">
                                                            <input type="email" name="logemail"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                id="logemail"
                                                                autocomplete="none" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                id="logpass" autocomplete="none" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <a href="/" className="btn1 mt-4">submit</a>
                                                        <p className="mb-0 mt-4 text-center">
                                                            <a href="#0" className="link">Forgot your password?</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
                                                        <div className="form-group">
                                                            <input type="text" name="logname"
                                                                className="form-style"
                                                                placeholder="Your Full Name"
                                                                id="logname"
                                                                autocomplete="none" />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="email" name="logemail"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                id="logemail" autocomplete="none" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                id="logpass"
                                                                autocomplete="none" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <a href="/" className="btn1 mt-4">submit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>

    )
}




