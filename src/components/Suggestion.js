import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'


const Suggestion = (props) => {
  return (
    <div className="ui four column grid">
      <div className="row">
        <Link to={`/pet/${props.pet.id}`}>
          <Card className="suggestion-card">
            <Image className="suggestion-pic" src={props.pet.picture} />
            <Card.Content>
              <Card.Header>{props.pet.name}</Card.Header>
              <Card.Description>{props.pet.species}</Card.Description>
            </Card.Content>
          </Card>
        </Link>
      </div>
    </div>

  )
}

export default Suggestion
