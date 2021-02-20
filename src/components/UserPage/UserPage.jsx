import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import FavoritesButton from "../FavoritesPageButton/FavoritesPageButton";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const snackReducer = useSelector((store) => store.snackReducer);

  const [isVisible, setIsVisible] = useState(true);

  const addFavorite = (url, title, likes) => {
    console.log(url, title, likes);
    const newFavorite = {
      url: url,
      title: title,
      likes: likes,
    };
    console.log(newFavorite);
    dispatch({ type: "POST_FAVORITE", payload: newFavorite });
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <div className="honeycomb">
        <FavoritesButton className="btn" />
        <button
          className="btn"
          onClick={() => {
            history.push("/AllSnacks");
          }}
        >
          All Snacks
        </button>
        <button
          className="btn"
          onClick={() => {
            history.push("/admin");
          }}
        >
          Admin
        </button>
      </div>
      {snackReducer?.map((searchSnack) => {
        return (
          <div className="searchContainer">
            {/* <p><img src = {searchSnack.url} width="400" height="300"></img></p> */}
            <p>{searchSnack.title}</p>
            <p>{searchSnack.likes}</p>
            {isVisible ? (
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
            ) : (
              <span>Added</span>
            )}
          </div>
        );
      })}

      <p>This is where everything will be placed</p>

      <p>
        See the list of all available snacks, order by category, and see the
        nutritional value
      </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
