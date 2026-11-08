import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";
import Dashboard from "./Dashboard";
import Productos from "./Productos";
import Contacto from "./Contacto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;