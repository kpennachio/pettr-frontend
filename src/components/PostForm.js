import React from "react";
import { Button, Image } from 'semantic-ui-react'

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


  openWidget = (e) => {
    e.preventDefault()
    let widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUD_NAME, uploadPreset: process.env.REACT_APP_UPLOAD_PRESET ,
      sources: [ 'local', 'url']},
      (error, result) => {this.seeResult(result)});
    widget.open();

  }

  handleSubmit = (e) => {
    this.props.createNewPost(e, this.state)
    this.setState({
      content: "",
      image: ""
    })
  }

  render() {
    return (
      <div>
        <strong>Create a New Post</strong>
        <form >
            <label htmlFor="content">What are you up to?</label>
          <p>
            <textarea id="content" value={this.state.content} onChange={this.handleChange}/>
          </p>

          <label htmlFor="image">Upload a picture</label><br/>

          <Button size="mini" onClick={this.openWidget}>Select Image</Button>
          <Image src={this.state.image} className="gift-form-image"/>
          <p>
          <br/>
          <Button color="blue" size="tiny" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</Button>
          </p>
        </form>
      </div>
    )
  }
}
export default PostForm

// <p>
//   <button onClick={this.openWidget}>Select Image</button>
//   <input type="text" id="image" value={this.state.image} onChange={this.handleChange}/>
// </p>
