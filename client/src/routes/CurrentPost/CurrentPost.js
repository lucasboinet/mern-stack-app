import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

class CurrentPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('http://localhost:8080/api/posts/'+id)
            .then(res => {
                this.setState({data: res.data.post})
            })
            .catch(err => {
                console.log("Error : axios post in CurrentPost.js");
            });
    }

    render(){

        return (
            <div>
                <div>{this.state.data.postedBy} {this.state.data.description}</div>
            </div>
        )
    }
}

export default withRouter(CurrentPost);