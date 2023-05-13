//import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


export default function BoxTabs() {
  return (
    <div className="box-tabs tabs">
      <div className="row">
        <div className="tabs--tab col-md-4">
          <input type="radio" id="tab1" name="tab"/>
          <label htmlFor="tab1" id="step-tour-1">
            <img alt="report" className="icon"/><span>Crear usuario</span>
            <Link href="/createUser"><img alt="report" className="icon"/><span>Crear usuario</span></Link>
          </label>
        </div>
        <div className="tabs--tab col-md-4">
          <input type="radio" id="tab2" name="tab"/>
          <label htmlFor="tab2" id="step-tour-6">
            <img  alt="Analitycs" className="icon"/><span>Listar usuario</span>
            <Link href="/listUsers"><img alt="report" className="icon"/><span>Listar usuarios</span></Link>
          </label>
        </div>
        <div className="tabs--tab col-md-4">
          <input type="radio" id="tab3" name="tab"/>
          <label htmlFor="tab3" id="step-tour-7">
            <img  alt="absences" className="icon"/><span>Busqueda por usuario</span>
          </label>
        </div>
      </div>
    </div>
  )
}