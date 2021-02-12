import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
//sending API snacks to my own database
function* StealSnacksForSelf(action) {
  try {
    console.log("adding snack chosen to database");
    yield axios.post("/api/search", action.payload);
    yield put({ type: "GET_DATABASE_SNACKS" });
  } catch (error) {
    console.log(error);
  }
}
//grabbing snacks from my own database and sending to AllSnacks page to be displayed.
function* SendDatabaseSnacks() {
  try {
    console.log("getting snacks from my database");
    const response = yield axios.get("/api/search");
    yield;
  } catch (error) {
    console.log(error);
  }
}

function* BankSnacks() {
  yield takeEvery("SEARCH_API", StealSnacksForSelf);
  yield takeEvery("GET_DATABASE_SNACKS", SendDatabaseSnacks);
}

export default BankSnacks;
