import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/form.css";
import Head from "./Head";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login:", state.email, state.password);
    console.log(state);

    try {
      // const token = localStorage.getItem("token :");
      const response = await axios.post(
        "https://firstbackendapi.onrender.com/api/user/login",
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // },
        state
      );
      let res = await response.data;
      console.log(res);
      localStorage.setItem("token :", res.token);
      console.log(res.token);
      alert("Login successfully");
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }

    setState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <Head />
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Login</h1>
          </header>
          <main className="signup-body">
            <form onSubmit={handleSubmit}>
              <p>
                {/* <label for="email">Your E-mail</label> */}
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
                {/* <label for="password">Your Password</label> */}
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </p>
              <p>
                <input type="submit" id="submit" value="Login" />
              </p>
            </form>
          </main>

          <footer className="signup-footer">
            <p>
              Already have an account? <Link to="/register">Register</Link>
              <br />
              <Link to="*">Forgot Password</Link>
            </p>
          </footer>
        </div>
        {/* <div className="circle c1"></div>
        <div className="circle c2"></div> */}
      </div>
    </div>
  );
}
