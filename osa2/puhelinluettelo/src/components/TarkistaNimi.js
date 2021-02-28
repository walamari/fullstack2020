const TarkistaNimi = (numberObject, persons ) => {

  // otettu mallia stackoverflow:sta
  for(let i = 0; i < persons.length; i++ ){  
    if(numberObject.name.toUpperCase().trim() === persons[i].name.toUpperCase().trim()){
      return i
    }
  }
  return -1
}

export default TarkistaNimi
