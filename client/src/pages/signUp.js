import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/users", {
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace("/login");
        } else {
          console.log("USERNAME TAKEN");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <div className="container">
        <h4>Sign Up</h4>
      </div>
      <form className="form-signup">
        <div className="container">
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="username"
            placeholder="Email address"
            value={signUpCreds.username}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="Password"
            value={signUpCreds.password}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
