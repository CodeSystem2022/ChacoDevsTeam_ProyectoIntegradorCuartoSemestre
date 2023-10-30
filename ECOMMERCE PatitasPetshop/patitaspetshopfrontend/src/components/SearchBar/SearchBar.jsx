import React, { useState } from 'react'
import '../SearchBar/SearchBar.css'
import {useDispatch} from 'react-redux'
import { alimentoByNombre, getProducts } from '../../Redux/Actions/Actions';


const SearchBar = () => {
  const dispath=useDispatch();

  const [nombre,setNombre]=useState(" ");

  const handleChange=event=>{
    setNombre(event.target.value);
  };
  const onSearch=nombre=>{
    dispath(alimentoByNombre(nombre));
  }

const handleSubmit=()=>{
  onSearch(nombre);
  setNombre("")
}
const handleEnterkey=event=>{
  if(event.key==="Enter"){
    handleSubmit();
  }
}
const handleShowAll=()=>{
  dispath(getProducts())
}

  return (
    <div className='SearchBar'>
      <input 
        placeholder='Buscar'
        type='search'
        value={nombre}
				onChange={handleChange}
				onKeyDown={handleEnterkey}
      ></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" > <img src="lupa-03.png" height={35} alt="Buscar"onClick={handleSubmit}></img></button>
      <button class="mostrartodos" onClick={handleShowAll}>Mostrar todos</button>
    </div>
  )
}

export default SearchBar

			
			