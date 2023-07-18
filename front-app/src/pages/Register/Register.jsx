import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createUserAction } from '../../redux/actions';



function Registration() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    legajo: '',
    usuario: '',
    correo: '',
    contrasena: '',
    confirmContrasena: '',
    tipoDeUsuario: ''
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDomainValid, setIsDomainValid] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === 'nombre' || name === 'apellido') {
      updatedValue = capitalizeFirstLetter(value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (name === 'usuario') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value.toUpperCase()
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.contrasena !== formData.confirmContrasena) {
      setPasswordsMatch(false);
      return;
    }

    if (!formData.correo.endsWith('@acheral.com.ar')) {
      setIsDomainValid(false);
      return;
    }

    setPasswordsMatch(true);
    setIsDomainValid(true);
    dispatch(createUserAction(formData));
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };
  
  return (
    <div className="container-register">
      <div className="registration-box">
        <h2>Registro de usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="legajo">Legajo:</label>
            <input
              type="number"
              id="legajo"
              name="legajo"
              value={formData.legajo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="usuario">Nombre de usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleInputChange}
              onBlur={handleBlur} // Agregar el evento onBlur
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo ACHERAL:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              required
            />
            {!isDomainValid && (
              <p className="error-message">El correo debe ser de dominio acheral.com.ar</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña:</label>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleInputChange}
                required
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="password-toggle"
                  onClick={handleTogglePassword}
                  fontSize={'25px'}
                />
              ) : (
                <AiFillEye
                  className="password-toggle"
                  onClick={handleTogglePassword}
                  fontSize={'25px'}
                />
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-contrasena">Repetir contraseña:</label>
            <div className="password-field">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-contrasena"
                name="confirmContrasena"
                value={formData.confirmContrasena}
                onChange={handleInputChange}
                required
              />
              {showConfirmPassword ? (
                <AiFillEyeInvisible
                  className="password-toggle"
                  onClick={handleToggleConfirmPassword}
                  fontSize={'25px'}
                />
              ) : (
                <AiFillEye
                  className="password-toggle"
                  onClick={handleToggleConfirmPassword}
                  fontSize={'25px'}
                />
              )}
            </div>
            {!passwordsMatch && (
              <p className="error-message">Las contraseñas no coinciden.</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="tipoDeUsuario">Tipo de usuario:</label>
            <select
              id="tipoDeUsuario"
              name="tipoDeUsuario"
              value={formData.tipoDeUsuario}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccione un tipo</option>
              <option value="admin">Administrador</option>
              <option value="porteria">Porteria</option>
              <option value="hys">Higiene y Seguridad</option>
              <option value="medico">Servicio Medico</option>
              <option value="user">Usuario</option>
            </select>
          </div>
          <div className="button-container">
            <button type="submit" className="create-user-btn">
              Crear usuario
            </button>
            <button onClick={handleCancel} className="cancel-create-user-btn cancel-btn">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
