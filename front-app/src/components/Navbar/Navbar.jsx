
import { useNavigate } from 'react-router-dom';
import ImagenLogo from '../../assets/Logo Aheral 2021 - Nueva identidad.png';
import styles from './Navbar.module.css'
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const status = parseInt(localStorage.getItem('Status'));
  const user = localStorage.getItem('User');
  const name = localStorage.getItem('Name');
  // if(status === '1') setUserStatus(true);


  const handleLogOut = () => {
    confirmLogout();
  };

  const confirmLogout = () => {
    Swal.fire({
      icon: 'question',
      title: 'Cerrar sesión',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirmó la acción, cerrar sesión y redirigir a la página de inicio
        dispatch(logoutUserAction(user))
        localStorage.setItem('Status', 0)
        localStorage.setItem('User', '')
        localStorage.setItem('Name', '')
        navigate("/");
      }
    });
  }



  const btnLogo = () => {
    if (status == 1) {
      navigate('/home')
    } else if (status == 0) {
      navigate('/')
    }
  }



  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <button onClick={btnLogo}>
          <img src={ImagenLogo} alt="" className={styles.logo} />
        </button>
      </div>
      <div className={styles.navbarMid}>
        <h1>Sistema de Recursos Humanos</h1>
      </div>
      {
        status ? (
          <div className={styles.navbarEnd}>
            <h4>Hola {name}</h4>
            <button className={styles.logoutBtn} onClick={handleLogOut}>Cerrar sesión</button>
          </div>
        ) : ''
      }
    </nav>
  );
};

export default Navbar;
