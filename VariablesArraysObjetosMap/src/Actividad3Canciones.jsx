function Actividad3Canciones() {
  const canciones = [
    { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", album: "A Night at the Opera", anio: 1975 },
    { id: 2, titulo: "Hotel California", artista: "Eagles", album: "Hotel California", anio: 1976 },
    { id: 3, titulo: "Imagine", artista: "John Lennon", album: "Imagine", anio: 1971 },
    { id: 4, titulo: "Billie Jean", artista: "Michael Jackson", album: "Thriller", anio: 1982 },
    { id: 5, titulo: "Smells Like Teen Spirit", artista: "Nirvana", album: "Nevermind", anio: 1991 },
    { id: 6, titulo: "Shape of You", artista: "Ed Sheeran", album: "÷", anio: 2017 },
    { id: 7, titulo: "Blinding Lights", artista: "The Weeknd", album: "After Hours", anio: 2020 },
    { id: 8, titulo: "De Música Ligera", artista: "Soda Stereo", album: "Canción Animal", anio: 1990 }
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 3: Tabla de Canciones</h2>
      <table className="tabla-custom">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {canciones.map((cancion) => (
            <tr key={cancion.id}>
              <td>{cancion.id}</td>
              <td>{cancion.titulo}</td>
              <td>{cancion.artista}</td>
              <td>{cancion.album}</td>
              <td>{cancion.anio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Actividad3Canciones