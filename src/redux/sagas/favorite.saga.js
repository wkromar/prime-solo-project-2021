import { takeEvery } from "redux-saga/effects";
import axios from "axios";
import { put } from "redux-saga/effects";

function* postFavorite(action) {
  try {
    console.log("in POST favorite", action.payload);
    yield axios.post("/api/favorites", action.payload);
    yield put({ type: "GET_FAVORITE" });
  } catch (error) {
    console.log(error);
  }
}
//grab all favorites from the database
function* getFavorite() {
  try {
    console.log("in getFavoriteGifs saga");
    const response = yield axios.get("/api/favorites");
    //response is an array of objects with all favorites in it
    //sends to reducers an array of objects
    yield put({
      type: "SEND_FAV_TO_FAV_SNACK_REDUCER",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    alert("error getting favorite snacks from database");
  }
}

function* favoriteSaga() {
  yield takeEvery("GET_FAVORITE", getFavorite);
  yield takeEvery("POST_FAVORITE", postFavorite);
}

export default favoriteSaga;
