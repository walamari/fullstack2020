
/* otettu developer.mozilla.org */
const FilterItems = (objekti, filtersana) => {
    return objekti.filter(henkilö => henkilö.name.toLowerCase().indexOf(filtersana.toLowerCase()) !== -1)
  }

  export default FilterItems