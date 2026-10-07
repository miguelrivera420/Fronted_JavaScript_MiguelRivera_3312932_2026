import { Container, Card, Button } from "react-bootstrap";

function Dashboard(){
    return(
        <Container className="p-4">

            <h2> Dashboard </h2>

            <p>
                Resumen general del sistema
            </p>

            <div className="d-flex gap-3">

                <Card style={{ width: '200px'}}>

                    <Card.Body>

                        <Card.Title>
                            Usuarios
                        </Card.Title>

                        <h2>120</h2>

                        <Card.Text>
                            Usuarios registrados
                        </Card.Text>

                        <Button variant="primary">
                            Ver usuarios
                        </Button>

                    </Card.Body>

                </Card>


                <Card style={{ width: '200px'}}>
                    
                    <Card.Body>

                        <Card.Title>
                            Productos
                        </Card.Title>

                        <h2>45</h2>

                        <Card.Text>
                            Productos disponibles
                        </Card.Text>

                        <Button variant="success">
                            Ver productos
                        </Button>

                    </Card.Body>

                </Card>


                <Card style={{ width: '200px'}}>
                    
                    <Card.Body>

                        <Card.Title>
                            Ventas
                        </Card.Title>

                        <h2>45</h2>

                        <Card.Text>
                            Ventas realizadas
                        </Card.Text>

                        <Button variant="warning">
                            Ver Ventas
                        </Button>

                    </Card.Body>

                </Card>


                <Card style={{ width: '200px'}}>
                    
                    <Card.Body>

                        <Card.Title>
                            Ingresos
                        </Card.Title>

                        <h2>70</h2>

                        <Card.Text>
                            Ingresos del mes
                        </Card.Text>

                        <Button variant="dark">
                            Ver Ingresos
                        </Button>

                    </Card.Body>

                </Card>

            </div>
        </Container>
    )
}

export default Dashboard