import React from "react";
import Post from '../components/Post'
import PostForm from '../components/PostForm'



class PostContainer extends React.Component {

  state = {
    posts: [],
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return <Post post={post} deletePost={this.deletePost}/>
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
      this.setState((prevState) => ({
        posts: [...prevState.posts, post]
      }))
    })
  }

  deletePost = (postId) => {
    console.log(postId)
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      method: "DESTROY"
    })
    .then(resp => resp.json())
    .then(post => {
      console.log(post)
    })
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/posts")
  //   .then(resp => resp.json())
  //   .then(posts => this.setState({posts}))
  // }


  render() {
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
