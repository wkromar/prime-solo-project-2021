import axios from "axios";
import { put } from "redux-saga/effects";
//this will add the searched snack into our database.
//need to figure out how to get it to respond to categories.
//idea: have a dropdown field each with its own string value. once selected,
//the item will
function*searchFood(action){
    try{
        console.log('in food API');
        const searchTerm = action.payload
        const response = yield axios.get(`/api/search/${searchTerm}`)
        yield put({type:'SEND_SEARCH_TO_REDUCER', payload: response.data })
    }catch(error){
        console.log(error)
    }
}

export default searchFood;