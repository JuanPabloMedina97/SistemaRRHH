import React, { useState } from 'react';
import './LoginButton.css';

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    // Lógica para iniciar sesión
  };

  const handleForgotPassword = () => {
    // Lógica para olvidar contraseña
  };

  return (
    <>
      <button className="login-button" onClick={handleOpenModal}>
        Iniciar sesión
      </button>
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
            <h2>Iniciar sesión</h2>
            <form>
              <label>
                Correo electrónico
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Contraseña
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="buttons-container">
                <button className="login-form-button" onClick={handleLogin}>
                  Iniciar sesión
                </button>
                <button
                  className="forgot-password-button"
                  onClick={handleForgotPassword}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;