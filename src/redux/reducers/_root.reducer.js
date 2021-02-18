import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import FavoritesReducer from "./favorite.reducer";
import SearchReducer from "./search.reducer";
import AllSnackReducer from "./allSnack.reducer";
import EditReducer from "./edit.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  FavoritesReducer, //will store the items favorited by the user.
  SearchReducer, //will store all the snacks grabbed from API.
  AllSnackReducer, //stores all the snacks available to the users
  EditReducer, //admin function: able to edit a single item stored here
});

export default rootReducer;
