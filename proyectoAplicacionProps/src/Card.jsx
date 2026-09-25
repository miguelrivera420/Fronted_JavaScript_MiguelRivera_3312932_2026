
function Card({ titulo, descripcion, categoria, imagen, precio, estado, destacado }) {
  const clase = destacado ? "card card--destacada" : "card";
  const claseEstado = "card__estado card__estado--" + estado.toLowerCase();

  return (
    <article className={clase}>
      {destacado && <span className="card__etiqueta">Destacado</span>}

      <img className="card__imagen" src={imagen} alt={titulo} />

      <div className="card__cuerpo">
        <span className="card__categoria">{categoria}</span>
        <h3 className="card__titulo">{titulo}</h3>
        <p className="card__descripcion">{descripcion}</p>

        <div className="card__pie">
          <strong className="card__precio">${precio.toLocaleString("es-CO")}</strong>
          <span className={claseEstado}>{estado}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
