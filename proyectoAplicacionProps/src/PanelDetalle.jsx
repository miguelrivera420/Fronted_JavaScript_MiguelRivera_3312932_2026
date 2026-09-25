
function PanelDetalle() {
  return (
    <aside className="panel">
      <img className="panel__imagen" src="/img/premium.svg" alt="Servicio seleccionado" />

      <h2 className="panel__titulo">Servicio Premium</h2>
      <p className="panel__categoria">Premium</p>
      <p className="panel__estrellas">★★★★☆</p>

      <p className="panel__texto">
        Servicio especializado para empresas que necesitan una interfaz
        administrativa clara, moderna y fácil de mantener.
      </p>

      <button className="panel__boton">Contratar</button>
    </aside>
  );
}

export default PanelDetalle;
