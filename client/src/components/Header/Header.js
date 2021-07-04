import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext.js';
import './Header.css';

export default function Header(props) {
    const {dispatch} = useContext(AuthContext);
    const [user, setUser] = useState(null);
    
    const sendLogout = (sessid, dispatch) =>{
        axios.post('http://localhost:8080/api/user/logout', sessid)
            .then(result => {
                localStorage.removeItem('SESSID');
                setUser(null);
                dispatch({type: "LOGOUT_SUCCESS", payload: null})
            })
            .catch(err => dispatch({type: "LOGOUT_FAILURE", payload: err}));
    }

    useEffect(() => {
        setUser(props.data)
    }, [props.data])

    const handleClick = (e) => {
        e.preventDefault();
        sendLogout(user._id, dispatch)
    }

    return (
        <div className="header">
            <h1>MERN React App</h1>
            {user ? (
                <div className="header-controls">
                    <Link to="/">
                        <svg fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                    </Link>
                    <Link to='/activity'>
                        <svg fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </Link>
                    <Link to={`/${user.username}`} className="user-pic">
                    </Link>
                </div>
            ) : null}
        </div>
    );
}