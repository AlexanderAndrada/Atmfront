import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import imagen2 from '../public/img/2.jpg';
import imagen3 from '../public/img/3.jpg';
import imagen5 from '../public/img/5.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <div className='row mt-3'>
        <div className='col-md-12'>
          <h1>Home</h1>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <div className="card">
            <img src={imagen2.src} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Crear usuario</h5>
              <p className="card-text">Sección para dar de alta un usuario.</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card">
            <img src={imagen3.src} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Listar usuarios</h5>
              <p className="card-text">Sección para listar usuarios.</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card">
            <img src={imagen5.src} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Modificar usuario</h5>
              <p className="card-text">Sección para modificar un usuario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
