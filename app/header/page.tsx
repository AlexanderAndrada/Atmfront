'use client'
import '../app2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useState } from "react";

function Header() {

  const [active, setActive] = useState("1");

  return (
    <>
      <div className="row header">
        <div>
          <div className="flex center pl-3">
            
          </div>
          <div className="user">
            <div >
            </div>
            <div className="notifications">
              
            </div>
            <div id="faqs">
              
            </div>
            <span className="pr-3"> Hola, ALEXANDER ALEXIS </span>
            <div className="menu-mobile">
            
            </div>
          </div>
        </div>
      </div>
      <ul className="nav justify-content-center box-tabs tabs">
      <li className="nav-item">
          <Link className={active === '1' ? 'nav-link active' : 'nav-link'} id="createUser" href="/" onClick={() => setActive("1")}>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className={active === '2' ? 'nav-link active' : 'nav-link'} id="createUser" href="/createUser" onClick={() => setActive("2")}>Crear usuario</Link>
        </li>
        <li className="nav-item">
          <Link className={active === '3' ? 'nav-link active' : 'nav-link'} href="/listUsers" id="listUsers" onClick={() => setActive("3")}>Listar usuarios</Link>
        </li>
        <li className="nav-item">
          <Link className={active === '4' ? 'nav-link active' : 'nav-link'} href="/user" id="updateUser" onClick={() => setActive("4")}>Modificar usuario</Link>
        </li>
      </ul>
    </>
  )
}

export default Header;