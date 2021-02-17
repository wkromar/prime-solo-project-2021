import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* editSnack(action) {
  console.log(action);
  // /students/:id
  yield axios.put(`/allSnacks/${action.payload.id}`, action.payload);
}

function* getSnack(action) {
  try {
    const response = yield axios.get(`allSnacks/${action.payload}`);
    console.log(response.data[0]);
    yield put({ type: "ITEM_TO_EDIT", payload: response.data[0] });
  } catch (err) {
    console.log(err);
  }
}

function* saveSnackChanges() {
  yield takeEvery("SNACK_TO_EDIT", editSnack);
  yield takeEvery("SET_EDITING_SNACK", getSnack);
}

export default saveSnackChanges;
