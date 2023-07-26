import { useState } from 'react';
import styles from './Register.module.css'
import { useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createUserAction } from '../../redux/actions';
import Swal from 'sweetalert2'


function Registration() {
  const initialFormData = {
    nombre: '',
    apellido: '',
    legajo: '',
    usuario: '',
    correo: '',
    contrasena: '',
    tipoDeUsuario: '',
    confirmContrasena: '',
  };

  const [formData, setFormData] = useState(initialFormData);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loadingAlert = Swal.fire({
      title: 'Creando usuario...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    })

    try {
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

      // const formDataToSend = { ...formData };
      delete formData.confirmContrasena;

      dispatch(createUserAction(formData));

      formData.contrasena = ''
      formData.confirmContrasena = ''

      await new Promise((resolve) => setTimeout(resolve, 2000))

      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Usuario creado correctamente.',
      });

      setFormData(initialFormData);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error al crear el usuario. Por favor, inténtalo nuevamente.',
      });
    } finally {
      loadingAlert.close();
    }
  };

  const handleCancel = () => {
    const loadingPage = Swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      loadingPage.close();
    }
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
    <div className={styles.containerRegister}>
      <div className={styles.registrationBox}>
        <h2>Registro de usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
              <p className={styles.errorMessage}>El correo debe ser de dominio acheral.com.ar</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contrasena">Contraseña:</label>
            <div className={styles.passwordField}>
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
                  className={styles.passwordToggle}
                  onClick={handleTogglePassword}
                  fontSize={'25px'}
                />
              ) : (
                <AiFillEye
                  className={styles.passwordToggle}
                  onClick={handleTogglePassword}
                  fontSize={'25px'}
                />
              )}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirm-contrasena">Repetir contraseña:</label>
            <div className={styles.passwordField}>
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
                  className={styles.passwordToggle}
                  onClick={handleToggleConfirmPassword}
                  fontSize={'25px'}
                />
              ) : (
                <AiFillEye
                  className={styles.passwordToggle}
                  onClick={handleToggleConfirmPassword}
                  fontSize={'25px'}
                />
              )}
            </div>
            {!passwordsMatch && (
              <p className={styles.errorMessage}>Las contraseñas no coinciden.</p>
            )}
          </div>
          <div className={styles.formGroup}>
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
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.createUserBtn}>
              Crear usuario
            </button>
            <button onClick={handleCancel} className={`${styles.cancelCreateUserBtn} ${styles.cancelBtn}`}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
