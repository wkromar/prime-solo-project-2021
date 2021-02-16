import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* DeleteFunction(payload) {
  try {
    const idToDelete = payload.payload;
    console.log("in DELETE", idToDelete);
    yield axios.delete(`/api/delete/${idToDelete}`);
  } catch (error) {
    console.log(error);
    alert("error in delete saga");
  }
}

function* DeleteSaga() {
  yield takeEvery("ITEM_TO_DELETE", DeleteFunction);
}

export default DeleteSaga;
