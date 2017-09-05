import React, { Component } from 'react';
import PostNew from './PostNew'

import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux';

import { Link } from 'react-router'
 
 import _ from 'lodash';


class PostIndex extends Component{
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    
    renderPosts(){
        return  _.map(this.props.posts, post => {
            return (
              
                    <li className="list-group-item" key={post.id}>
                        {post.title}
                    </li>
         
                );
            
        });
            
            
        
        
    }
    render(){
        console.log(this.props.posts);
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/post/new">
                        Add a Post
                    </Link>
                </div>
                <h3>List of Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
            );
        
    }
}


function mapStateToProps(state){
    return {
        posts: state.posts
        
    };
    
    
}

export default connect (mapStateToProps, { fetchPosts })(PostIndex);