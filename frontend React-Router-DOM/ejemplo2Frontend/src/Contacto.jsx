import { Link } from "react-router-dom";

function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Miguel Rivera</p>
      <p>Correo: contacto@miguel.com</p>
      <p>Teléfono: 3234013106</p>
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}

export default Contacto;