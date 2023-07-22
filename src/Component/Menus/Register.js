import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Style/form.css"
import Head from "./Head";

export default function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password length validation
    if (state.password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }

    // Confirm password validation
    if (state.password !== state.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    try {
      const response = await axios.post(
        "https://firstbackendapi.onrender.com/api/user/register",
        state
      );
      let res = await response.data;
      console.log(res);
      localStorage.setItem("token :", res.registerToken);
      console.log(res.registerToken);
      alert("Registration successful");
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <Head/>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Signup</h1>
          </header>
          <main className="signup-body">
            <form action="#">
              <p>
                {/* <label for="fullname">Full Name</label> */}
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your name"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </p>
              <p>
                {/* <label for="email">E-mail</label> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your E-mail"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </p>
              <p>
                {/* <label for="mobile">Phone No.</label> */}
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your Phone number"
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                  maxLength={10} // Set the maximum length to 10 digits
                  pattern="[0-9]{10}" // Set the pattern for 10 digits
                  title="Please enter a valid 10-digit phone number" // Add a title for the pattern validation error
                  autoComplete="phone number"
                  required
                />
              </p>
              <p>
                {/* <label for="password">Password</label> */}
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  autoComplete="new-password" // Add autocomplete attribute
                  required
                />
              </p>
              <p>
                {/* <label htmlFor="confirmPassword">Confirm Your Password</label> */}
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your Password"
                  name="confirmPassword"
                  value={state.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password" // Add autocomplete attribute
                  required
                />
              </p>

              <p>
                <input
                  type="submit"
                  id="submit"
                  value="Create Account"
                  onClick={handleSubmit}
                />
              </p>
            </form>
          </main>

          <footer className="signup-footer">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </footer>
        </div>
        {/* <div className="circle c1"></div>
        <div className="circle c2"></div> */}
      </div>
    </div>
  );
}
//https://firstbackendapi.onrender.com
