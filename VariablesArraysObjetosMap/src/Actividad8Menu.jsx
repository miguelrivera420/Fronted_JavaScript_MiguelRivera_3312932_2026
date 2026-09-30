function Actividad8Menu() {

  const menu = [
    { id: 1, nombre: "Bandeja Paisa", categoria: "Plato Fuerte", precio: 35000 },
    { id: 2, nombre: "Ajiaco Santafereño", categoria: "Sopas", precio: 28000 },
    { id: 3, nombre: "Empanada de Carne", categoria: "Entrada", precio: 3500 },
    { id: 4, nombre: "Sancocho de Gallina", categoria: "Sopas", precio: 30000 },
    { id: 5, nombre: "Sobrebarriga en Salsa", categoria: "Plato Fuerte", precio: 32000 },
    { id: 6, nombre: "Limonada de Coco", categoria: "Bebidas", precio: 9000 },
    { id: 7, nombre: "Jugo Natural de Lulo", categoria: "Bebidas", precio: 7000 },
    { id: 8, nombre: "Flan de Arequipe", categoria: "Postres", precio: 8500 },
    { id: 9, nombre: "Tres Leches", categoria: "Postres", precio: 9000 },
    { id: 10, nombre: "Patacón con Todo", categoria: "Entrada", precio: 18000 }
  ];

  return (
    <section className="seccion-actividad">
      <h2>Actividad 8: Menú de Restaurante</h2>
      <div className="contenedor-menu">
        {menu.map((plato) => (
          <div key={plato.id} className="tarjeta-plato">
            <span className="categoria-tag">{plato.categoria}</span>
            <h4 style={{ margin: '8px 0' }}>{plato.nombre}</h4>
            <p className="precio-tag">${plato.precio.toLocaleString('es-CO')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Actividad8Menu