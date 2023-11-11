import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { alimentoByNombre, getProducts } from '../../Redux/Actions/Actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const productosFiltrados = useSelector((state) => state.productosFiltrados);

  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const onSearch = (nombre) => {
    dispatch(alimentoByNombre(nombre));
  };

  const handleSubmit = () => {
    if (nombre.trim() === '') {
      // No realizar la búsqueda si el campo está vacío
      return;
    }

    onSearch(nombre);
    setNombre('');
  };

  const handleEnterkey = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleShowAll = () => {
    dispatch(getProducts());
  };

  const showNoMatchesAlert = () => {
    if (!productosFiltrados || productosFiltrados.length === 0) {
      alert('No se encontraron coincidencias.');
    }
  };

  return (
    <div className='SearchBar'>
      <input
        placeholder='Buscar'
        type='search'
        value={nombre}
        onChange={handleChange}
        onKeyDown={handleEnterkey}
      ></input>
      <button
        className='btn btn-outline-success my-2 my-sm-0'
        type='submit'
        onClick={() => {
          handleSubmit();
    // Solo muestra el alerta si no hay productos encontrados
    if (productosFiltrados && productosFiltrados.length === 0) {
      showNoMatchesAlert();;}
        }}
      >
        {' '}
        <img src='lupa-03.png' height={35} alt='Buscar'></img>
      </button>
      <button className='mostrartodos' onClick={handleShowAll}>
        Mostrar todos
      </button>
    </div>
  );
};

export default SearchBar;