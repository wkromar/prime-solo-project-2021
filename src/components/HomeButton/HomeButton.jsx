import React from 'react';
import { useHistory } from 'react-router-dom';


//use this button on the UserPage to send the user to the Home Page
function HomeButton(){

const history = useHistory();

const sendToHome = () =>{
    history.push(`/home`)
    }
    
return(
        <button class = "btn" onClick={() =>sendToHome}>Home</button>
        )
}

export default HomeButton;