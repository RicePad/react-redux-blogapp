import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostNew extends Component{
    
    renderField(field){
        return(
            <div className="form-group has-danger">
            <label>{ field.label }</label>
                <input
                    {...field.input } 
                    className="form-control"
                    placeholder={field.placeholder}
                
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : '' }
                </div>
            </div>
            );
        
    }
    
    
    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/')

            
        })
        
    }
    
    render(){
        
        const { handleSubmit } = this.props;
        return(
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                    placeholder="add title"
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                    placeholder="add tags"
    
                />
                <Field 
                    label="Content"
                    name="content"
                    component={this.renderField}
                    placeholder="add content"
    
                    
                />
                <button type="submit" className="btn btn-primary">Submit</button>
               
           </form>
            );
        
    }
}

function validate(values){
    const errors={};
    
    if(!values.title){
        errors.title = "Enter a title";
     }
    if(!values.categories) {
        errors.categories = "Enter some categories";   
    }if(!values.content){
        errors.content = "Enter some content please";
    }
    
    return errors;
    
}
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
    
})(
    connect(null, { createPost })(PostNew));