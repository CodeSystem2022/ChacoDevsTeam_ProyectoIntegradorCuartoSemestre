import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Contador from '../../components/Contador/Contador';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCarritoContexto } from '../../CarritoContext/CarritoContext'
import '../Detail/Detail.css';


const Detail = ({data}) => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const [goCart,setGoCart]=useState(false);
  const {addCarrito}=useCarritoContexto();
  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8083/product/obtenerProducto/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    getProducts();
  }, [id]);

  const onAdd = (quantity,data) => {
    setGoCart(true);
    addCarrito(data, quantity);
  }

  return (
      <div>
        <div className="product-details">
            <h2>Detalles del Producto</h2>
            <div className='product-container'>
              <ul>
                <img src={producto.imagen} alt={producto.nombre} />
                <h4>{producto.nombre}</h4>
                <h5>Precio:${producto.precio}</h5>
                <div className="purchase-options">
                  {goCart ? (
                    <Link to={'/carrito'} className="Finaliza">Finaliza tu compra!</Link>
                  ) : (
                    <Contador
                      initial={1}
                      stock={5}
                      onAdd={(quantity) => onAdd(quantity, producto)}
                    ></Contador>
                  )}
                </div>
              </ul>
                
          </div>
      </div>
    </div>
  );
};

export default Detail;