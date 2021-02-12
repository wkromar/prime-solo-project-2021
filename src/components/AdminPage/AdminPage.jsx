import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//create an add Snack Field, use styling from

function AdminPage() {
  const history = useHistory();
  const snackReducer = useSelector((store) => store.snackReducer);

  return (
    <div className="container">
      <h1>Admin Name</h1>
      <p>Here the Admin will be able to edit and add new snacks</p>
      <LogOutButton className="btn" />
      <HomeButton className="btn" />
      <p>This is where everything will be placed</p>
      {snackReducer.map((searchSnack) => {
        return (
          <div className="searchContainer">
            {/* <p><img src = {searchSnack.url} width="400" height="300"></img></p> */}
            <p>{searchSnack.title}</p>
            <p>{searchSnack.likes}</p>
            <button
              onClick={() =>
                addFavorite(
                  searchSnack.url,
                  searchSnack.title,
                  searchSnack.likes
                )
              }
            >
              Favorite
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          history.push("/AllSnacks");
        }}
      >
        All Snacks
      </button>
      <p> My Profile</p>
      <button
        className="btn"
        onClick={() => {
          history.push("/profile");
        }}
      >
        Profile
      </button>

      <button
        className="btn"
        onClick={() => {
          history.push("/editSnack");
        }}
      >
        Profile
      </button>
    </div>
  );
}

export default AdminPage;
