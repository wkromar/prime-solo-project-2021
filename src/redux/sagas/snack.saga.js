import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function* callSearchSnacks() {
  yield takeEvery("FETCH_SNACKS_FROM_API", fetchSnacks);
}

function* fetchSnacks() {
  const response = yield axios.get("/api/AllSnacks");
  console.log(response);
  const dispatch = useDispatch();
  dispatch({ type: "SEND_SEARCH_TO_REDUCER", payload: response });
}

function* SearchSnacks() {
  yield takeEvery("SEARCH_API", callSearchSnacks);
}

export default SearchSnacks;
