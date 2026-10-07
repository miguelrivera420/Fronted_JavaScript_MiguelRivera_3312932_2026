import { Table, Pagination } from 'react-bootstrap';

function TablaProductos() {
  const productos = [
    { id: 1, nombre: 'Chocorramo', precio: 2500, categoria: 'Ponqués' },
    { id: 2, nombre: 'Yogurt alpina melocotón', precio: 6200, categoria: 'Lácteos' },
    { id: 3, nombre: 'Papas margarita pollo', precio: 3000, categoria: 'Pasabocas' },
    { id: 4, nombre: 'Leche alquería entera', precio: 4100, categoria: 'Lácteos' },
    { id: 5, nombre: 'Café sello rojo', precio: 14500, categoria: 'Abarrotes' },
    { id: 6, nombre: 'Galletas festival limón', precio: 4800, categoria: 'Galletas' }
  ];

  return (
    <div className="p-4">
      <div className="w-75 mx-auto">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th colSpan={4} className="text-center fs-4 bg-light">
                Compras del supermercado
              </th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {productos
              .slice(
                window.location.search.includes('pagina=2') ? 3 : 0,
                window.location.search.includes('pagina=2') ? 6 : 3
              )
              .map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>${producto.precio}</td>
                  <td>{producto.categoria}</td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Pagination className="justify-content-center">
          <Pagination.Prev href="?pagina=1" />
          <Pagination.Item href="?pagina=1" active={!window.location.search.includes('pagina=2')}>
            1
          </Pagination.Item>
          <Pagination.Item href="?pagina=2" active={window.location.search.includes('pagina=2')}>
            2
          </Pagination.Item>
          <Pagination.Next href="?pagina=2" />
        </Pagination>
      </div>
    </div>
  );
}

export default TablaProductos;