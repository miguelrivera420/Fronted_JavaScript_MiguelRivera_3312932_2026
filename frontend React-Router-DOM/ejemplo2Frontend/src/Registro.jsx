import { Link } from "react-router-dom";

function Registro() {
  return (
    <div>
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre" />
      <br />
      <input type="text" placeholder="Correo" />
      <br />
      <input type="password" placeholder="Contraseña" />
      <br />
      <button>Registrarse</button>
      <p>
        <Link to="/">Volver al Login</Link>
      </p>
    </div>
  );
}

export default Registro;