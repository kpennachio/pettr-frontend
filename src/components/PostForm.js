import React from "react";

class PostForm extends React.Component {

  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }


  render() {
    return (
      <div className="form-container">
        <h2>Create a New Post</h2>
        <form onSubmit={(e) => this.props.createNewPost(e, this.state.value)}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default PostForm
