
const opciones = [
  { id: 1, icono: "▲", nombre: "Inicio" },
  { id: 2, icono: "▮", nombre: "Estadísticas" },
  { id: 3, icono: "★", nombre: "Favoritos" },
  { id: 4, icono: "▦", nombre: "Dashboard", activo: true },
  { id: 5, icono: "●", nombre: "Perfil" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="sidebar__menu" aria-label="Menú">☰</button>

      <nav className="sidebar__nav">
        {opciones.map((op) => (
          <button
            key={op.id}
            title={op.nombre}
            aria-label={op.nombre}
            className={op.activo ? "sidebar__item sidebar__item--activo" : "sidebar__item"}
          >
            {op.icono}
          </button>
        ))}
      </nav>

      <button className="sidebar__item sidebar__ajustes" aria-label="Ajustes">⚙</button>
    </aside>
  );
}

export default Sidebar;
