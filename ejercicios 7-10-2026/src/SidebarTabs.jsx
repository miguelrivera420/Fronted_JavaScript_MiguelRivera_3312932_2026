import { Nav } from 'react-bootstrap'

function SiderbarTabs (){
    return(
        <div className='bg-dark' p-3 style={{width:'200px', minHeight: '100vh'}}>

            <h4 className='text-white mb-5'> Mi sistema </h4>

            <Nav variant='tabs'>
                <Nav.Item>
                    <Nav.Link>
                        <i class="bi bi-house-add-fill me-2"></i>
                        Inicio
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link>
                        <i class="bi bi-people me-2"></i>
                        Usuarios
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link>
                        <i class="bi bi-box-seam-fill me-2"></i>
                        Productos
                    </Nav.Link>
                </Nav.Item>


                <Nav.Item>
                    <Nav.Link>
                        <i class="bi bi-cart-check-fill me-2"></i>
                        Ventas
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link>
                        <i class="bi bi-briefcase-fill me-2"></i>
                        Finanzas
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link>
                        <i class="bi bi-gear-fill me-2"></i>
                        Configuracion
                    </Nav.Link>
                </Nav.Item>

            </Nav>

            <button className='btn btn-danger w-100 mt-5'>
                <i class="bi bi-door-open me-2"></i>
                Cerrar sesion
            </button>
        </div>
    )
}

export default SiderbarTabs