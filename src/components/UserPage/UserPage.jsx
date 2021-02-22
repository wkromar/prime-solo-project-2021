import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import FavoritesButton from "../FavoritesPageButton/FavoritesPageButton";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const snackReducer = useSelector((store) => store.snackReducer);
  const AllSnacks = useSelector((store) => store.AllSnackReducer);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_DATABASE_SNACKS" });
  }, []);

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
  const breakPoints = [
    // { width: 1000, itemsToShow: 1 },
    // // { width: 50, itemsToShow: 2 },
    // // { width: 678, itemsToShow: 3 },
    // // { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="container">
      <div className="userInfo">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
      </div>

      <div className="honeycomb">
        <div className="honeycomb-cell">
          <FavoritesButton className="btn btn_sizeSm" />
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
          <div className="btn-wrapper">
            <button
              className="loginBtn btn_sizeSm"
              onClick={() => {
                history.push("/admin");
              }}
            >
              Admin
            </button>
          </div>
          <div className="userInfo">
            <h2>
              Like what you see? Visit the All Snacks page to vew our curated
              list!
            </h2>
          </div>
        </div>
      </div>

      <Carousel className="carousel" breakPoints={breakPoints}>
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
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
