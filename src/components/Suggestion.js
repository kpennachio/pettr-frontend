import React, { Fragment } from "react"
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


const Suggestion = (props) => {
  return (
    <Fragment>
        <Link to={`/pet/${props.pet.id}`}>
          <Card className="suggestion-card">
            <Image className="suggestion-pic" src={props.pet.picture} />
            <Card.Content>
              <Card.Header>{props.pet.name}</Card.Header>
              <Card.Description>{props.pet.species}</Card.Description>
            </Card.Content>
          </Card>
        </Link>
    </Fragment>

  )
}

export default Suggestion
