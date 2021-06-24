import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import AddPost from './components/AddPost/AddPost.js';
import ShowPostList from './components/ShowPostList/ShowPostList.js'
import CurrentPost from './components/CurrentPost/CurrentPost.js'


class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={ShowPostList} />
          <Route path="/add-post" component={AddPost} />
          <Route path="/:user/:id" component={CurrentPost} />
      </Router>
    )
  }
}

export default App;
