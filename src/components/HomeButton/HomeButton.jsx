import React from 'react';
import { useHistory } from 'react-router-dom';


// This page will display all snacks rendered from the snackReducer

//use this button on the UserPage to send the user to the Home Page
function HomeButton(){

const history = useHistory();
    
return(
        <button className = "btn" onClick={history.push('/home')}>Home</button>
        )
}

export default HomeButton;