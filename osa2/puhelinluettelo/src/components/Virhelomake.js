
const Virhelomake = (numberObject, persons, newName ) => {
    for(let i = 0; i < persons.length; i++ ){  
      if(numberObject.name.toUpperCase().trim() === persons[i].name.toUpperCase().trim()){
        window.alert(newName + " is already added to phonebook!");
        return
      }
    }
  }

export default Virhelomake