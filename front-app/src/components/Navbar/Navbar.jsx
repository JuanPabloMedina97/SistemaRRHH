import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImagenLogo from '../../assets/Logo Aheral 2021 - Nueva identidad.png';
import './Navbar.css';

import { useUserContext } from '../../context/UserContext';

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(false);
    navigate("/");
  }
  

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={ImagenLogo} alt="" className="logo" />
        </Link>
      </div>
      <div className="navbar-mid">
        <h1>Sistema de Recursos Humanos</h1>
      </div>
      {
        user ? (
          <div className="navbar-end">
            <h4>Hola usuario</h4>
            <button className="logout-btn" onClick={handleLogOut}>Cerrar sesión</button>
          </div>
        ) : ''
      }
    </nav>
  );
};

export default Navbar;
