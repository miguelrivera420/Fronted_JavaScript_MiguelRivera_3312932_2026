
function Actividad5Videojuegos() {
  const videojuegos = [
    { id: 1, nombre: "The Legend of Zelda: BOTW", plataforma: "Nintendo Switch", genero: "Aventura", anio: 2017 },
    { id: 2, nombre: "The Witcher 3", plataforma: "PC / PS4 / Xbox", genero: "RPG", anio: 2015 },
    { id: 3, nombre: "God of War Ragnarök", plataforma: "PS4 / PS5", genero: "Acción", anio: 2022 },
    { id: 4, nombre: "Minecraft", plataforma: "Multiplataforma", genero: "Sandbox", anio: 2011 },
    { id: 5, nombre: "Red Dead Redemption 2", plataforma: "PC / PS4 / Xbox", genero: "Mundo Abierto", anio: 2018 },
    { id: 6, nombre: "Elden Ring", plataforma: "PC / PS5 / Xbox", genero: "Soulslike", anio: 2022 },
    { id: 7, nombre: "Super Mario Odyssey", plataforma: "Nintendo Switch", genero: "Plataformas", anio: 2017 },
    { id: 8, nombre: "Cyberpunk 2077", plataforma: "PC / Consolas", genero: "RPG", anio: 2020 }
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 5: Tabla de Videojuegos</h2>
      <table className="tabla-custom">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Género</th>
            <th>Año de Lanzamiento</th>
          </tr>
        </thead>
        <tbody>
          {videojuegos.map((juego) => (
            <tr key={juego.id}>
              <td>{juego.id}</td>
              <td>{juego.nombre}</td>
              <td>{juego.plataforma}</td>
              <td>{juego.genero}</td>
              <td>{juego.anio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Actividad5Videojuegos