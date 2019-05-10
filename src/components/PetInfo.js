import React from "react"

const PetInfo = (props) => {
  // debugger
  let {name, species, hobbies, breed, age, picture} = props.pet
  return (
    <div className="pet-info">

      <div className="column">
        <h2 className="name ">{name}</h2>
        <br/>
        <br/>
        <div className="profile-pic">
          <img src={picture} alt={name}/>
        </div>
      </div>

      <div className="pet-attributes">
          <p>Age: {age}</p>
          <p>Species: {species}</p>
          <p>Breed: {breed}</p>
          <p>Hobbies: {hobbies}</p>
      </div>

    </div>

  )
}

export default PetInfo
//
// <div class="row">
//   <div class="column" style="background-color:#aaa;">
//     <h2>Column 1</h2>
//     <p>Some text..</p>
//   </div>
//   <div class="column" style="background-color:#bbb;">
//     <h2>Column 2</h2>
//     <p>Some text..</p>
//   </div>
// </div>
