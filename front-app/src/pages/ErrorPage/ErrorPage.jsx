
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);


  return (
    <div id="error-page">
      <h1>Ocurrió un error</h1>
      <p>Por favor comunicarse con el administrador de la pagina.</p>
      <p>juanpablo@acheral.com.ar</p>
      <p>
        <span>Error: </span><i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage