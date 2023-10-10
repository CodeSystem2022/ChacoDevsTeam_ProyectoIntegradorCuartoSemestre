import {useEffect,useState} from 'react';
import './styles/App.css';
//import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/product/listarProductos', { //8083 puerto de producto http://localhost:8083/products/listarProductos
      method: "get",
      headers: {
        "ngrok-skip-browser-warning": "69420",
      }
    })
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error:', error))
  }, []);
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
        <strong>Nombre:</strong> {product.nombre}<br />
          <strong>Precio:</strong> {product.precio}<br />
          <strong>Tipo:</strong> {product.tipo}<br />
          <strong>Especie:</strong> {product.especie}<br />
          <strong>Stock disponible:</strong> {product.stock}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
