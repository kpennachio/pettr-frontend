import React from "react";

class Post extends React.Component {

  render() {
    return (
      <div className="post">
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}
export default Post
