import React from 'react'
import '../Cards/Card.css'

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input 
        placeholder='Buscar'
        type='search'
      ></input><button class="btn btn-outline-success my-2 my-sm-0" type="submit" > <img src="lupa-03.png" height={35} alt="Buscar"></img></button>
      
    </div>
  )
}

export default SearchBar