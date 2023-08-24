import { Link } from 'react-router-dom';
import { AiOutlineSchedule, AiOutlineAlert, AiOutlineIdcard } from "react-icons/ai";
import { GiSiren, GiBodyHeight } from 'react-icons/gi'
import { FaWpforms, FaFireExtinguisher } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { BsLightbulb, BsFire, BsClipboardCheck } from 'react-icons/bs';
import { GrUserWorker } from 'react-icons/gr';
import { GiFuelTank } from 'react-icons/gi';
import { MdNoiseControlOff, MdNoiseAware } from 'react-icons/md';
import { FcElectricity } from 'react-icons/fc';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {BiShieldPlus} from 'react-icons/bi';
import {FcInspection} from 'react-icons/fc';
import {TbVirusOff} from 'react-icons/tb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faPersonFallingBurst } from '@fortawesome/free-solid-svg-icons';



import styles from './Hys.module.css'

const Hys = () => {

  const icons = [
    { path: '/home/user', icon: <FontAwesomeIcon icon={faFileContract} fontSize={'50px'} />, name: 'Política de HyS', },
    { path: '/home/pagina2', icon: <GrUserWorker fontSize={'50px'} />, name: 'R.A.R', disabled: 'disabled' },
    { path: '/home/hys', icon: <FaHelmetSafety fontSize={'50px'} />, name: 'RGRL', disabled: 'disabled' },
    { path: '/pagina4', icon: <AiOutlineSchedule fontSize={'50px'} />, name: 'Cronograma anual de capacitaciones', disabled: 'disabled' },
    { path: '/pagina5', icon: <FaWpforms fontSize={'50px'} />, name: 'Planillas de capacitacion', disabled: 'disabled' },
    { path: '/pagina6', icon: <AiOutlineAlert fontSize={'50px'} />, name: 'Plan de conteingencias', disabled: 'disabled' },
    { path: '/pagina7', icon: <GiSiren fontSize={'70px'} />, name: 'Simulacros de emergencia', disabled: 'disabled' },
    { path: '/pagina8', icon: <BsLightbulb fontSize={'50px'} />, name: 'Medición de iluminación', disabled: 'disabled' },
    { path: '/pagina9', icon: <MdNoiseControlOff fontSize={'50px'} />, name: 'Medición de ruido', disabled: 'disabled' },
    { path: '/pagina10', icon: <MdNoiseAware fontSize={'50px'} />, name: 'Medición de ruidos molestos al vecindario', disabled: 'disabled' },
    { path: '/pagina11', icon: <FcElectricity fontSize={'50px'} />, name: 'Medición de puesta a tierra', disabled: 'disabled' },
    { path: '/pagina12', icon: <GiBodyHeight fontSize={'50px'} />, name: 'Ergonomía de los puestos de trabajo', disabled: 'disabled' },
    { path: '/pagina13', icon: <BsFire fontSize={'50px'} />, name: 'Carga de fuego', disabled: 'disabled' },
    { path: '/pagina14', icon: <FaFireExtinguisher fontSize={'50px'} />, name: 'Control mensual de matafuegos', disabled: 'disabled' },
    { path: '/pagina15', icon: <FontAwesomeIcon icon={faPersonFallingBurst} fontSize={'50px'} />, name: 'Investigación de accidentes', disabled: 'disabled' },
    { path: '/pagina16', icon: <HiOutlineDocumentReport fontSize={'50px'} />, name: 'Informe análisis de riesgos laborales', disabled: 'disabled' },
    { path: '/pagina17', icon: <GiFuelTank fontSize={'50px'} />, name: 'Certificación tanque de combustible', disabled: 'disabled' },
    { path: '/pagina18', icon: <AiOutlineIdcard fontSize={'50px'} />, name: 'Carnet de autoelevadoristas', disabled: 'disabled' },
    { path: '/pagina19', icon: <BiShieldPlus fontSize={'50px'} />, name: 'Visitas ART', disabled: 'disabled' },
    { path: '/pagina20', icon: <FcInspection fontSize={'50px'} />, name: 'Inspecciones SRT', disabled: 'disabled' },
    { path: '/pagina21', icon: <BsClipboardCheck fontSize={'50px'} />, name: 'Planos de seguridad', disabled: 'disabled' },
    { path: '/pagina22', icon: <TbVirusOff fontSize={'50px'} />, name: 'Protocolo y control COVID-19 037', disabled: 'disabled' },
    // Agrega más objetos según la cantidad de iconos que necesites
  ];

  return (
    <div className={styles.iconContainer}>
      {icons.map((icon) => (
        <Link to={icon.path} key={icon.path} className={`${styles.iconLink}`}>
          {icon.icon}
          <div className={styles.iconName}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Hys