import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import HomeButton from '../HomeButton/HomeButton';

import { useHistory } from 'react-router-dom';
import { useState, useEffect} from 'react';

function EditSnack(){

const history = useHistory();
const snackReducer = useSelector((store) => store.snackReducer);

<div className="container">
    {snackReducer.map((searchSnack) =>{
                     return(
                         <div className = 'searchContainer'>
                             {/* <p><img src = {searchSnack.url} width="400" height="300"></img></p> */}
                             <p>{searchSnack.title}</p>
                             <p>{searchSnack.likes}</p>
                             <button onClick={()=> addFavorite (searchSnack.url, searchSnack.title, searchSnack.likes)}>Favorite</button>
                         </div>
                     )
                 })}
</div>
}

export default EditSnack;