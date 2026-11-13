const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'miguelrivera24',
  database: 'taller_api'
});

db.connect((err) => {
  if (err) {
    console.log('Error de conexión:', err.message);
    return;
  }
  console.log('Conectado a MySQL');
});

app.use('/prueba', require('./routes/PruebaRoutes'));
app.use('/usuarios', require('./routes/UsuariosRoutes')(db));
app.use('/productos', require('./routes/ProductosRoutes')(db));

app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});