import Card from "./Card.jsx";

const servicios = [
  {
    id: 1,
    titulo: "Diseño Web",
    descripcion: "Diseño de interfaces modernas",
    categoria: "Diseño",
    imagen: "/img/diseno.svg",
    precio: 250000,
    estado: "Disponible",
    destacado: false,
  },
  {
    id: 2,
    titulo: "Servicio Premium",
    descripcion: "Servicio especializado",
    categoria: "Premium",
    imagen: "/img/premium.svg",
    precio: 450000,
    estado: "Disponible",
    destacado: true,
  },
  {
    id: 3,
    titulo: "Bases de Datos",
    descripcion: "Modelado y consultas SQL",
    categoria: "Datos",
    imagen: "/img/datos.svg",
    precio: 320000,
    estado: "Ocupado",
    destacado: false,
  },
  {
    id: 4,
    titulo: "Desarrollo Frontend",
    descripcion: "Aplicaciones con React",
    categoria: "Desarrollo",
    imagen: "/img/frontend.svg",
    precio: 380000,
    estado: "Disponible",
    destacado: false,
  },
  {
    id: 5,
    titulo: "Soporte Técnico",
    descripcion: "Mantenimiento y asistencia",
    categoria: "Soporte",
    imagen: "/img/soporte.svg",
    precio: 120000,
    estado: "Agotado",
    destacado: false,
  },
  {
    id: 6,
    titulo: "Consultoría",
    descripcion: "Asesoría en proyectos web",
    categoria: "Asesoría",
    imagen: "/img/consultoria.svg",
    precio: 200000,
    estado: "Disponible",
    destacado: true,
  },
];

const pestanas = ["Resumen", "Servicios", "Proyectos", "Reportes"];
const filtros = ["Todos", "Disponibles", "Ocupados", "Agotados", "Destacados"];

function Dashboard() {
  return (
    <main className="dashboard">
      <header className="dashboard__encabezado">
        <h1 className="dashboard__titulo">UI Design</h1>
        <input className="dashboard__buscador" type="search" placeholder="Buscar" />
      </header>

      <nav className="dashboard__pestanas">
        {pestanas.map((p, i) => (
          <button key={p} className={i === 2 ? "pestana pestana--activa" : "pestana"}>
            {p}
          </button>
        ))}
      </nav>

      <section className="dashboard__panel">
        <div className="dashboard__filtros">
          {filtros.map((f, i) => (
            <button key={f} className={i === 1 ? "filtro filtro--activo" : "filtro"}>
              {f}
            </button>
          ))}
        </div>

        <div className="dashboard__tarjetas">
          {servicios.map((s) => (
            <Card
              key={s.id}
              titulo={s.titulo}
              descripcion={s.descripcion}
              categoria={s.categoria}
              imagen={s.imagen}
              precio={s.precio}
              estado={s.estado}
              destacado={s.destacado}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;