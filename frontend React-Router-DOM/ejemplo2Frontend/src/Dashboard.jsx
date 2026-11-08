import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/productos">Productos</Link> |{" "}
        <Link to="/contacto">Contacto</Link> |{" "}
        <Link to="/">Cerrar sesión</Link>
      </nav>
      <p>Bienvenido a la aplicación.</p>
    </div>
  );
}

export default Dashboard;