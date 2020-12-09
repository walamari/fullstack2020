import React from 'react'
import Header from './header'
import Total from './total'
import Content from './content'

const Course = ({ course }) => {

    return (
      <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total course = {course}/>
      </div>
    )
  }

export default Course