import React from "react";
import Post from '../components/Post'
import PostForm from '../components/PostForm'



class PostContainer extends React.Component {


  renderPosts = () => {
      return this.props.pet.posts.map(post => {
        return <Post post={post} handleDeletePost={this.handleDeletePost} showForm={this.props.showForm}/>
      })
  }

  createNewPost = (e, formData) => {
    e.preventDefault()
    let petId = parseInt(localStorage.getItem('currentPet'))
    let data = {
      "content": formData.content,
      "image": formData.image,
      "pet_id": petId
    }
    console.log(formData)
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(post => {
      this.props.addPost(petId, post)
    })
  }

  handleDeletePost = (postId) => {
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      method: "DELETE"
    })
    .then(resp => {
      this.props.deletePost(this.props.pet.id, postId)
    })
  }

  render() {
    console.log("post container", this.props);

    return (
      <div className="post-container">
        <h2>Posts</h2>
        {this.props.showForm && <PostForm createNewPost={this.createNewPost}/>}
        {this.renderPosts()}
      </div>
    )
  }
}
export default PostContainer
