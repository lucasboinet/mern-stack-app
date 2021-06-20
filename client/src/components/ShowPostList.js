import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import axios from 'axios';

export default class ShowPostList extends Component {
    render() {
        return (
            <div className="ShowPostList">
                <Link to="/post">Add Post</Link>
                <p>Posts List</p>
            </div>
        )
    }
}