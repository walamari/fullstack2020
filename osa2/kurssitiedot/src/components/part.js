import React from 'react'


const Part = (props) => {
    return (
      <div>     
        <p>{props.course.name} {props.course.exercises}</p>
      </div>
    )
  }


export default Part