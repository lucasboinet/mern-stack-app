import React, { useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext.js';

export default function Login () {
    const username = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const sendCredentials = async (userCredentials, dispatch) =>{
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post('http://localhost:8080/api/user/login', userCredentials)
            localStorage.setItem('SESSID', JSON.stringify(res.data.sessid));
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.sessid})
        }catch(err) {
            dispatch({type: "LOGIN_FAILURE", payload: err})
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        sendCredentials({username: username.current.value, password: password.current.value}, dispatch)
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" placeholder="Username" required ref={username} />
                <input type="text" placeholder="Password" required ref={password} />
                {isFetching ? <input type="submit" value="Loading..." disabled /> : <input type="submit" value="Log In" />}
            </form>
        </div>
    )
}