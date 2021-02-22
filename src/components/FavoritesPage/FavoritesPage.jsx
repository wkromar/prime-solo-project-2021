import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function favoritesPage() {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("in Favorites Page");

  //reducers
  const Favorites = useSelector((store) => store.FavoritesReducer);

  useEffect(() => {
    dispatch({ type: "GET_FAVORITE" });
  }, []);

  const deleteItem = (id) => {
    const idToDelete = id;
    console.log("favorite to delete", id);
    dispatch({ type: "FAVORITE_TO_DELETE", payload: idToDelete });
    dispatch({ type: "GET_FAVORITE" });
  };

  return (
    <div className="container">
      <div className="userInfo">
        <h2>A refreshable list of all snacks will be available here</h2>
      </div>
      <div className="honeycomb">
        <div className="honeycomb-cell">
          <HomeButton />
          <div className="btn-wrapper">
            <button
              className="loginBtn btn_sizeSm"
              onClick={() => {
                history.push("/AllSnacks");
              }}
            >
              All Snacks
            </button>
          </div>
        </div>
      </div>

      {Favorites.map((snack) => {
        return (
          <div className="searchContainer">
            <p>
              <img
                src={`https://spoonacular.com/productImages/${snack.snack_id}-312x231.jpg`}
              ></img>
            </p>
            <p>{snack.snack_name}</p>
            <p>Favorites: {snack.favorites}</p>
            <button className="btn " onClick={() => deleteItem(snack.id)}>
              Remove From Favorites
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default favoritesPage;
