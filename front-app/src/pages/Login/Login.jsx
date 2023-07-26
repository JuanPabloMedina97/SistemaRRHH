import { useState } from 'react';
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLoginAction } from '../../redux/actions';
import Swal from 'sweetalert2';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';




function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña
  const navigate = useNavigate();
  const dispatch = useDispatch();





  const handleLogin = async () => {
    const user = { username, password };

    const loadingAlert = Swal.fire({
      title: 'Iniciando sesion...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const loginData = await dispatch(getLoginAction(user));
      if (loginData.isActive === 1) {
        localStorage.setItem('Status', 1);
        localStorage.setItem('User', username)
        localStorage.setItem('Name', loginData.nombre)
        navigate('/home')
      }
    } catch (error) {
      console.log("Error");
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'Usuario o contraseña invalidos, verifica tus datos por favor'
      })
    } finally {
      loadingAlert.close();
    }


  };

  const handleCreateUser = () => {
    const loadingPage = Swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      navigate('/register');
    } catch (error) {
      console.log(error);
    } finally {
      loadingPage.close();
    }

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Cambiar el estado para mostrar u ocultar la contraseña
  };



  return (
    <div className={styles.containerLogin}>
      <div className={styles.loginBox}>
        <div className={styles.passwordField}>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Usuario o correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
        </div>
        <div className={styles.passwordField}> {/* Agregar un contenedor para el input de contraseña */}
          <input
            className={styles.inputs}
            type={showPassword ? 'text' : 'password'} // Usar el estado para mostrar u ocultar la contraseña
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          {showPassword ? ( // Mostrar el ícono correspondiente según el estado
            <AiOutlineEyeInvisible
              className={styles.passwordToggle}
              onClick={handleTogglePassword}
              fontSize={'25px'}
            />
          ) : (
            <AiOutlineEye
              className={styles.passwordToggle}
              onClick={handleTogglePassword}
              fontSize={'25px'}
            />
          )}
        </div>
        <div className={styles.forgotPassword}>
          <Link to={"/forgotpassword"}>¿Olvidaste tu contraseña?</Link>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.accountBtn} onClick={handleLogin}>
            Iniciar sesión
          </button>
          <button className={[styles.createBtn]} onClick={handleCreateUser}>
            Crear usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
