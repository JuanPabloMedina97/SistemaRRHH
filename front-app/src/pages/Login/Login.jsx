import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {useUserContext} from '../../context/UserContext';
import { useDispatch } from 'react-redux';
import { getLoginAction } from '../../redux/actions';




function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { userActive, setUserActive } = useUserContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const user = {username, password};
    dispatch(getLoginAction(user));
    // setUserActive(true);
    navigate('/home');
  };

  const handleCreateUser = () => {
    navigate('/register')
  };

  return (
    <div className="container-login">
      <div className="login-box">
        <input
          className="inputs"
          type="text"
          placeholder="Usuario o correo"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputs"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i
          className={`toggle-password ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
          onClick={handleTogglePassword}
        />
        <div className="forgot-password">
          <Link to={"/forgotpassword"}>¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="button-container">
          <button className="account-btn" onClick={handleLogin}>
            Iniciar sesión
          </button>
          <button className="account-btn small" onClick={handleCreateUser}>
            Crear usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
