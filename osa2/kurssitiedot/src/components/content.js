import React from 'react'
import Part from './part'


const Content = (props) => {
    let osat = props.course.parts
    return (
      <div>
        {osat.map(osa => <Part key={osa.id} course={osa}/>)}   
      </div>
    )
  }


export default Content