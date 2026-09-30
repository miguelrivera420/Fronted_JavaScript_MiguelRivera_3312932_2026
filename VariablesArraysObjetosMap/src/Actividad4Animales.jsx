
function Actividad4Animales() {
  const animales = [
    { id: 1, nombre: "Jaguar", especie: "Panthera onca", habitat: "Selva tropical" },
    { id: 2, nombre: "Cóndor Andino", especie: "Vultur gryphus", habitat: "Montañas de los Andes" },
    { id: 3, nombre: "Oso de Anteojos", especie: "Tremarctos ornatus", habitat: "Bosques de niebla" },
    { id: 4, nombre: "Delfín Rosado", especie: "Inia geoffrensis", habitat: "Ríos amazónicos" },
    { id: 5, nombre: "Puma", especie: "Puma concolor", habitat: "Bosques y montañas" },
    { id: 6, nombre: "Águila Harpía", especie: "Harpia harpyja", habitat: "Selva húmeda" },
    { id: 7, nombre: "Tucán", especie: "Ramphastidae", habitat: "Bosques tropicales" },
    { id: 8, nombre: "Capibara", especie: "Hydrochoerus hydrochaeris", habitat: "Humedales" },
    { id: 9, nombre: "Flamenco", especie: "Phoenicopterus", habitat: "Lagunas de agua salada" },
    { id: 10, nombre: "Perezoso", especie: "Bradypus tridactylus", habitat: "Copas de los árboles" }
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 4: Lista de Animales (Tarjetas)</h2>
      <div className="grid-tarjetas">
        {animales.map((animal) => (
          <div key={animal.id} className="tarjeta-animal">
            <h3 style={{ margin: '0 0 8px 0' }}>{animal.nombre}</h3>
            <p style={{ margin: '4px 0' }}><strong>Especie:</strong> <em>{animal.especie}</em></p>
            <p style={{ margin: '4px 0' }}><strong>Hábitat:</strong> {animal.habitat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Actividad4Animales