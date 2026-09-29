function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="logo">
            ☰ Menú principal
            </div>
            <div className="menu">
                <button>▲</button>
                <button>▮</button>
                <button>★</button>
                <button>▦</button>
                <button>⊞</button>
                <button>●</button>
            </div>

            <div className="perfil">
                <p>👤</p>
            </div>
            <div className="menu">
                <button>⚙️</button>
            </div>
        </div>
    )
}

export default Sidebar