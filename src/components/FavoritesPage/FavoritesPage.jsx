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
  console.log(Favorites);

  useEffect(() => {
    dispatch({ type: "GET_FAVORITE" });
  }, []);

  const deleteItem = (id) => {
    const idToDelete = id;
    console.log("favorite to delete", id);
    dispatch({ type: "FAVORITE_TO_DELETE", payload: idToDelete });
    dispatch({ type: "GET_FAVORITE" });
  };

  const goToProfile = () => {
    history.push("/profile");
  };

  return (
    <div className="container">
      <p>A refreshable list of all snacks will be available here</p>
      <LogOutButton className="btn" />
      <HomeButton className="btn" />
      <button onClick={goToProfile}>Go to Profile</button>
      <p>This is where everything will be placed</p>

      {Favorites.map((snack) => {
        return (
          <div className="searchContainer">
            <p>
              <img
                src={`https://spoonacular.com/productImages/${snack.snack_id}-312x231.jpg`}
              ></img>
            </p>
            <p>{snack.snack_name}</p>
            <button onClick={() => deleteItem(snack.id)}>
              Delete(Admin Only)
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default favoritesPage;
