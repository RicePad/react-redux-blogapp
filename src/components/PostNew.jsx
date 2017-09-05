import React, { Component } from 'react';
import { Link } from 'react-router'


class PostNew extends Component{
    
    
    render(){
        return(
            <div> 
            
                Create your first posts
                <div><Link to={'/'}>Go back to list of blogs</Link></div>
            </div>
            )
        
    }
}



export default PostNew;