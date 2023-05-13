"use client";
//import '../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion';
import imagen from '../../public/img/hijosCletus.jpg';

import { useState, useEffect } from 'react';

export default function ListUsers() {

  const [clientes, setClientes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [numeroDocumento, setNumeroDocumento] = useState("");

  function buscar () {
    setBuscando(true);
    //Delay 5 seg
    setTimeout(() => {
      fetch("http://localhost:3500/user", {
        method: "GET",
        body: JSON.stringify({
          numeroDocumento: numeroDocumento,
        })
      })
      .then(res => {
        if (res.status === 200) {
          setError(false);
          setMensajeAlerta('Usuario encontrado');
        } else {
          setError(true);
          setVisible(true);
          setMensajeAlerta('No existe el usuario');
        }
      })
      .catch(err => {
        setVisible(true);
        setError(true);
        setMensajeAlerta('Falla en la conexión');
      })
      setBuscando(false);
    }, 5000);
  }

  useEffect(() => {
    fetch('http://localhost:3500/user/list')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        console.log(res);
        if (res) {
          setError(false);
          setClientes(res);
        } else {
          setError(true);
          setVisible(true);
          setMensajeAlerta('Sin resultados');
        }
      })
      .catch(err => {
        setVisible(true);
        setError(true);
        setMensajeAlerta('Falla en la conexión');
      })
  }, [])

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
        <h1>Lista de clientes</h1>
      </div>
      <br></br>
      <div className='row'>
        <div className='col-md-8'>
          <div className='row mb-3'>
            <div className='col-md-3'>
              <label htmlFor="numeroDocumento" className="form-label visually-hidden">Número de documento</label>
              <input 
                type="text" 
                className="form-control" 
                id="numeroDocumento" 
                value={numeroDocumento}
                placeholder="Número de documento"
                onChange={(e) => setNumeroDocumento(e.target.value)}
                required/>
            </div>
            <div className='col-md-3'>
              {buscando 
                ?
                  <button onClick={buscar} className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Buscando...
                  </button>
                :
                  <button onClick={buscar} className="btn btn-primary">Buscar</button>
              }
            </div>
          </div>
          {clientes.map(client => {
            return(
              <>
                <div className="card mb-3" key={client.numeroDocumento}>
                  <div className="card-body">
                    <div className='row'>
                      <div className='col-md-6'>
                        <h5 className="card-title">{client.apellido} {client.nombre}</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <h6 className="card-subtitle text-muted">{client.numeroDocumento}</h6>
                      </div>
                    </div>
                    <div className='row mt-2'>
                      <div className='col-md-12'>
                        <button className="btn btn-primary me-2" type="button" data-bs-toggle="collapse" data-bs-target={"#a".concat(client.numeroDocumento)} aria-expanded="false" aria-controls={"a".concat(client.numeroDocumento)}>
                          Ver más datos
                        </button>
                        <button type="button" className="btn btn-primary me-2">Editar</button>
                        <button type="button" className="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target={"#modal".concat(client.numeroDocumento)}>Borrar</button>
                      </div>
                    </div>
                      <div className="collapse mt-3" id={"a".concat(client.numeroDocumento)}>
                        <div className="card card-body">
                        <div className='row'>
                      <div className='col-md-6'>
                        <b>Caja ahorro pesos:</b>
                        <ul>
                          <li><b>Numero cuenta: </b>{client.cajaAhorroPesos.numeroCuenta}</li>
                          <li><b>Divisa: </b>{client.cajaAhorroPesos.divisa}</li>
                          <li><b>Moneda: </b>{client.cajaAhorroPesos.moneda}</li>
                          <li><b>Saldo: </b>{client.cajaAhorroPesos.saldo}</li>
                        </ul>
                      </div>
                      <div className='col-md-6'>
                        <b>Caja ahorro dolares:</b>
                        <ul>
                          <li><b>Numero cuenta: </b>{client.cajaAhorroDolar.numeroCuenta}</li>
                          <li><b>Divisa: </b>{client.cajaAhorroDolar.divisa}</li>
                          <li><b>Moneda: </b>{client.cajaAhorroDolar.moneda}</li>
                          <li><b>Saldo: </b>{client.cajaAhorroDolar.saldo}</li>
                        </ul>
                      </div>
                    </div>
                        </div>
                      </div>
                  </div>
                  <div className="modal fade" id={"modal".concat(client.numeroDocumento)} aria-labelledby={"#label".concat(client.numeroDocumento)} aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={"label".concat(client.numeroDocumento)}>Eliminar usuario</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          Estás a punto de eliminar el usuario {client.apellido} {client.nombre} ({client.numeroDocumento}). <b>¿Desea continuar?</b>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" className="btn btn-primary">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className='col-md-4'>
        <img src={imagen.src} alt="Logo" className='img-fluid img-thumbnail mt-5' />
        </div>
      </div>
    </div>
  )
}




