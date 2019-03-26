import React from "react";
import Post from '../components/Post'
import PostForm from '../components/PostForm'



class PostContainer extends React.Component {

  renderPosts = () => {
    return <Post />
  }


  render() {
    return (
      <div className="post-container">
        <PostForm />
        {this.renderPosts()}
      </div>
    )
  }
}
export default PostContainer
