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
        </div>

    )
}




