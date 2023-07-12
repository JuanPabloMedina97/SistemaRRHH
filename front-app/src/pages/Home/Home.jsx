import { Link } from 'react-router-dom'
import { FaLaptopMedical } from "react-icons/fa";
import { BsFillPeopleFill, BsFillClipboardCheckFill, BsShieldPlus } from 'react-icons/bs'
import { GrDocumentPerformance } from 'react-icons/gr'
import { GiClothes } from 'react-icons/gi'


import './Home.css';



const Home = () => {

  const icons = [
    { path: '/user', icon: <BsFillPeopleFill fontSize={'50px'}/>, name: 'Personal' },
    { path: '/pagina2', icon: <BsFillClipboardCheckFill fontSize={'50px'}/>, name: 'Asistencia' },
    { path: '/hys', icon: <BsShieldPlus fontSize={'50px'}/>, name: 'HyS' },
    { path: '/pagina4', icon: 'fa fa-film', name: 'RSE' },
    { path: '/pagina5', icon: <FaLaptopMedical fontSize={'50px'}/>, name: 'Servicio Medico' },
    { path: '/pagina6', icon: <GrDocumentPerformance fontSize={'50px'}/>, name: 'Desempeño' },
    { path: '/pagina7', icon: <GiClothes fontSize={'50px'}/>, name: 'EPP' },
    // Agrega más objetos según la cantidad de iconos que necesites
  ];

  const disableLinks = false; // Establece esta variable en true para deshabilitar los enlaces

  return (
    <div className="icon-container">
      {icons.map((icon) => (
        <Link to={icon.path} key={icon.path} className={`icon-link ${disableLinks ? 'disabled' : ''}`}>
          {icon.icon}
          <span className="icon-name">{icon.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Home