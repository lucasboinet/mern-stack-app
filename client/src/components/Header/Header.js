import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext.js';

export default function Header(props) {
    const {dispatch} = useContext(AuthContext);
    const [user, setUser] = useState(props.data);
    
    const sendLogout = async (user, dispatch) =>{
        try {
            await axios.post('http://localhost:8080/api/user/logout', user)
            sessionStorage.removeItem('user');
            setUser(null);
            dispatch({type: "LOGOUT_SUCCESS", payload: null})
        }catch(err) {
            dispatch({type: "LOGOUT_FAILURE", payload: err})
        }
    }

    useEffect(() => {
        setUser(props.data)
    }, [props.data])

    const handleClick = (e) => {
        e.preventDefault();
        sendLogout({username: user.username, password: user.password}, dispatch)
    }

    return (
        <header>
            <h1>Oui</h1>
            <p>{user ? user.username : ""}</p>
            {user ? <button onClick={handleClick}>Logout</button> : null}

        </header>
    );
}