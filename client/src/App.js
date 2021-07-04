import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import AddPost from './routes/AddPost/AddPost.js';
import ShowPostList from './routes/ShowPostList/ShowPostList.js'
import CurrentPost from './routes/CurrentPost/CurrentPost.js'
import Login from './routes/Login/Login.js'
import Register from './routes/Register/Register.js'
import Header from './components/Header/Header.js'
import { AuthContext } from './context/AuthContext';
import axios from 'axios';

async function fetchUser(sessid){
  return await axios.get('http://localhost:8080/api/user/'+sessid).then(res => res.data.user)
}

export default function App() {
  const [user, setUser] = useState(null);
  let {sessid} = useContext(AuthContext);
  if(!sessid)
    sessid = JSON.parse(localStorage.getItem('SESSID'));

  useEffect(() => {
    if(sessid)
      fetchUser(sessid).then(setUser);
  }, [sessid])
  console.log(user)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Header data={user} />
          {user ? <ShowPostList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" >
          {user ? <Redirect to="/" /> : <Login /> }
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/add-post" >
          <Header data={user} />
          {user ? <AddPost /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/:sessid/:id" >
          <Header data={user} />
          {user ? <CurrentPost /> : <Redirect to="/login"/> }
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
