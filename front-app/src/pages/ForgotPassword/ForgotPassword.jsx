import { useState } from 'react'
import styles from './ForgotPassword.module.css'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const [legajo, setLegajo] = useState('');
  const navigate = useNavigate();

  

  const handleLegajoChange = (event) => {
    setLegajo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convertir los datos en un objeto
    const formData = {
      legajo
    };

    // Aquí puedes realizar la lógica de envío del formulario
    // como enviar una solicitud al servidor para recuperar la contraseña
    console.log(formData);
    setLegajo('');
  };

  const handleCancel = () => {
    navigate("/")
  };

  return (
    <form className={styles.passwordRecoveryForm} onSubmit={handleSubmit}>
      <h2>Recuperacion de contraseña</h2>
      <div className={styles.formGroup}>
        <label htmlFor="studentId">Legajo:</label>
        <input
          type="text"
          id="studentId"
          value={legajo}
          onChange={handleLegajoChange}
          required
        />
      </div>
      <div className={styles.formActions}>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};


export default ForgotPassword