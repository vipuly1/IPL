import React from 'react';
import axios from 'axios';
import "../CSS/login.css"

function Login() {

  const loginUser = (e) => {
    e.preventDefault()
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    axios({
      method: "post",
      url: "login",
      data: loginData,
    })
      .then((response) => {
        console.log("Hello")
        console.log(response.data[0])

        if( response.data[0] == "success"){
          localStorage.setItem("loginStatus",JSON.stringify({login:  true, user: response.data[1]}) )
          window.location.href = "/"
        }
        else {
          let span = document.getElementById("incorrect_password")
          span.textContent = "Incorrect Password"
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <div id="container">
    <h2 className='login-form-text'>Login</h2>
    <form onSubmit={loginUser} id="form">
      
      <label>
        Email<br></br>
        <input className='input-form' type="email" name="email" required></input>
      </label>
      <br></br>
      <label>
        Password<br></br>
        <input className='input-form' type="password" name="password" required></input><br></br>
        <span id="incorrect_password"></span>
      </label>
      <br></br>
      <input type="submit" id="login-submit" value="Login"></input></form>
  </div>;
}

export default Login;
