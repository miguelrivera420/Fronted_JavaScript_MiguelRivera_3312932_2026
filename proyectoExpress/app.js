const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.get('/inicio', (req, res) => {
  res.json({ mensaje: 'Bienvenido' });
});

app.get('/informacion', (req, res) => {
  res.json({ servicio: 'API de solicitudes', version: '1.0' });
});

app.post('/solicitudes', (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const correo = req.body.correo;


  if (!nombre || !apellido || !correo) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  if (!correo.includes('@') || !correo.includes('.')) {
    return res.status(400).json({ error: 'Correo inválido' });
  }

  res.status(201).json({ mensaje: 'Solicitud recibida' });
});


app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});