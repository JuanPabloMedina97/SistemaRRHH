import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './RegisterButton.css'


const validationSchema = yup.object().shape({
  nombre: yup.string().required('Este campo es obligatorio'),
  apellido: yup.string().required('Este campo es obligatorio'),
  legajo: yup.number().required('Este campo es obligatorio'),
  correo: yup.string().email('Ingrese un correo electrónico válido').required('Este campo es obligatorio'),
  contraseña: yup.string().required('Este campo es obligatorio'),
  confirmarContraseña: yup.string()
    .oneOf([yup.ref('contraseña'), null], 'Las contraseñas deben coincidir')
    .required('Este campo es obligatorio')
});

const RegisterButton = () => {
  const [showModal, setShowModal] = useState(false);
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

 
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      legajo: '',
      correo: '',
      contraseña: '',
      confirmarContraseña: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();

    }
  });

  return (
    <div>
      <button onClick={toggleModal} className='register-button'>Registrarse</button>
      {showModal &&
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Registro</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" onChange={formik.handleChange} value={formik.values.nombre} />
                {formik.errors.nombre && formik.touched.nombre && <div className="error">{formik.errors.nombre}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" name="apellido" onChange={formik.handleChange} value={formik.values.apellido} />
                {formik.errors.apellido && formik.touched.apellido && <div className="error">{formik.errors.apellido}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="legajo">Número de legajo:</label>
                <input type="text" name="legajo" onChange={formik.handleChange} value={formik.values.legajo} />
                {formik.errors.legajo && formik.touched.legajo && <div className="error">{formik.errors.legajo}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo electrónico:</label>
                <input type="text" name="correo" onChange={formik.handleChange} value={formik.values.correo} />
                {formik.errors.correo && formik.touched.correo && <div className="error">{formik.errors.correo}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" name="contraseña" onChange={formik.handleChange} value={formik.values.contraseña} />
                {formik.errors.contraseña && formik.touched.contraseña && <div className="error">{formik.errors.contraseña}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
                <input type="password" name="confirmarContraseña" onChange={formik.handleChange} value={formik.values.confirmarContraseña} />
                {formik.errors.confirmarContraseña && formik.touched.confirmarContraseña && <div className="error">{formik.errors.confirmarContraseña}</div>}
              </div>
              <div className="form-group">
                <button type="submit">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}

export default RegisterButton;