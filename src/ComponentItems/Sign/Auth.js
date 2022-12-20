import React, { useState } from "react";
//import ReactDOM from "react-dom";
import {useNavigate} from 'react-router-dom';
import "./styles.css";
// import Signup from "./Signup";
// import Institute from "../Pages/Institute";
function Signin() {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate('../Signup');
  };
  const navigateInstitutepage = () => {
    navigate('../Institute');
  };
  // React States
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      {/* <form onSubmit={handleSubmit}> */}
      <form >
        <div className="input-container">
          <label>Institute name </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Institute ID </label>
          <input type="text" name="uid" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit"  onClick={navigateInstitutepage}/>
          <br/>
          {/* <button onClick={navigateSignup}>Sign up</button> */}
        </div>
      </form>
      <br/>
      <br/>
      <button onClick={navigateSignup}>Sign up</button>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Signin;



