function Actividad1Libro() {

  const titulo = "Cien años de soledad";
  const autor = "Gabriel García Márquez";
  const anio = 1967;
  const editorial = "Editorial Sudamericana";
  const paginas = 471;

  return (
    <section className="seccion-actividad">
      <h2>Actividad 1: Información de un Libro</h2>
      <h3>{titulo}</h3>
      <p><strong>Autor:</strong> {autor}</p>
      <p><strong>Año de publicación:</strong> {anio}</p>
      <p><strong>Editorial:</strong> {editorial}</p>
      <p><strong>Número de páginas:</strong> {paginas}</p>
    </section>
  );
}

export default Actividad1Libro