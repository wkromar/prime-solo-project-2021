import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

function EditSnack() {
  const history = useHistory();
  const snackReducer = useSelector((store) => store.snackReducer);
  const snackToEdit = useSelector((store) => store.EditReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    dispatch({ type: "SET_EDITING_SNACK", payload: id });
  }, [id]);

  const saveChanges = () => {
    // trigger a saga that will save our local changes in the DB
    dispatch({
      type: "SAVE_EDIT_SNACK",
      payload: snackToEdit,
    });
    dispatch({ type: "GET_DATABASE_SNACKS" });
    history.push("/admin");
  };

  return (
    <>
      <div className="searchContainer">
        <h3>Editing current snack</h3>
        <h4>{id}</h4>
        <p>Name:</p>
        <input
          value={snackToEdit.snack_name}
          onChange={(event) => {
            dispatch({ type: "EDIT_SNACK_NAME", payload: event.target.value });
          }}
        ></input>
        <p>Snack ID: used for image rendering</p>
        <input
          value={snackToEdit.snack_image}
          onChange={(event) => {
            dispatch({ type: "EDIT_SNACK_IMAGE", payload: event.target.value });
          }}
        ></input>
        {/* <p>Favorites: How many people have added this to their own list.</p>
      <input
        value={snackToEdit.favorites}
        onChange={(event) => {
          dispatch({
            type: "EDIT_SNACK_FAVORITES",
            payload: event.target.value,
          });
        }}
      ></input> */}
        <button className="btn" onClick={saveChanges}>
          Save Changes
        </button>
      </div>
    </>
  );
}
//I am not passing the router an ID for the item.
//i need to pass the editrouter an ID so I can run my sql query.
export default EditSnack;
//for favorite work

// {/* <div className="container">
//     {snackReducer.map((searchSnack) =>{
//                      return(
//                          <div className = 'searchContainer'>
//                              {/* <p><img src = {searchSnack.url} width="400" height="300"></img></p> */}
//                              <p>{searchSnack.title}</p>
//                              <p>{searchSnack.likes}</p>
//                              <button onClick={()=> addFavorite (searchSnack.url, searchSnack.title, searchSnack.likes)}>Favorite</button>
//                          </div>
//                      )
//                  })}
// </div> */}
