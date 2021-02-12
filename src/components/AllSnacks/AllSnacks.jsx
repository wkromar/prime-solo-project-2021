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

  const newSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "ACTUALLY_SEARCH_API", payload: searchItem });
  };

  const returnToList = () => {
    console.log("returning to List");
    history.push("/profile");
  };

  const addToDatabase = (id) => {
    const newSnack = {
      url: snack.imageType,
      title: snack.title,
      id: snack.id,
    };
    dispatch({ type: "ADD_TO_DATABASE", payload: action.newSnack });
  };

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

      <form onSubmit={newSearch}>
        <input
          type="text"
          value={searchItem}
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <button className="searchButton" type="Submit">
          Search
        </button>
        <button onClick={returnToList}>Go to Profile</button>
      </form>

      {snackList.map((snack) => {
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
            <button onClick={addToDatabase}>Go to Profile</button>
          </div>
        );
      })}
    </div>
  );
}

export default AllSnacks;
