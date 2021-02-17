const EditReducer = (state = {}, action) => {
  if (action.type === "ITEM_TO_EDIT") {
    return action.payload;
  } else if (action.type === "EDIT_SNACK_NAME") {
    //dont want to completely replace everything...
    return { ...state, snack_name: action.payload };
  } else if (action.type === "EDIT_SNACK_IMAGE") {
    return { ...state, snack_image: action.payload };
  }
  return state;
};

export default EditReducer;
