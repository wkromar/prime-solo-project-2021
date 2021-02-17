import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* editSnack(action) {
  console.log(action);
  // /students/:id
  yield axios.put(`/mySnacks/${action.payload.id}`, action.payload);
}

function* getSnack(action) {
  try {
    const response = yield axios.get(`mySnacks/${action.payload}`);
    console.log(response.data[0]);
    yield put({ type: "ITEM_TO_EDIT", payload: response.data[0] });
  } catch (err) {
    console.log(err);
  }
}

function* saveEdits(action) {
  console.log(action.payload.id);
  yield axios.put(`/api/edit/${action.payload.id}`, action.payload);
}

function* saveSnackChanges() {
  yield takeEvery("SNACK_TO_EDIT", editSnack);
  yield takeEvery("SET_EDITING_SNACK", getSnack);
  yield takeEvery("SAVE_EDIT_SNACK", saveEdits);
}

export default saveSnackChanges;
