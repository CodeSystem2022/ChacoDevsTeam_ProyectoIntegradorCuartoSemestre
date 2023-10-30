import React, { useState } from 'react'
import { postUser } from '../../Redux/Actions/Actions'
import {useDispatch} from 'react-redux'
import '../Formulario/Form.css';

const Form = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    celular: 0,
    email: "",
    contraseña: ""
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    celular: "",
    email: "",
    contraseña: ""
  });

  const validar = (state, name) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nameRegex = /^[A-Za-z\s]+$/;
    const celularRegex = /^\d{0,20}$/;
    const addressRegex = /^[A-Za-z0-9\s#-]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    switch (name) {
      case "nombre":
        if (state.nombre === "") {
          setErrors({ ...errors, nombre: "Campo requerido" });
        } else if (!nameRegex.test(state.nombre)) {
          setErrors({ ...errors, nombre: "El nombre solo puede contener letras y espacios" });
        } else {
          setErrors({ ...errors, nombre: "" });
        }
        break;
      case "apellido":
        if (state.apellido === "") {
          setErrors({ ...errors, apellido: "Campo requerido" });
        } else if (!nameRegex.test(state.apellido)) {
          setErrors({ ...errors, apellido: "El apellido solo puede contener letras y espacios" });
        } else {
          setErrors({ ...errors, apellido: "" });
        }
        break;
      case "direccion":
        if (state.direccion === "") {
          setErrors({ ...errors, direccion: "Campo requerido" });
        } else if (!addressRegex.test(state.direccion)) {
          setErrors({ ...errors, direccion: "Dirección no válida, no puede poseer puntos ni comas" });
        } else {
          setErrors({ ...errors, direccion: "" });
        }
        break;
      case "celular":
        if (state.celular === "") {
          setErrors({ ...errors, celular: "Campo requerido" });
        } else if (!celularRegex.test(state.celular)) {
          setErrors({ ...errors, celular: "Número de celular incorrecto, no se admiten letras" });
        } else {
          setErrors({ ...errors, celular: "" });
        }
        break;
      case "email":
        if (state.email === "") {
          setErrors({ ...errors, email: "El campo de correo electrónico no puede estar vacío." });
        } else if (!emailRegex.test(state.email)) {
          setErrors({ ...errors, email: "El correo electrónico no es válido." });
        } else {
          setErrors({ ...errors, email: "" });
        }
        break;
      case "contraseña":
        if (state.contraseña === "") {
          setErrors({ ...errors, contraseña: "La contraseña no puede estar vacía." });
        } else if (!passwordRegex.test(state.contraseña)) {
          setErrors({
            ...errors,
            contraseña: "La contraseña debe contener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial."
          });
        } else {
          setErrors({ ...errors, contraseña: "" });
        }
        break;
      default:
        break;
    }
  }

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    validar({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name);
  }

  const disableFunction = () => {
    // Verifica si hay algún mensaje de error en los campos
    return Object.values(errors).some((error) => error !== "");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(state));
  }



  return (
    <div className="registrocaja">
    <div className="registro-style">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit}>
        <label  >Nombre</label>
        <input name='nombre' onChange={handleChange} type="text" placeholder='Ingrese nombres'/>
        <div><p>{errors.nombre}</p></div>
        <label >Apellido</label>
        <input name='apellido' onChange={handleChange} type="text" placeholder='Ingrese apellidos '/>
        <div><p>{errors.apellido}</p></div>
        <label >Direccion</label>
        <input name='direccion' onChange={handleChange} type="text" placeholder='Ingrese su direccion de envio'/>
        <div><p>{errors.direccion}</p></div>
        <label >Celular</label>
        <input name='celular' onChange={handleChange} type="text" placeholder='Ingrese su celular'/>
        <div><p>{errors.celular}</p></div>
        <label >Email</label>
        <input name='email' onChange={handleChange} type="text" placeholder='Ingrese su email de contacto'/>
        <div><p>{errors.email}</p></div>
        <label>Contraseña</label>
        <input name='contraseña' onChange={handleChange} type="text" placeholder='Ingrese su contraseña'/>
        <div><p>{errors.contraseña}</p></div>
        
        <input disabled={disableFunction()} type="submit" />
      </form>
      
    </div>
    </div>
  )
}

export default Form
