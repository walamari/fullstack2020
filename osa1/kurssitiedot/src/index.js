import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  
  const otsikko = props.course.name

  return (
    <div>
      <h1>{otsikko} </h1>
    </div>
  )
}


const Content = (props ) => {
  
  const nimi0 = props.course.parts[0].name
  const nimi1 = props.course.parts[1].name
  const nimi2 = props.course.parts[2].name

  const tehtava0 = props.course.parts[0].exercises
  const tehtava1 = props.course.parts[1].exercises
  const tehtava2 = props.course.parts[2].exercises

  return (
    <div>
      <Part osa = {nimi0} tehtavia = {tehtava0} />
      <Part osa = {nimi1} tehtavia = {tehtava1} />
      <Part osa = {nimi2} tehtavia = {tehtava2} />
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>
        {props.osa}, {props.tehtavia}
      </p>
    </div>
  )
}


const Total = (props) => {

  const tehtava0 = props.course.parts[0].exercises
  const tehtava1 = props.course.parts[1].exercises
  const tehtava2 = props.course.parts[2].exercises

  return (
    <div>
      <p>
        Number of exercises {tehtava0 + tehtava1 + tehtava2}
      </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>

      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))