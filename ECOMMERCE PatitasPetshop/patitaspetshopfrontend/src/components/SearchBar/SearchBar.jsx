import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <h1>Barra de busqueda</h1>
      <input 
        placeholder='Busca aqui'
        type='search'
      ></input>
      <button type="submit" >Buscar</button>
    </div>
  )
}

export default SearchBar