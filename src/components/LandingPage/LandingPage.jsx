import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.scss";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-col grid-col_8">
          <h2>
            Welcome to Snackr, are you ready to find your new favorite snack?
          </h2>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4 className="helpText">Already a Member?</h4>
            <div className="btn-wrapper">
              <button className="loginBtn btn_sizeSm" onClick={onLogin}>
                Login
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
