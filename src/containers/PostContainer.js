import React from "react";
import Post from '../components/Post'
import PostForm from '../components/PostForm'



class PostContainer extends React.Component {

  state = {
    posts: [],
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return <Post post={post} />
    })
  }

  createNewPost = (e, content) => {
    e.preventDefault()
    let data = {
      "content": content,
      "pet_id": 1
    }
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(console.log)
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/posts")
    .then(resp => resp.json())
    .then(posts => this.setState({posts}))
  }


  render() {
    return (
      <div className="post-container">
        <h2>My Posts</h2>
        {this.props.showForm && <PostForm createNewPost={this.createNewPost}/>}
        {this.renderPosts()}
      </div>
    )
  }
}
export default PostContainer
