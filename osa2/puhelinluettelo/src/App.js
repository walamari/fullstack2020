import React, { useState } from 'react'
import NimenLisays from './components/NimenLisays'
import FilterItems from './components/FilterItems'
import Virhelomake from './components/Virhelomake'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filtersana, setShowAll] = useState('')

  const namesToShow = filtersana.length<1  ? persons : FilterItems(persons , filtersana)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) =>{
    event.preventDefault()
    setShowAll(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      id: newName,
      number: newNumber,
    }
  
    console.log(persons)

    Virhelomake(numberObject, persons, newName)


    setPersons(persons.concat(numberObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <p> filter shown with: <input onChange={handleFilter}/></p>
      <h3>add a new</h3>
      <form onSubmit={addNumber}>
        <div>
         <p> name: <input value={newName} onChange={handleNameChange}/></p>
         <p> number: <input value={newNumber} onChange={handleNumberChange}/></p>
        </div>
        <div >
          <button  type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
        <div>
          {namesToShow.map(henkilö => <NimenLisays key={henkilö.name} henkilö={henkilö}/>)}
        </div>
    </div>
  )

}





export default App
