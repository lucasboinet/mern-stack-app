import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import AddPost from './components/AddPost';
import ShowPostList from './components/ShowPostList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowPostList} />
          <Route path="/post" component={AddPost} />
        </div>
      </Router>
    )
  }
}

export default App;
