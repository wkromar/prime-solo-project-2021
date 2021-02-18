const FavoritesReducer = (state = [], action) => {
  if (action.type === "SEND_FAV_TO_FAV_SNACK_REDUCER") {
    return action.payload;
  }
  return state;
};

export default FavoritesReducer;
