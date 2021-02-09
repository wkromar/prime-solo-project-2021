import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import HomeButton from '../HomeButton/HomeButton';
import { useHistory } from 'react-router-dom';

const  AllSnacks = () =>{
const history = useHistory();
const []

return(
<div>
    <button className = "btn" onClick={history.push('/home')}>Home</button>
        <LogOutButton className="btn" />
        <HomeButton className="btn"/>
</div>
)

}

export default AllSnacks;
