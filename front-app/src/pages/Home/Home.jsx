import { Link } from 'react-router-dom'
import { FaLaptopMedical } from "react-icons/fa";
import { BsFillPeopleFill, BsFillClipboardCheckFill, BsShieldPlus } from 'react-icons/bs'
import { GrDocumentPerformance } from 'react-icons/gr'
import { GiClothes } from 'react-icons/gi'


import styles from './Home.module.css'


const Home = () => {

  

  

  const icons = [
    { path: '/home/user', icon: <BsFillPeopleFill fontSize={'50px'}/>, name: 'Personal', },
    { path: '/home/pagina2', icon: <BsFillClipboardCheckFill fontSize={'50px'}/>, name: 'Asistencia', disabled: 'disabled' },
    { path: '/home/hys', icon: <BsShieldPlus fontSize={'50px'}/>, name: 'HyS', disabled: 'disabled' },
    { path: '/pagina4', icon: 'fa fa-film', name: 'RSE', disabled: 'disabled' },
    { path: '/pagina5', icon: <FaLaptopMedical fontSize={'50px'}/>, name: 'Servicio Medico', disabled: 'disabled' },
    { path: '/pagina6', icon: <GrDocumentPerformance fontSize={'50px'}/>, name: 'Desempeño', disabled: 'disabled' },
    { path: '/pagina7', icon: <GiClothes fontSize={'50px'}/>, name: 'EPP', disabled: 'disabled' },
    // Agrega más objetos según la cantidad de iconos que necesites
  ];


  return (
    <div className={styles.iconContainer}>
      {icons.map((icon) => (
        <Link to={icon.path} key={icon.path} className={`${styles.iconLink}`}>
          {icon.icon}
          <span className={styles.iconName}>{icon.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Home