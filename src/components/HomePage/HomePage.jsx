import React from 'react';
import { useHistory } from 'react-router-dom';
import {Line} from 'chart.js';
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';

const  HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const snackReducer = useSelector((store) => store.snackReducer);

    const addFavorite = (url, title) => {
        console.log(url, title);
        const newFavorite = {
        url: url,
        title: title,
        likes: likes,
        }
        console.log(newFavorite);
        dispatch({type: 'POST_FAVORITE', payload: newFavorite})


    useEffect(() => {
            console.log('component did mount');
            // dispatch an action to request the search items from api
            dispatch({type:'NULL'})
        }, []);

        return(
            <div>
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
                <p>See the list of all available snacks, order by category, and see the nutritional value</p>
                <button className = "btn" onClick={history.push('/home')}>All Snacks</button>
                <p> My Profile</p>
                <button className = "btn" onClick={history.push('/home')}>Profile</button>
            </div>
        )
    }
}
export default HomePage;

 