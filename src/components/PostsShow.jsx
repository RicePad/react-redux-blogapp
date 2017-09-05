import React, { Component } from 'react';
import { Link } from 'react-router'


class PostsShow extends Component{
    
    
    render(){
        return(
            <div> 
            
                Showing a post with unique ID from PostsShow Component
                <div><Link to={'/index'}>Go back to list of blogs</Link></div>
            </div>
            )
        
    }
}



export default PostsShow;