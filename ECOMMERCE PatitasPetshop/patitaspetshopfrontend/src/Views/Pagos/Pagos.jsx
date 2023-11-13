import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Pagos = () => {
  const history = useHistory();

  const [opcionPago, setOpcionPago] = useState('');
  const [datosTarjeta, setDatosTarjeta] = useState({
    numeroTarjeta: '',
    nombreTarjeta: '',
    dniTarjeta: '',
    fechaVencimientoTarjeta: '',
    codigoSeguridadTarjeta: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleOptionChange = (e) => {
    setOpcionPago(e.target.value);
  };

  const handlePagar = () => {
    if (opcionPago === 'tarjeta') {
      // Validar datos de la tarjeta (simulado)
      if (datosTarjeta.numeroTarjeta && datosTarjeta.nombreTarjeta && datosTarjeta.dniTarjeta && datosTarjeta.fechaVencimientoTarjeta && datosTarjeta.codigoSeguridadTarjeta) {
        setMensaje('Compra confirmada!');
        setTimeout(() => {
          setOpcionPago('');
          setDatosTarjeta({
            numeroTarjeta: '',
            nombreTarjeta: '',
            dniTarjeta: '',
            fechaVencimientoTarjeta: '',
            codigoSeguridadTarjeta: '',
          });
          window.alert('Compra confirmada. Te enviaremos los detalles por email. ¡Gracias por tu compra!');
          history.push('/');
        }, 2000); // Espera 2 segundos antes de mostrar el alert y redirigir
      } else {
        setMensaje('Error en los datos de la tarjeta. Por favor, inténtalo de nuevo.');
      }
    } else if (opcionPago === 'efectivo') {
      setMensaje('Compra confirmada!');
      setTimeout(() => {
        window.alert('Compra confirmada. Te enviaremos los detalles por email. ¡Gracias por tu compra!');
        history.push('/');
      }, 2000); // Espera 2 segundos antes de mostrar el alert y redirigir
    } else if (opcionPago === 'mercadopago') {
      setMensaje('Escanea el código QR y paga.');
      setTimeout(() => {
        window.alert('Compra confirmada. Te enviaremos los detalles por email. ¡Gracias por tu compra!');
        history.push('/');
      }, 2000); // Espera 2 segundos antes de mostrar el alert y redirigir
    }
  };

  return (
    <div>
      <h1>Pagos</h1>
      <form>
        <div>
          <h3>Seleccione una opción de pago:</h3>
          <div>
            <input
              type="radio"
              id="efectivo"
              name="pago"
              value="efectivo"
              checked={opcionPago === 'efectivo'}
              onChange={handleOptionChange}
            />
            <label htmlFor="domicilio">Efectivo</label>
          </div>
          <div>
            <input
              type="radio"
              id="tarjeta"
              name="pago"
              value="tarjeta"
              checked={opcionPago === 'tarjeta'}
              onChange={handleOptionChange}
            />
            <label htmlFor="tarjeta">Tarjeta de Crédito/Débito</label>
          </div>
          <div>
            <input
              type="radio"
              id="mercadopago"
              name="pago"
              value="mercadopago"
              checked={opcionPago === 'mercadopago'}
              onChange={handleOptionChange}
            />
            <label htmlFor="mercadopago">MercadoPago</label>
          </div>
        </div>

        {opcionPago === 'tarjeta' && (
          <div>
            <h3>Ingrese los datos de la tarjeta:</h3>
            <div>
              <label>Número de Tarjeta:</label>
              <input
                type="text"
                name="numeroTarjeta"
                value={datosTarjeta.numeroTarjeta}
                onChange={(e) =>
                  setDatosTarjeta({ ...datosTarjeta, numeroTarjeta: e.target.value })
                }
              />
            </div>
            <div>
              <label>Nombre en la Tarjeta:</label>
              <input
                type="text"
                name="nombreTarjeta"
                value={datosTarjeta.nombreTarjeta}
                onChange={(e) =>
                  setDatosTarjeta({ ...datosTarjeta, nombreTarjeta: e.target.value })
                }
              />
            </div>
            <div>
              <label>DNI del Titular:</label>
              <input
                type="text"
                name="dniTarjeta"
                value={datosTarjeta.dniTarjeta}
                onChange={(e) =>
                  setDatosTarjeta({ ...datosTarjeta, dniTarjeta: e.target.value })
                }
              />
            </div>
            <div>
              <label>Fecha de Vencimiento:</label>
              <input
                type="text"
                name="fechaVencimientoTarjeta"
                value={datosTarjeta.fechaVencimientoTarjeta}
                onChange={(e) =>
                  setDatosTarjeta({
                    ...datosTarjeta,
                    fechaVencimientoTarjeta: e.target.value
                  })
                }
              />
            </div>
            <div>
              <label>Código de Seguridad:</label>
              <input
                type="text"
                name="codigoSeguridadTarjeta"
                value={datosTarjeta.codigoSeguridadTarjeta}
                onChange={(e) =>
                  setDatosTarjeta({
                    ...datosTarjeta,
                    codigoSeguridadTarjeta: e.target.value
                  })
                }
              />
            </div>
          </div>
        )}

        {opcionPago === 'mercadopago' && (
          <div>
            <img src="qr.png"alt="Código QR" style={{ maxWidth: '100%' }} />
          </div>
        )}

        <button type="button" onClick={handlePagar}>
          Pagar
        </button>
      </form>
      <div>{mensaje}</div>
    </div>
  );
};

export default Pagos;
