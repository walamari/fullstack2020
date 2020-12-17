
const Filteritems = (valtiot, filtersana) => {

  return valtiot.filter(maa => maa.name.toLowerCase().indexOf(filtersana.toLowerCase()) !== -1)



}
  export default Filteritems