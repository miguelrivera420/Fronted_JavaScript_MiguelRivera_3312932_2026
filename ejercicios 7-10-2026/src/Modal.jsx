import { Container, Modal, Button } from "react-bootstrap";

export default function Modales (){
    function abrirModal(){
        let m = document.getElementById("miModal")
        if (m){
            m.style.display="block"
        }
    }
    function cerrarModal(){
        let m = document.getElementById("miModal")
        if (m){
            m.style.display="none"
        }
    }
    return(
<Container>
    <Button variant="primary" onClick={abrirModal}>Abrir modal</Button>
    <dialog id="miModal" style={{display:"none",position:"initial"}}>
        <Modal.Header>
            <Modal.Title>
                 Encabezado del Modal
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Modal Centrado</h4>
            <p>
                Para poder ejecutar un modal con react-bootstrap, si queremos que se vea como un modal es necesario usar un hook en este caso un useState
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={cerrarModal}>Cerrar</Button>
        </Modal.Footer>
    </dialog>
</Container>
)
}