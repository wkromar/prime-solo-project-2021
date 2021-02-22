import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import scss
import "../App/App.scss";

//create an add Snack Field, use styling from

function AdminPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const snackList = useSelector((store) => store.SearchReducer);
  const AllSnacks = useSelector((store) => store.AllSnackReducer);
  const [isEditing, setIsEditing] = useState(false);
  let [searchItem, setSearchItem] = useState("");

  //gets all snacks in database on load
  useEffect(() => {
    dispatch({ type: "GET_DATABASE_SNACKS" });
  }, []);

  //searches API for requested Item
  const newSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "ACTUALLY_SEARCH_API", payload: searchItem });
  };

  //push to different pages
  const returnToList = () => {
    console.log("returning to List");
    history.push("/profile");
  };
  const toAllSnacks = () => {
    console.log("to AllSnacks");
    history.push("/AllSnacks");
  };

  //adds an item to the database
  const addToDatabase = (title, id) => {
    console.log("adding to database", title, id);
    const newSnack = {
      title: title,
      id: id,
    };
    dispatch({ type: "SEARCH_API", payload: newSnack });
  };
  //removing an item from the database entirely
  const deleteItem = (id) => {
    const idToDelete = id;
    console.log("item to delete", id);
    dispatch({ type: "ITEM_TO_DELETE", payload: idToDelete });
    dispatch({ type: "GET_DATABASE_SNACKS" });
  };

  //editing a feature
  const editItem = (id, snack_id, snack_name, favorites) => {
    const itemToEdit = {
      id: id,
      snack_name: snack_name,
      snack_id: snack_id,
      favorites: favorites,
    };
    dispatch({ type: "ITEM_TO_EDIT", payload: itemToEdit });
    // dispatch({ type: "SET_EDITING_SNACK", payload: id });
    history.push(`/editSnack/${id}`);
  };

  {
    /* <LogOutButton className="btn" />
      <HomeButton className="btn" /> */
  }
  //DOM
  return (
    <div className="container">
      <h2 className="helpText">Add snacks from the Spoonacular API</h2>

      <button className="btn" onClick={toAllSnacks}>
        To AllSnacks
      </button>
      <form onSubmit={newSearch}>
        <input
          type="text"
          value={searchItem}
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <button className=" btn searchButton" type="Submit">
          Search
        </button>

        <button
          className="btn"
          onClick={() => {
            history.push("/user");
          }}
        >
          Home
        </button>
      </form>

      {snackList?.map((snack) => {
        console.log(snack);
        return (
          <div className="searchContainer">
            <p>
              <img
                className="images"
                src={`https://spoonacular.com/productImages/${snack.id}-312x231.jpg`}
              ></img>
            </p>
            <p>{snack.title}</p>

            <button onClick={() => addToDatabase(snack.title, snack.id)}>
              Add to Local Database
            </button>
          </div>
        );
      })}

      <p>------------------------------------------------------------------</p>
      <h2 className="helpText">
        Here is the list of all snacks stored in the database
      </h2>
      <div className="showSnacks">
        {AllSnacks?.map((editSnack) => {
          return (
            <div className="searchContainer">
              <p>
                <img
                  className="images"
                  src={`https://spoonacular.com/productImages/${editSnack.snack_id}-312x231.jpg`}
                ></img>
              </p>
              <p>{editSnack.snack_name}</p>

              <button
                className="btn btn_sizeSm"
                onClick={() =>
                  editItem(
                    editSnack.id,
                    editSnack.snack_id,
                    editSnack.snack_name,
                    editSnack.favorites
                  )
                }
              >
                Edit (Admin Only)
              </button>
              <button
                className="btn btn_sizeSm"
                onClick={() => deleteItem(editSnack.id)}
              >
                Delete(Admin Only)
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AdminPage;

{
  /* <button onClick={() => addFavorite(searchItem.url, searchItem.title)}>
  Favorite
</button>; */
}
