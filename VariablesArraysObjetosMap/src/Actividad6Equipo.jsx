function Actividad6Equipo() {

  const equipoFutbol = [
    { numero: 1, nombre: "David", apellido: "Ospina", posicion: "Portero", edad: 38 },
    { numero: 2, nombre: "Daniel", apellido: "Muñoz", posicion: "Lateral Derecho", edad: 28 },
    { numero: 3, nombre: "Davinson", apellido: "Sánchez", posicion: "Defensa Central", edad: 28 },
    { numero: 4, nombre: "Jhon", apellido: "Lucumí", posicion: "Defensa Central", edad: 26 },
    { numero: 5, nombre: "Johan", apellido: "Mojica", posicion: "Lateral Izquierdo", edad: 32 },
    { numero: 6, nombre: "Jefferson", apellido: "Lerma", posicion: "Mediocampista", edad: 29 },
    { numero: 7, nombre: "Richard", apellido: "Ríos", posicion: "Mediocampista", edad: 24 },
    { numero: 8, nombre: "Jhon", apellido: "Arias", posicion: "Extremo Derecho", edad: 26 },
    { numero: 9, nombre: "James", apellido: "Rodríguez", posicion: "Volante Creativo", edad: 33 },
    { numero: 10, nombre: "Luis", apellido: "Díaz", posicion: "Extremo Izquierdo", edad: 27 },
    { numero: 11, nombre: "Jhon", apellido: "Córdoba", posicion: "Delantero Centro", edad: 31 }
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 6: Equipo de Fútbol</h2>
      <table className="tabla-custom">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre Completo</th>
            <th>Posición</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {equipoFutbol.map((jugador) => (
            <tr key={jugador.numero}>
              <td><strong>{jugador.numero}</strong></td>
              <td>{jugador.nombre} {jugador.apellido}</td>
              <td>{jugador.posicion}</td>
              <td>{jugador.edad} años</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Actividad6Equipo