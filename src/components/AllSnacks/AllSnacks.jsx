import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AllSnacks() {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("in All Snacks");
  const snackList = useSelector((store) => store.snackReducer);

  useEffect(() => {
    console.log("get list of snacks to appear upon load", snackList);
    // dispatch an action to request the search items from api
  }, []);

  return (
    <div className="container">
      <p>A refreshable list of all snacks will be available here</p>
      <LogOutButton className="btn" />
      <HomeButton className="btn" />
      <p>This is where everything will be placed</p>
      {snackList &&
        snackList.map((snack) => {
          console.log(snack);
          return (
            <div className="searchContainer">
              {/* <p><img src = {searchSnack.url} width="400" height="300"></img></p> */}
              <p>{snack.title}</p>
              <p>{snack.url}</p>
              <button onClick={() => addFavorite(snack.url, snack.title)}>
                Favorite
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default AllSnacks;
