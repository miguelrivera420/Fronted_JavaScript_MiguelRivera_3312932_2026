export default function Actividad7Peliculas() {

  const peliculas = [
    { id: 1, titulo: "Inception", director: "Christopher Nolan", genero: "Ciencia Ficción", anio: 2010, duracion: "148 min" },
    { id: 2, titulo: "The Dark Knight", director: "Christopher Nolan", genero: "Acción", anio: 2008, duracion: "152 min" },
    { id: 3, titulo: "Pulp Fiction", director: "Quentin Tarantino", genero: "Crimen", anio: 1994, duracion: "154 min" },
    { id: 4, titulo: "Interstellar", director: "Christopher Nolan", genero: "Ciencia Ficción", anio: 2014, duracion: "169 min" },
    { id: 5, titulo: "Forrest Gump", director: "Robert Zemeckis", genero: "Drama", anio: 1994, duracion: "142 min" },
    { id: 6, titulo: "Matrix", director: "Hermanas Wachowski", genero: "Ciencia Ficción", anio: 1999, duracion: "136 min" },
    { id: 7, titulo: "Gladiador", director: "Ridley Scott", genero: "Acción / Drama", anio: 2000, duracion: "155 min" },
    { id: 8, titulo: "Parasite", director: "Bong Joon-ho", genero: "Suspenso", anio: 2019, duracion: "132 min" },
    { id: 9, titulo: "El Señor de los Anillos", director: "Peter Jackson", genero: "Fantasía", anio: 2001, duracion: "178 min" },
    { id: 10, titulo: "Oppenheimer", director: "Christopher Nolan", genero: "Biografía", anio: 2023, duracion: "180 min" }
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 7: Catálogo de Películas</h2>
      <div>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="tarjeta-pelicula">
            <h3 style={{ margin: '0 0 5px 0' }}>{pelicula.titulo} ({pelicula.anio})</h3>
            <p style={{ margin: 0 }}>
              <strong>Director:</strong> {pelicula.director} | <strong>Género:</strong> {pelicula.genero} | <strong>Duración:</strong> {pelicula.duracion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}