import React from "react"

const PetInfo = (props) => {
  // debugger
  let {name, species, hobbies, breed, age, picture} = props.pet
  return (
    <div className="pet-info">
      <h4 className="name">{name}</h4>
      <div className="profile-pic">
        <img src={picture} alt={name}/>
      </div>
      <div className="pet-attributes">
        <p>{age}</p>
        <p>{species}</p>
        <p>{breed}</p>
        <p>{hobbies}</p>
      </div>
    </div>

  )
}

export default PetInfo
