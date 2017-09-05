import React, { Component } from 'react';
import PostsShow from './PostsShow'

import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux';

import { Link } from 'react-router'


class PostIndex extends Component{
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render(){
        return(
            <div>
                <h1>List of blogs from Post Index Component</h1>
            </div>
            );
        
    }
}



export default connect (null, { fetchPosts })(PostIndex);