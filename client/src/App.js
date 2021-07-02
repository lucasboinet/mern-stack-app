import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import AddPost from './routes/AddPost/AddPost.js';
import ShowPostList from './routes/ShowPostList/ShowPostList.js'
import CurrentPost from './routes/CurrentPost/CurrentPost.js'
import Login from './routes/Login/Login.js'
import Register from './routes/Register/Register.js'
import Header from './components/Header/Header.js'
import { AuthContext } from './context/AuthContext';

export default function App() {
  let { user } = useContext(AuthContext);
  if(!user)
    user = JSON.parse(sessionStorage.getItem('user'));
  return (
    <div>
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
          <Route path="/:user/:id" >
            <Header data={user} />
            {user ? <CurrentPost /> : <Redirect to="/login"/> }
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
