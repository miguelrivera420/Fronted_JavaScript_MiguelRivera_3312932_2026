import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Usuario" />
      <br />
      <input type="password" placeholder="Contraseña" />
      <br />
      <button onClick={() => navigate("/dashboard")}>Ingresar</button>
      <p>
       <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;