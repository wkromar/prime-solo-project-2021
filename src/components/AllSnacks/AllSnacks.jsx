import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AllSnacks() {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("in All Snacks");

  //reducers
  const AllSnacks = useSelector((store) => store.AllSnackReducer);

  //variables and constants
  const [isVisible, setIsVisible] = useState(true);
  let [searchItem, setSearchItem] = useState("");

  const addFavorite = (url, title, id) => {
    console.log(url, title);
    const newFavorite = {
      url: url,
      title: title,
      id: id,
    };
    console.log(newFavorite);
    dispatch({ type: "POST_FAVORITE", payload: newFavorite });
  };

  const goToProfile = () => {
    history.push("/profile");
  };
  // const newSearch = (event) => {
  //   event.preventDefault();
  //   dispatch({ type: "ACTUALLY_SEARCH_API", payload: searchItem });
  // };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <p>A refreshable list of all snacks will be available here</p>
      <LogOutButton className="btn" />
      <HomeButton className="btn" />
      <p>This is where everything will be placed</p>

      {AllSnacks &&
        AllSnacks.map((snack) => {
          console.log(snack);
          return (
            <div className="searchContainer">
              <p>
                <img
                  src={`https://spoonacular.com/productImages/${snack.id}-312x231.jpg`}
                ></img>
              </p>
              <p>{snack.title}</p>
              <button
                onClick={() => addFavorite(searchItem.url, searchItem.title)}
              >
                Favorite
              </button>
              <button onClick={goToProfile}>Go to Profile</button>
            </div>
          );
        })}
    </div>
  );
}

export default AllSnacks;
