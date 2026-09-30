function Actividad2Ciudades() {
  const ciudades = [
    "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
    "Bucaramanga", "Pereira", "Manizales", "Santa Marta", "Pasto"
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 2: Lista de Ciudades de Colombia</h2>
      <ul>
        {ciudades.map((ciudad, index) => (
          <li key={index}>{ciudad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Actividad2Ciudades