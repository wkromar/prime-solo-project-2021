import React from "react";
import { useHistory } from "react-router-dom";

// This page will display all snacks rendered from the snackReducer

//use this button on the UserPage to send the user to the Home Page
function HomeButton() {
  const history = useHistory();

  return (
    <div className="btn-wrapper">
      <button
        className="loginBtn btn_sizeSm"
        onClick={() => {
          history.push("/user");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default HomeButton;
