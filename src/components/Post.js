import React from "react";

class Post extends React.Component {



  render() { 
    return (
      <div className="post-card">
        <p>{this.props.post.content}</p>
        <img className="post-pic" src={this.props.post.image} alt={this.props.post.content}/>
        {this.props.showForm && <button onClick={() => this.props.handleDeletePost(this.props.post.id)}>Delete Post</button>}
      </div>
    )
  }
}
export default Post
