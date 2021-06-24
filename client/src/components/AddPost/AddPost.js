import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddPost.css';
import axios from 'axios';

export default class AddPost extends Component {
    constructor() {
        super();
        this.state = {
            image: ["1", "2"],
            description : "",
            postedBy: ""
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            image: this.state.image,
            description : this.state.description,
            postedBy: this.state.postedBy,
            publishedAt: new Date()
        }

        axios.post('http://localhost:8080/api/posts', data)
            .then(res => {
                this.setState({
                    image: [],
                    description : "",
                    postedBy: ""
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error : axios post in AddPost.js");
            });
    }

    render() {
        return (
            <div className="AddPost">
                <Link to="/">Show All Posts</Link>
                <p>Add new post</p>
                <form noValidate onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.onChange} />
                    <input type="text" placeholder="Author name" name="postedBy" value={this.state.postedBy} onChange={this.onChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}