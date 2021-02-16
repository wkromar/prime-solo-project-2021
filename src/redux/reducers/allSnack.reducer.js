const allSnackReducer = (state = [], action) => {
  if (action.type === "SEND_COPIED_SNACKS_TO_REDUCER") {
    return action.payload;
  }
  return state;
};

export default allSnackReducer;
