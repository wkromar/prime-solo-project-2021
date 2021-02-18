import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

//sends item to delete to the delete router
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

//sends favorite to delete to favorite router
function* FavoriteDeleteFunction(payload) {
  try {
    const idToDelete = payload.payload;
    console.log("in FavoriteDelete", idToDelete);
    yield axios.delete(`/api/favorites/${idToDelete}`);
  } catch (error) {
    console.log(error);
    alert("error in delete saga");
  }
}

function* DeleteSaga() {
  yield takeEvery("ITEM_TO_DELETE", DeleteFunction);
  yield takeEvery("FAVORITE_TO_DELETE", FavoriteDeleteFunction);
}

export default DeleteSaga;
