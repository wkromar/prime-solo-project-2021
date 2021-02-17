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
  const AllSnacks = useSelector((store) => store.AllSnackReducer);
  const [isEditing, setIsEditing] = useState(false);
  let [searchItem, setSearchItem] = useState("");

  //gets all snacks in database on load
  useEffect(() => {
    dispatch({ type: "GET_DATABASE_SNACKS" });
    console.log(AllSnacks);
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
  const addToDatabase = (url, title, id) => {
    console.log("adding to database", url, title, id);
    const newSnack = {
      url: `https://spoonacular.com/productImages/${id}-312x231.jpg`,
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
  const editItem = (snack_id, snack_name) => {
    const itemToEdit = {
      snack_name: snack_name,
      snack_id: snack_id,
    };
    dispatch({ type: "ITEM_TO_EDIT", payload: itemToEdit });
    dispatch({ type: "SET_EDITING_SNACK", payload: snack_id });
    history.push(`/editSnack/${snack_id}`);
  };

  //testing out an editing function
  const editRenderer = (data, snackName) => {
    if (this.state.id && this.state.id === data.id) {
      const saveButtonId = `save-${data.id}`;
      const cancelButton = `cancel=${data.id}`;
      return (
        <div>
          <button id={saveButtonId} onClick={() => console.log("save Clicked")}>
            Save
          </button>
          <button id={saveButtonId} onClick={() => console.log("save Clicked")}>
            Cancel
          </button>
        </div>
      );
    }
  };
  {
    /* <LogOutButton className="btn" />
      <HomeButton className="btn" /> */
  }
  //DOM
  return (
    <div className="container">
      <p>Add snacks from the Spoonacular API</p>

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
      {isEditing ? (
        <>
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
        </>
      ) : (
        <>
          <p>
            ------------------------------------------------------------------
          </p>
          <h2>Here is the list of all snacks stored in the database</h2>
          {AllSnacks?.map((editSnack) => {
            console.log(editSnack);
            return (
              <div className="searchContainer">
                <p>
                  <img
                    src={`https://spoonacular.com/productImages/${editSnack.snack_id}-312x231.jpg`}
                  ></img>
                </p>
                <p>{editSnack.snack_name}</p>

                <button
                  onClick={() =>
                    editItem(editSnack.snack_id, editSnack.snack_name)
                  }
                >
                  Edit (Admin Only)
                </button>
                <button onClick={() => deleteItem(editSnack.id)}>
                  Delete(Admin Only)
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default AdminPage;

{
  /* <button onClick={() => addFavorite(searchItem.url, searchItem.title)}>
  Favorite
</button>; */
}
