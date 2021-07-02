import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowPostList.css';
import axios from 'axios';
import Post from '../../components/Post/Post.js';

export default class ShowPostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        this.getAllPost();
    }

    getAllPost = () => {
        axios.get('http://localhost:8080/api/posts')
            .then(res => {
                this.setState({posts: res.data})
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    displayAllPost = (posts) => {
        if(!posts.length) return null;

        return posts.map((post, index) => (
            <Post key={index} data={post} index={index} />
        ))
    }

    render() {
        return (
            <div className="main-container">
                <div className="post-list">
                    <Link className="add-post-link" to="/add-post">Add Post</Link>
                    {this.displayAllPost(this.state.posts)}
                </div>
            </div>
        )
    }
}