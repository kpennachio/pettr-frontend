import React from "react";
import { Button, Image, Form, TextArea } from 'semantic-ui-react'

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
        <Form>
            <Form.Group>
              <Form.Field control={TextArea} label="What are you up to?" id="content" rows="1" value={this.state.content} onChange={this.handleChange}/>

              <Form.Field control={Button} label="Upload a picture" size="mini" onClick={this.openWidget}>Select Image</Form.Field>

              <Image src={this.state.image} className="gift-form-image"/>
              <Form.Field control={Button} color="blue" size="small" id="post-submit" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</Form.Field>
              </Form.Group>
        </Form>
      </div>
    )
  }
}
export default PostForm

// <p>
//   <button onClick={this.openWidget}>Select Image</button>
//   <input type="text" id="image" value={this.state.image} onChange={this.handleChange}/>
// </p>
