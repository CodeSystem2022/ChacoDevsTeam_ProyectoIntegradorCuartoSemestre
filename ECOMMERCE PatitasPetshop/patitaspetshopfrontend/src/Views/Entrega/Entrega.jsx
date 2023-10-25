import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Entrega = () => {
  const history = useHistory();

  const [opcionEntrega, setOpcionEntrega] = useState('retiro');
  const [direccion, setDireccion] = useState('');

  const handleOptionChange = (e) => {
    setOpcionEntrega(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push('/pagos');
  };

  return (
    <div>
      <h1>Envío</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Seleccione una opción de entrega:</h3>
          <div>
            <input
              type="radio"
              id="retiro"
              name="entrega"
              value="retiro"
              checked={opcionEntrega === 'retiro'}
              onChange={handleOptionChange}
            />
            <label htmlFor="retiro">Retiro en la Sucursal más cercana</label>
          </div>
          <div>
            <input
              type="radio"
              id="domicilio"
              name="entrega"
              value="domicilio"
              checked={opcionEntrega === 'domicilio'}
              onChange={handleOptionChange}
            />
            <label htmlFor="domicilio">Entrega a Domicilio</label>
          </div>
        </div>

        {opcionEntrega === 'domicilio' && (
          <div>
            <h3>Ingrese la dirección de entrega:</h3>
            <input
              type="text"
              name="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
        )}

        <button type="submit">Continuar para realizar pago!</button>
      </form>
    </div>
  );
};

export default Entrega;