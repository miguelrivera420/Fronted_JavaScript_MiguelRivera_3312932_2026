import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Productos() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [productos, setProductos] = useState([]);

  const consultar = () => {
    fetch("http://localhost:5000/productos")
      .then((res) => res.json())
      .then((datos) => {
        if (Array.isArray(datos)) {
          setProductos(datos);
        } else {
          setMensaje(datos.mensaje);
        }
      })
      .catch(() => setMensaje("No se pudo conectar con el servidor"));
  };

  useEffect(() => {
    consultar();
  }, []);

  const guardar = () => {
    if (!nombre || !categoria || !precio || !cantidad) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    const precioNumero = Number(precio);
    if (isNaN(precioNumero) || precioNumero < 0) {
      setMensaje("El precio debe ser un número mayor o igual a 0");
      return;
    }
    const cantidadNumero = Number(cantidad);
    if (!Number.isInteger(cantidadNumero) || cantidadNumero < 0) {
      setMensaje("La cantidad debe ser un número entero mayor o igual a 0");
      return;
    }

    fetch("http://localhost:5000/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, categoria, precio, cantidad }),
    })
      .then((res) => res.json())
      .then((datos) => {
        setMensaje(datos.mensaje);
        if (datos.mensaje === "producto registrado correctamente") {
          setNombre("");
          setCategoria("");
          setPrecio("");
          setCantidad("");
          consultar();
        }
      })
      .catch(() => setMensaje("No se pudo conectar con el servidor"));
  };

  return (
    <div>
      <h1>Productos</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/contacto">Contacto</Link> |{" "}
        <Link to="/">Cerrar sesión</Link>
      </nav>

      <h2>Registrar producto</h2>
      <input placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <input placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      <br />
      <input placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <br />
      <input placeholder="Cantidad disponible" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
      <br />
      <button onClick={guardar}>Guardar</button>

      <p>{mensaje}</p>

      <h2>Lista de productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos registrados</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.categoria}</td>
                <td>{p.precio}</td>
                <td>{p.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Productos;