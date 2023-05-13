//import '../app.css';
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import imagen from '../../public/img/1.jpg';

export default function CreateUser() {
  
  const [numeroDocumento, setNumeroDocumento] = useState("a");
  const [nombre, setNombre] = useState("a");
  const [apellido, setApellido] = useState("a");
  const [password, setPassword] = useState("1234");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [creando, setCreando] = useState(false);

  function handleSubmit () {
    setCreando(true);
    //Delay 5 seg
    setTimeout(() => {
      fetch("http://localhost:3500/user", {
        method: "POST",
        body: JSON.stringify({
          numeroDocumento: numeroDocumento,
          nombre: nombre,
          apellido: apellido,
          password: password,
        })
      })
      .then(res => {
        if (res.status === 200) {
          setError(false);
          setMensajeAlerta('Usuario creado exitosamente');
        } else {
          setError(true);
          setVisible(true);
          setMensajeAlerta('Error al crear el usuario');
        }
      })
      .catch(err => {
        setVisible(true);
        setError(true);
        setMensajeAlerta('Falla en la conexión');
      })
      setCreando(false);
    }, 5000);
  }
  
    //"http://localhost:3500/user"

  return (
    <div className="container">
      <br></br>
      <br></br>
      { visible ?
        <div className={error ? 'alert alert-danger' : 'alert alert-success' } role="alert">
          {mensajeAlerta}
        </div> : <div></div>
      }
      <div className='row'>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Ingreso de usuario</h1>
            </div>
          </div>

          <form className='needs-validation mt-3'>
            <div className='row'>
              <div className='col-md-6'>
                <label htmlFor="nombre" className="form-label">Número de documento</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="numeroDocumento" 
                  name="numeroDocumento" 
                  value={numeroDocumento}
                  placeholder="numeroDocumento"
                  onChange={(e) => setNumeroDocumento(e.target.value)}
                  required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  name="nombre" 
                  value={nombre}
                  placeholder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  required/>
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="apellido" 
                  name="apellido" 
                  value={apellido}
                  placeholder="apellido"
                  onChange={(e) => setApellido(e.target.value)}
                  required/>
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  name="password" 
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled 
                  required/>
              </div>
            </div>
          </form>
          <div className='row mt-3'>
              <div className="col-md-6">
                {creando 
                  ?
                  <button onClick={handleSubmit} className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Creando...
                  </button>
                  :
                  <button onClick={handleSubmit} className="btn btn-primary">Crear</button>
                }
              </div>
          </div>
        </div>
        <div className='col-md-6'>
          <img src={imagen.src} alt="Logo" className='centered-element' />
        </div>
      </div>
    </div>
  )
}