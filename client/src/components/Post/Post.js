import React, { Component } from 'react';
import axios from 'axios';
import './Post.css'

import CommentsList from '../CommentsList/CommentsList.js';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            value: '',
            liked: false
        }
    }

    addComment = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/posts/comment', {message: this.state.value, id: this.state.data._id})
            .then(res => {
                this.setState({data: res.data.post, value: ''})
            })
            .catch(err => {
                console.log("Error : axios post in Post.js");
            });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    likePost = () => {
        this.setState({liked: !this.state.liked});
    }

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-user-pic"></div>
                    <p className='post-user-tag'>{this.state.data.postedBy}</p>
                </div>
                <img src="https://via.placeholder.com/600" alt={`${this.state.data.postedBy}'s post ${this.state.data.index}`} />
                <div className="post-footer">
                    <div className="post-controls">
                        <span className="heart-icon" onClick={this.likePost}>{this.state.liked ? <i className="fa fa-heart" aria-hidden="true" ></i> : <i className="fa fa-heart-o" aria-hidden="true" ></i>}</span>
                        <span className="comment-icon"><i class="far fa-comment"></i></span>
                    </div>
                    <p><span className="post-user-tag">{this.state.data.postedBy}</span> {this.state.data.description}</p>
                    <CommentsList data={this.state.data.comments} postId={this.state.data._id} postedBy={this.state.data.postedBy} />
                </div>
                <form onSubmit={this.addComment}>
                    <input type="text" placeholder="Comment this post..." value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Post" disabled={!this.state.value}/>
                </form>
            </div>
        );
    }
}