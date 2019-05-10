import React from "react";
import { Card, Image, Button } from 'semantic-ui-react'


class Post extends React.Component {



  render() {
    return (
      <Card >
        <Card.Content>
        <p>{this.props.post.content}</p>
        <Image floated='center'  src={this.props.post.image} alt={this.props.post.content}/>
        </Card.Content>
        <Card.Content extra>
          {this.props.showForm && <Button onClick={() => this.props.handleDeletePost(this.props.post.id)}>Delete Post</Button>}
          </Card.Content>
      </Card>
    )
  }
}
export default Post
