import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CommentsList.css'

import Comment from '../Comment/Comment.js';

export default class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.postId = this.props.postId;
        this.postedBy = this.props.postedBy;
        this.maxShown = 2;
    }

    componentDidMount(){
        this.setState({data: this.props.data.reverse()})
    }

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps.data)
        {
            this.setState({data : this.props.data.reverse()})
        }
    }

    render() {
        return (
            <div className="comments-list">
                {this.state.data.length > this.maxShown ? <Link className="show-more" to={'/'+this.postedBy+'/'+this.postId}>Show the {this.state.data.length - this.maxShown} comments</Link> : null }
                {this.state.data.map((comment, index) => {
                    if(index < this.maxShown)
                        return <Comment key={index} data={comment} />
                })}
            </div>
        );
    }
}