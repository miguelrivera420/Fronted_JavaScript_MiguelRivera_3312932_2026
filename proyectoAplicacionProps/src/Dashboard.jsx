import Card from "./Card"
function Dashboard(props) {
    return (
        <div className="Dashboard">
            <div className="encabezado">
                <div>
                    <p>UI Design</p>
                </div>
                <input
                    type="text"
                    placeholder="Buscar"
                />
            </div>
            <div className="menu-superior">
                <button>Todos</button>
                <button>Diseño</button>
                <button>Desarrollo</button>
                <button>Servicios</button>
            </div>
            <div className="contenido">
                <div className="tarjetas">
                    <Card
                        titulo="Cámara Réflex"
                        descripcion="Fotografía profesional con lentes intercambiables."
                        categoria="Fotografía"
                        imagen="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80"
                        precio={890000}
                        estado="Disponible"
                    ></Card>

                    <Card
                        titulo="Bicicleta MTB"
                        descripcion="Doble suspensión ideal para rutas de montaña."
                        categoria="Deportes"
                        imagen="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80"
                        precio={1450000}
                        estado="Disponible"
                    ></Card>

                    <Card
                        titulo="Zapatillas Running"
                        descripcion="Amortiguación ligera para largas distancias."
                        categoria="Calzado"
                        imagen="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
                        precio={280000}
                        estado="Nuevo"
                    ></Card>

                    <Card
                        titulo="Cafetera Automática"
                        descripcion="Prepara espresso y capuchino con un solo toque."
                        categoria="Hogar"
                        imagen="https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80"
                        precio={520000}
                        estado="Disponible"
                        destacado={true}
                    ></Card>

                    <Card
                        titulo="Audífonos TWS"
                        descripcion="Sonido inalámbrico con cancelación de ruido."
                        categoria="Audio"
                        imagen="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&q=80"
                        precio={195000}
                        estado="Nuevo"
                        destacado={true}
                    ></Card>

                    <Card
                        titulo="Dron 4K"
                        descripcion="Grabación aérea con estabilización y GPS."
                        categoria="Tecnología"
                        imagen="https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&q=80"
                        precio={2100000}
                        estado="En venta"
                        destacado={true}
                    ></Card>
                </div>

                <div className="panel">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPr61I1wZ9vVp-bfg2llh6Kd_MOY3qx7Y9vqLg1ZC4A&s=10" alt="Computador destacado" />
                    <div className="imagen-panel"></div>
                    <h2>Computador destacado</h2>
                    <p>Portátil ideal para estudiar, trabajar y jugar.</p>
                    <p>Disponible</p>
                    <button>Ver servicio</button>
                </div>
            </div>
        </div>
    )
}
export default Dashboard