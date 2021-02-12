import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
//this will add the searched snack into our database.
//need to figure out how to get it to respond to categories.
//idea: have a dropdown field each with its own string value. once selected,
//the item will
function* getFood(action) {
  try {
    console.log("in food API");
    const searchTerm = action.payload;
    console.log(action.payload);
    const response = yield axios.get(`/api/search/${searchTerm}`);
    console.log("response from axios get", response.data);
    yield put({ type: "SEND_SEARCH_TO_REDUCER", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* SearchFood() {
  yield takeEvery("ACTUALLY_SEARCH_API", getFood);
}

export default SearchFood;
