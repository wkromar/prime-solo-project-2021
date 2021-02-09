const snackReducer = (state = [], action) =>{
    if(action.type === 'SEND_SEARCH_TO_REDUCER'){
        return action.payload
    }
    return state;
} 

export default snackReducer;