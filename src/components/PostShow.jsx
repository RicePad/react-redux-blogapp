import React, { Component, ProTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostid, deletePost } from '../actions';
import { Link } from 'react-router';


class PostShow extends Component {
  
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fecthPostid(id)
  }
  
  onDeleteClick(){
      const { id } = this.props.match.params;
      
      this.props.deletePost(id, () => {
        this.props.history.push('/');
        
      })
    
  }
  
  render(){
    const { post } = this.props;
    
      if(!post){
        return <div>Loading...</div>
        
      };
      return (
      
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >Delete Post</button>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      
      </div>
      
      )
      
  }  
    
    
};


function mapStateToProps({ posts }, ownProps){
  return {
      post: posts[ownProps.match.params.id]
    
  }
  
  
};

export default connect(mapStateToProps, { fetchPostid, deletePost })(PostShow); 