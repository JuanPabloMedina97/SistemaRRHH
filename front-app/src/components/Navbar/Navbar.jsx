import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagenLogo from '../../assets/Logo Aheral 2021 - Nueva identidad.png'


import './Navbar.css';
import LoginButton from '../Login/LoginButton';
import RegisterButton from '../Register/RegisterButton';


const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    // Aquí podrías incluir la lógica para cerrar sesión en tu aplicación
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src={ImagenLogo} alt="" className='logo'/></Link>
      </div>
      <div className="navbar-mid">
        <h1>Sistema de Recursos Humanos</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          {!loggedIn && (
            <>
              <LoginButton/>
              <RegisterButton/>
            </>
          )}
          {loggedIn && (
            <>
              <Link to="/" className="navbar-items" style={{textDecoration: 'none'}}> {/*Modificar el diseño */}
                Hola Usuario
              </Link>
              <a href="#" onClick={handleLogout} className="navbar-item">
                Salir
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;