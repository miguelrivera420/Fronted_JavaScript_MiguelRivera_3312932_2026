function ActividadFinalBiblioteca() {
  const nombreBiblioteca = "Biblioteca Central de Conocimiento";
  const ubicacion = "Sede Principal - Edificio A, Piso 2";
  const horario = "Lunes a Viernes: 7:00 AM - 8:00 PM";

  const catalogoLibros = [
    { id: 101, titulo: "Clean Code", autor: "Robert C. Martin", categoria: "Programación", disponible: "Sí" },
    { id: 102, titulo: "JavaScript: The Good Parts", autor: "Douglas Crockford", categoria: "Programación", disponible: "Sí" },
    { id: 103, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", categoria: "Literatura", disponible: "No" },
    { id: 104, titulo: "Sapiens", autor: "Yuval Noah Harari", categoria: "Historia", disponible: "Sí" },
    { id: 105, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", categoria: "Clásicos", disponible: "Sí" },
    { id: 106, titulo: "Design Patterns", autor: "Erich Gamma et al.", categoria: "Software", disponible: "No" },
    { id: 107, titulo: "Breves respuestas a las grandes preguntas", autor: "Stephen Hawking", categoria: "Ciencia", disponible: "Sí" },
    { id: 108, titulo: "Hábitos Atómicos", autor: "James Clear", categoria: "Desarrollo Personal", disponible: "Sí" }
  ];

  return (
    <section className="seccion-actividad contenedor-final">
      <h1>Actividad Final: {nombreBiblioteca}</h1>
      <p><strong>Ubicación:</strong> {ubicacion}</p>
      <p><strong>Horarios de Atención:</strong> {horario}</p>

      <h2>Catálogo de Libros Destacados</h2>
      <table className="tabla-custom">
        <thead>
          <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoría</th>
            <th>Disponible</th>
          </tr>
        </thead>
        <tbody>
          {catalogoLibros.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.titulo}</td>
              <td>{item.autor}</td>
              <td>{item.categoria}</td>
              <td style={{ color: item.disponible === "Sí" ? "green" : "red", fontWeight: "bold" }}>
                {item.disponible}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default ActividadFinalBiblioteca