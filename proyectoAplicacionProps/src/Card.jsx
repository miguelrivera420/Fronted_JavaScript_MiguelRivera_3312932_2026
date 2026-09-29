function Card(props) {
    return (

        <div className={props.destacado ? "Card destacada" : "Card"}>
            {props.destacado && <p>📌 Destacado</p>}
            <img src={props.imagen} alt={props.titulo} />
            <div className="informacion">
                <p className="categoria">{props.categoria}</p>
                <h3>{props.titulo}</h3>
                <p>{props.descripcion}</p>
                <p className="precio">${props.precio}</p>
                <p>{props.estado}</p>
            </div>
        </div>
    )
}

export default Card