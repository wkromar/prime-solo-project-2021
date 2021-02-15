import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//create an add Snack Field, use styling from

function AdminPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const snackList = useSelector((store) => store.searchReducer);
  // const AllSnacks = useSelector((store) => store.allSnackReducer);
  let [searchItem, setSearchItem] = useState("");

  const newSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "ACTUALLY_SEARCH_API", payload: searchItem });
  };

  const returnToList = () => {
    console.log("returning to List");
    history.push("/profile");
  };
  const toAllSnacks = () => {
    console.log("to AllSnacks");
    history.push("/AllSnacks");
  };

  const addToDatabase = (url, title, id) => {
    console.log("adding to database", url, title, id);
    const newSnack = {
      url: `https://spoonacular.com/productImages/${id}-312x231.jpg`,
      title: title,
      id: id,
    };
    dispatch({ type: "SEND_COPIED_SNACKS_TO_REDUCER", payload: newSnack });
  };

  return (
    <div className="container">
      <p>A refreshable list of all snacks will be available here</p>
      <LogOutButton className="btn" />
      <HomeButton className="btn" />
      <button onClick={toAllSnacks}>To AllSnacks</button>
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

      {snackList?.map((snack) => {
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
              onClick={() => addToDatabase(snack.id, snack.title, snack.id)}
            >
              Add to Local Database
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPage;
