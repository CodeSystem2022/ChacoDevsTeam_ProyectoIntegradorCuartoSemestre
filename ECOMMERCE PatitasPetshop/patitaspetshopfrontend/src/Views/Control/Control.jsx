import React, { useState, useEffect } from 'react';
import { postProducto } from '../../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Control/Control.css';

const Control = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newProduct, setNewProduct] = useState({
    codigo: '', 
    nombre: '',
    precio: 0,
    tipo: 'ALIMENTO',
    especie: 'PERRO',
    stock: 0,
    imagen: ''
  });

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar la lista de productos al montar el componente
    fetch('http://localhost:8083/product/listarProductos')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener la lista de productos:', error));
  }, []); // El array vacío asegura que esto solo se ejecute al montar el componente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === 'precio' || name === 'stock' ? Number(value) : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si el nombre ya existe en la lista de productos
    const nombreExistente = productos.find(producto => producto.nombre === newProduct.nombre);

    if (nombreExistente) {
      alert('Este nombre ya existe. Por favor, elige otro nombre.');
    } else {
      // Si el nombre no existe, enviar la solicitud para crear el producto
      dispatch(postProducto(newProduct));
      // Redirigir al usuario a la página de administración /admin
      history.push('/admin');
    }
  };

  const handleGoBack = () => {
    history.push('/admin');
  };

  return (
    <div className='registroproducto'>
      <h2>Registrar un Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imagen">URL de Imagen:</label>
          <input type="text" id="imagen" name="imagen" value={newProduct.imagen} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="codigo">Codigo:</label>
          <input type="text" id="codigo" name="codigo" value={newProduct.codigo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={newProduct.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" value={newProduct.precio} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="tipo">Tipo:</label>
          <select id="tipo" name="tipo" value={newProduct.tipo} onChange={handleChange}>
            <option value="ALIMENTO">ALIMENTO</option>
            <option value="ACCESORIO">ACCESORIO</option>
          </select>
        </div>
        <div>
          <label htmlFor="especie">Especie:</label>
          <select id="especie" name="especie" value={newProduct.especie} onChange={handleChange}>
            <option value="PERRO">PERRO</option>
            <option value="GATO">GATO</option>
          </select>
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" value={newProduct.stock} onChange={handleChange} />
        </div>
        <button type="submit">Registrar Producto</button>
        <div>
          <button type="button" onClick={handleGoBack}>Volver atrás</button> 
        </div>
      </form>
    </div>
  );
};

export default Control;





