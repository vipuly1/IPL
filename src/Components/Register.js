import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router";
import { history } from "../App";
import "../CSS/register.css"

function Register() {
  const [isvalid, setIsValid] = useState(true);
  const [selectedType, setSelectedType] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    if (
      (e.target.usertype.value === "Admin" &&
        e.target.adminCode.value === "35") ||
      e.target.usertype.value === "Member"
    ) {
      setIsValid(true);
      const userData = {
        userName: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        confirmPass: e.target.confirmPassword.value,
        isAdmin: e.target.usertype.value,
      };
      axios({
        method: "post",
        url: "/register",
        data: userData,
      })
        .then((response) => {
          console.log(response);
          if (response.data !== true) {
            localStorage.setItem("loginStatus", true);
            window.location.href = "/";
          } else {
            let userExists = document.getElementById("userExists");
            userExists.textContent = "user already exists";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsValid(false);
    }
  };

  return (
    <div id="register-container">
      <form onSubmit={registerUser} id="form">
        <label>
          Full Name<br></br>
          <input type="text" className="input-form"  name="name" ></input>
        </label>
        <br></br>
        <label>
          Email<br></br>
          <input type="email" className="input-form" name="email" required></input> <br></br>{" "}
          {/*apply on change to check if the user already exists*/}
          <span id="userExists"></span>
        </label>
        <br></br>
        <label>
          Password<br></br>
          <input type="password" className="input-form" name="password" required></input>
        </label>
        <br></br>
        <label>
          Confirm Password<br></br>
          <input type="password" className="input-form" name="confirmPassword" required></input>
        </label>
        <br></br>
        <label>
          User type<br></br>
          <select
            required
            name="usertype"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value=""></option>
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
        </label>
        <br></br>
        {selectedType === "Admin" ? (
          <>
            <label>
              Admin Code<br></br>
              <input type="number" className="input-form" required name="adminCode"></input>
              {isvalid === false ? (
                <span>Invalid Admin Code</span>
              ) : (
                <span></span>
              )}
            </label>
            <br></br>
          </>
        ) : (
          ""
        )}
        <br></br>
        <input type="submit" id="login-submit" value="Register"></input>
      </form>
    </div>
  );
}

export default Register;
