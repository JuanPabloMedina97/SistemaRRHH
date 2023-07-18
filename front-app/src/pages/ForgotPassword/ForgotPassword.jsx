import { useState } from 'react'
import './ForgotPassword.css'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [legajo, setLegajo] = useState('');
  const navigate = useNavigate();

  const handleEmailOrUsernameChange = (event) => {
    setEmailOrUsername(event.target.value);
  };

  const handleLegajoChange = (event) => {
    setLegajo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convertir los datos en un objeto
    const formData = {
      emailOrUsername,
      legajo
    };

    // Aquí puedes realizar la lógica de envío del formulario
    // como enviar una solicitud al servidor para recuperar la contraseña
    console.log(formData);

    // Reiniciar los campos del formulario después de enviarlo
    setEmailOrUsername('');
    setLegajo('');
  };

  const handleCancel = () => {
    navigate("/")
  };

  return (
    <form className="password-recovery-form" onSubmit={handleSubmit}>
      <h2>Recuperacion de contraseña</h2>
      <div className="form-group">
        <label htmlFor="emailOrUsername">Correo o Usuario:</label>
        <input
          type="text"
          id="emailOrUsername"
          value={emailOrUsername}
          onChange={handleEmailOrUsernameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="studentId">Legajo:</label>
        <input
          type="text"
          id="studentId"
          value={legajo}
          onChange={handleLegajoChange}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};


export default ForgotPassword