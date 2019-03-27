import React from "react";

class PostForm extends React.Component {

  state = {
    content: "",
    image: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  seeResult = (result) => {
    if (result.event === "success") {
      this.setState({image: result.info.secure_url})
    }
  }

  // this.seeResult(result)

  openWidget = (e) => {
    e.preventDefault()
    let widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUD_NAME, uploadPreset: process.env.REACT_APP_UPLOAD_PRESET }, (error, result) => {this.seeResult(result)});
    widget.open();

  }


  render() {
    return (
      <div>
        <h2>Create a New Post</h2>
        <form >
            <label htmlFor="content">What are you up to?</label>
          <p>
            <textarea id="content" value={this.state.content} onChange={this.handleChange}/>
          </p>

            <label htmlFor="image">Upload a picture</label>
          <p>
            <button onClick={this.openWidget}>Select Image</button>
            <input type="text" id="image" value={this.state.image} onChange={this.handleChange}/>
          </p>
          <p>
            <input type="submit" value="Submit" onClick={(e) => this.props.createNewPost(e, this.state)}/>
          </p>
        </form>
      </div>
    )
  }
}
export default PostForm
