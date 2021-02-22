import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import FavoritesButton from "../FavoritesPageButton/FavoritesPageButton";
import axios from "axios";

//shows all the snacks I have taken from the API and placed them into my database.
//then brings them into my own reducer and displays them on the DOM.

function AllSnacks() {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //reducers
  const AllSnacks = useSelector((store) => store.AllSnackReducer);
  const user = useSelector((store) => store.user);

  //variables and constants
  const [isVisible, setIsVisible] = useState(true);
  let [searchItem, setSearchItem] = useState("");

  const FavoriteCounter = (favorites) => {
    favorites += 1;
    console.log("plus 1 to favorites", favorites);
  };

  const addFavorite = (title, id, user, favorites) => {
    FavoriteCounter(favorites);
    console.log("adding favorite", title, id, user, favorites);
    const newFavorite = {
      title: title,
      id: id,
      user_id: user,
      favorites: favorites,
    };
    console.log(newFavorite);

    dispatch({ type: "POST_FAVORITE", payload: newFavorite });
  };

  const goHome = () => {
    history.push("/user");
  };

  useEffect(() => {
    dispatch({ type: "GET_DATABASE_SNACKS" });
  }, []);

  return (
    <div className="container">
      <div className="userInfo">
        <h2>What Piques Your Interest?</h2>
      </div>
      <div className="honeycomb">
        <HomeButton className="loginBtn btn_sizeSm" />
        <FavoritesButton className="btn btn_sizeSm" />
      </div>

      {AllSnacks?.map((snack) => {
        return (
          <div className="searchContainer">
            <p>
              <img
                className="images"
                src={`https://spoonacular.com/productImages/${snack.snack_id}-312x231.jpg`}
              ></img>
            </p>
            <p>{snack.snack_name}</p>
            <button
              className="btn btn_sizeSm"
              onClick={() =>
                addFavorite(
                  snack.snack_name,
                  snack.snack_id,
                  user.id,
                  snack.favorites
                )
              }
            >
              Favorite
            </button>
            <button
              className="btn btn_sizeSm"
              onClick={() => {
                history.push("/user");
              }}
            >
              Home
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AllSnacks;
