import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component{
    
    
    render(){
        return(
            <div> 
            
                Create your first posts
                <div><Link to={'/'}>Go back to list of blogs</Link></div>
            </div>
            );
        
    }
}



export default reduxForm({
    form: 'PostsNewForm'
    
})(PostNew);