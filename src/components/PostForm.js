import React from "react";

class PostForm extends React.Component {

  state = {
    value: "",
    image: ""
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  seeResult = (result) => {
    if (result.event === "success") {
      this.setState({image: result.info.secure_url})
    }
  }

  openWidget = () => {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUD_NAME, uploadPreset: process.env.REACT_APP_UPLOAD_PRESET }, (error, result) => {this.seeResult(result) });
    widget.open();

  }

  render() {
    return (
      <div className="form-container">
        <h2>Create a New Post</h2>
        <form onSubmit={(e) => this.props.createNewPost(e, this.state.value)}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.openWidget}>Select Image</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default PostForm
