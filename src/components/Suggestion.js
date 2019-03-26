import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom";


const Suggestion = (props) => {
  return (
  <div className="">
  <div className="suggestion-pic">
    <img src={props.pet.picture} alt={props.pet.name}/>
  </div>
    <Link to={`/pet/${props.pet.id}`}>{props.pet.name}</Link>
  </div>
  )
}

export default Suggestion
