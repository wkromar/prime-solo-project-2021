import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import HomeButton from '../HomeButton/HomeButton';
import { useHistory } from 'react-router-dom';

function  AllSnacks(){
const history = useHistory();
console.log('in All Snacks');
const snackReducer = useSelector((store) => store.snackReducer);
//  useEffect(() => {
//             console.log('component did mount');
//             // dispatch an action to request the search items from api
//             dispatch({type:'NULL'})
//         }, []);

    return(
        
    <div className="container">
    <p>A refreshable list of all snacks will be available here</p>
            <LogOutButton className="btn" />
            <HomeButton className="btn"/>
<p>This is where everything will be placed</p>
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
    )

}

export default AllSnacks;
