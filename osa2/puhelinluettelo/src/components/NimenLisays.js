import React from 'react'



const NimenLisays = (props) => {

    return (
      <div>
        <p>
          {props.henkilö.name} {props.henkilö.number}
        </p>
      </div>
    )
  }

  export default NimenLisays