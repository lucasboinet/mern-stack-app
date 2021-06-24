import React, { Component } from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps.data)
        {
            this.setState({data : this.props.data})
        }
    }

    render() {
        return (
            <div className="comment">
                <p><span className="post-user-tag">{this.state.data.postedBy}</span> {this.state.data.message}</p>
            </div>
        );
    }
}